(function (global) {
  'use strict';
  const TNR = 'Times New Roman';
  const AUTHOR = 'Dr.dr.Tirta Darmawan Susanto,MKes';
  const encoder = new TextEncoder();
  const clean = value => String(value == null ? '' : value).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g, '');
  const textValue = value => Array.isArray(value) ? value.map(textValue).join('; ') : value && typeof value === 'object' ? Object.entries(value).map(([key, item]) => key + ': ' + textValue(item)).join('; ') : clean(value);
  const xml = value => clean(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  const list = value => Array.isArray(value) ? value : value == null || value === '' ? [] : [value];
  function normalize(report) {
    if (!report || typeof report !== 'object') throw new Error('Data laporan tidak tersedia.');
    const demographics = list(report.demographics).map(row => ({ label: clean(row.label), value: textValue(row.value) }));
    if (!demographics.length && report.patient) Object.entries(report.patient).forEach(([label, value]) => demographics.push({label, value: textValue(value)}));
    return {title: clean(report.title || 'Hasil Penilaian Tumbuh Kembang Anak'), demographics, sections: list(report.sections).map(section => ({title: clean(section.title || 'Penilaian'), rows: list(section.rows).map(row => ({label: clean(row.label), value: textValue(row.value)})), summary: textValue(section.summary), classification: textValue(section.classification), advice: list(section.advice).map(textValue), source: textValue(section.source), images: list(section.images)})), generatedAt: clean(report.generatedAt || new Date().toLocaleString('id-ID')), patient: report.patient || {}, theme: report.theme || {}};
  }
  function b64bytes(value) {
    const decoded = atob(value.replace(/\s/g, ''));
    return Uint8Array.from(decoded, char => char.charCodeAt(0));
  }
  async function imageData(image) {
    const src = image.dataUrl || image.src;
    if (!src) throw new Error('Sumber gambar laporan tidak tersedia.');
    let bytes, type;
    if (typeof src === 'string' && /^data:image\/(png|jpe?g);base64,/i.test(src)) {
      const match = src.match(/^data:image\/([^;]+);base64,(.*)$/is);
      type = /png/i.test(match[1]) ? 'png' : 'jpeg'; bytes = b64bytes(match[2]);
    } else {
      const response = await fetch(src);
      if (!response.ok) throw new Error('Gambar laporan tidak dapat dibaca.');
      bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes[0] === 137 && bytes[1] === 80) type = 'png';
      else if (bytes[0] === 255 && bytes[1] === 216) type = 'jpeg';
      else throw new Error('Gambar laporan harus dalam format PNG atau JPEG.');
    }
    if (type === 'png' && !(bytes[0] === 137 && bytes[1] === 80) || type === 'jpeg' && !(bytes[0] === 255 && bytes[1] === 216)) throw new Error('Data gambar laporan tidak valid.');
    const url = URL.createObjectURL(new Blob([bytes], {type: 'image/' + type}));
    try {
      const dimensions = await new Promise((resolve, reject) => {const img = new Image(); img.onload = () => resolve({width: img.naturalWidth, height: img.naturalHeight}); img.onerror = () => reject(new Error('Gambar laporan tidak dapat dibaca.')); img.src = url;});
      return {bytes, type, caption: clean(image.caption || ''), ...dimensions};
    } finally {URL.revokeObjectURL(url);}
  }
  const crcTable = (() => {const out = new Uint32Array(256); for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?0xEDB88320^(c>>>1):c>>>1;out[n]=c>>>0;}return out;})();
  function crc32(data) {let crc=0xFFFFFFFF; for(const byte of data) crc=crcTable[(crc^byte)&255]^(crc>>>8); return (crc^0xFFFFFFFF)>>>0;}
  function uint16(value) {return [value&255,(value>>>8)&255];}
  function uint32(value) {return [value&255,(value>>>8)&255,(value>>>16)&255,(value>>>24)&255];}
  function zipStore(entries) {
    const local=[], central=[]; let offset=0,centralSize=0;
    for(const [name,value] of entries){const data=typeof value==='string'?encoder.encode(value):value, filename=encoder.encode(name), crc=crc32(data); const header=Uint8Array.from([80,75,3,4,...uint16(20),...uint16(0x800),...uint16(0),...uint16(0),...uint16(33),...uint32(crc),...uint32(data.length),...uint32(data.length),...uint16(filename.length),...uint16(0)]);local.push(header,filename,data);const directory=Uint8Array.from([80,75,1,2,...uint16(20),...uint16(20),...uint16(0x800),...uint16(0),...uint16(0),...uint16(33),...uint32(crc),...uint32(data.length),...uint32(data.length),...uint16(filename.length),...uint16(0),...uint16(0),...uint16(0),...uint16(0),...uint32(0),...uint32(offset)]); central.push(directory,filename);centralSize+=directory.length+filename.length;offset+=header.length+filename.length+data.length;}
    return new Blob([...local,...central,Uint8Array.from([80,75,5,6,...uint16(0),...uint16(0),...uint16(entries.length),...uint16(entries.length),...uint32(centralSize),...uint32(offset),...uint16(0)])], {type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  }
  function run(value, bold=false, size=24) {return '<w:r><w:rPr><w:rFonts w:ascii="'+TNR+'" w:hAnsi="'+TNR+'" w:eastAsia="'+TNR+'" w:cs="'+TNR+'"/>'+(bold?'<w:b/>':'')+'<w:sz w:val="'+size+'"/><w:szCs w:val="'+size+'"/></w:rPr>'+clean(value).split(/\r?\n/).map((line,i)=>(i?'<w:br/>':'')+'<w:t xml:space="preserve">'+xml(line)+'</w:t>').join('')+'</w:r>';}
  function para(value, style='', bold=false) {return '<w:p><w:pPr>'+(style?'<w:pStyle w:val="'+style+'"/>':'')+'<w:spacing w:after="100" w:line="360" w:lineRule="auto"/></w:pPr>'+run(value,bold,24)+'</w:p>';}
  function table(rows, labelHeading='Data', valueHeading='Hasil') {
    const cell=(value,width,bold)=>'<w:tc><w:tcPr><w:tcW w:w="'+width+'" w:type="dxa"/><w:vAlign w:val="top"/></w:tcPr><w:p><w:pPr><w:spacing w:after="60" w:line="300" w:lineRule="auto"/></w:pPr>'+run(value,bold)+'</w:p></w:tc>';
    const row=(a,b,heading)=>'<w:tr>'+(heading?'<w:trPr><w:tblHeader/></w:trPr>':'')+cell(a,2860,heading)+cell(b,7000,heading)+'</w:tr>';
    return '<w:tbl><w:tblPr><w:tblW w:w="9860" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblBorders>'+['top','left','bottom','right','insideH','insideV'].map(edge=>'<w:'+edge+' w:val="single" w:sz="4" w:color="555555"/>').join('')+'</w:tblBorders><w:tblCellMar><w:top w:w="85" w:type="dxa"/><w:left w:w="110" w:type="dxa"/><w:bottom w:w="85" w:type="dxa"/><w:right w:w="110" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid><w:gridCol w:w="2860"/><w:gridCol w:w="7000"/></w:tblGrid>'+row(labelHeading,valueHeading,true)+rows.map(item=>row(item.label,item.value,false)).join('')+'</w:tbl>'+para('');
  }
  async function buildDocx(input) {
    const report=normalize(input), entries=[], imageRels=[];let pictureId=0;
    let body=para(report.title,'Title',true)+para('Tanggal pembuatan: '+report.generatedAt)+para('Data Demografi Pasien','Heading1',true)+table(report.demographics);
    for(const section of report.sections){body+=para(section.title,'Heading1',true);if(section.summary)body+=para('Hasil penilaian: '+section.summary);if(section.classification)body+=para('Interpretasi: '+section.classification);if(section.rows.length)body+=table(section.rows,'Komponen penilaian','Hasil');if(section.advice.length){body+=para('Saran Penatalaksanaan Selanjutnya','Heading2',true);section.advice.forEach((advice,index)=>body+=para((index+1)+'. '+advice));}if(section.source)body+=para('Sumber: '+section.source);
      for(const image of section.images){const data=await imageData(image);pictureId++;const name='image'+pictureId+'.'+(data.type==='png'?'png':'jpg'),rel='rIdImage'+pictureId;entries.push(['word/media/'+name,data.bytes]);imageRels.push('<Relationship Id="'+rel+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/'+name+'"/>');const factor=Math.min(6.6*914400/data.width,8.6*914400/data.height,914400),cx=Math.round(data.width*factor),cy=Math.round(data.height*factor);body+='<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="'+cx+'" cy="'+cy+'"/><wp:docPr id="'+pictureId+'" name="Gambar '+pictureId+'" descr="'+xml(data.caption)+'"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="'+pictureId+'" name="'+name+'"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="'+rel+'"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="'+cx+'" cy="'+cy+'"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>';if(data.caption)body+=para(data.caption);}
    }
    body+='<w:sectPr><w:headerReference w:type="default" r:id="rIdHeader"/><w:footerReference w:type="default" r:id="rIdFooter"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1050" w:right="1020" w:bottom="1050" w:left="1020" w:header="400" w:footer="400"/></w:sectPr>';
    const declaration='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    entries.push(['[Content_Types].xml',declaration+'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Default Extension="jpg" ContentType="image/jpeg"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>']);
    entries.push(['_rels/.rels',declaration+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>']);
    entries.push(['word/_rels/document.xml.rels',declaration+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rIdHeader" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/><Relationship Id="rIdFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>'+imageRels.join('')+'</Relationships>']);
    entries.push(['word/document.xml',declaration+'<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"><w:body>'+body+'</w:body></w:document>']);
    entries.push(['word/styles.xml',declaration+'<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="'+TNR+'" w:hAnsi="'+TNR+'" w:eastAsia="'+TNR+'" w:cs="'+TNR+'"/><w:sz w:val="24"/><w:szCs w:val="24"/><w:color w:val="000000"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="100" w:line="360" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>'+['Title','Heading1','Heading2'].map((name,index)=>'<w:style w:type="paragraph" w:styleId="'+name+'"><w:name w:val="'+name+'"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:pPr><w:keepNext/><w:keepLines/><w:spacing w:before="180" w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="'+24+'"/><w:color w:val="000000"/></w:rPr></w:style>').join('')+'</w:styles>']);
    entries.push(['word/header1.xml',declaration+'<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="right"/></w:pPr>'+run(AUTHOR,false,16)+'</w:p></w:hdr>']);
    entries.push(['word/footer1.xml',declaration+'<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="center"/></w:pPr>'+run('Halaman ',false,20)+'<w:fldSimple w:instr="PAGE">'+run('1',false,20)+'</w:fldSimple></w:p></w:ftr>']);
    entries.push(['docProps/core.xml',declaration+'<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>'+xml(report.title)+'</dc:title><dc:creator>'+xml(AUTHOR)+'</dc:creator><dc:description>Hasil penilaian tumbuh kembang anak</dc:description></cp:coreProperties>']);
    return zipStore(entries);
  }
  async function buildPdf(input) {
    if (!global.PDFLib || !global.fontkit || !global.REPORT_FONTS) throw new Error('Komponen unduhan PDF belum tersedia. Muat ulang aplikasi dengan seluruh berkas dalam folder yang sama.');
    const report=normalize(input), {PDFDocument,rgb}=global.PDFLib, document=await PDFDocument.create();document.registerFontkit(global.fontkit);
    const regular=await document.embedFont(b64bytes(global.REPORT_FONTS.regular),{subset:true}),bold=await document.embedFont(b64bytes(global.REPORT_FONTS.bold),{subset:true});
    document.setTitle(report.title);document.setAuthor(AUTHOR);document.setSubject('Hasil penilaian tumbuh kembang anak');
    const W=595.276,H=841.89,L=47,R=47,TOP=H-62,BOTTOM=51,CW=W-L-R,BLACK=rgb(0,0,0),GRAY=rgb(.3,.3,.3),BORDER=rgb(.4,.4,.4);let page,y=TOP;
    const wrap=(value,width,font=regular,size=12)=>{const lines=[];for(const paragraph of clean(value).replace(/\r/g,'').split('\n')){if(!paragraph){lines.push('');continue;}let current='';for(const word of paragraph.split(/\s+/)){const parts=[];let fragment='';for(const char of Array.from(word)){if(fragment&&font.widthOfTextAtSize(fragment+char,size)>width){parts.push(fragment);fragment=char;}else fragment+=char;}if(fragment)parts.push(fragment);for(let k=0;k<parts.length;k++){const part=parts[k],candidate=current?(current+' '+part):part;if(font.widthOfTextAtSize(candidate,size)<=width){current=candidate;}else{if(current)lines.push(current);current=part;}if(k<parts.length-1){if(current)lines.push(current);current='';}}}if(current)lines.push(current);}return lines.length?lines:[''];};
    const newPage=()=>{page=document.addPage([W,H]);y=TOP;page.drawText(AUTHOR,{x:W-R-regular.widthOfTextAtSize(AUTHOR,8),y:H-29,size:8,font:regular,color:GRAY});};newPage();
    const ensure=height=>{if(y-height<BOTTOM)newPage();};
    const line=(value,font=regular,size=12,x=L)=>{page.drawText(value||' ',{x,y:y-size,size,font,color:BLACK});y-=18;};
    const paragraph=(value,options={})=>{const font=options.bold?bold:regular,size=options.size||12,lines=wrap(value,CW,font,size);ensure(Math.min(lines.length*18+8,64));for(const value of lines){ensure(18);line(value,font,size);}y-=options.after==null?7:options.after;};
    const heading=(value,main=false)=>{ensure(62);y-=4;paragraph(value,{bold:true,size:12,after:10});};
    const table=(rows,first='Data',second='Hasil')=>{const x1=L,w1=154,w2=CW-w1,pad=7,leading=17;let activePage;
      const drawRow=(a,b,isHeader=false)=>{const font=isHeader?bold:regular,al=wrap(a,w1-2*pad,font),bl=wrap(b,w2-2*pad,font);let index=0;const n=Math.max(al.length,bl.length);while(index<n){if(y-(leading+2*pad)<BOTTOM){newPage();header();}const capacity=Math.max(1,Math.floor((y-BOTTOM-2*pad)/leading));const count=Math.min(n-index,capacity),height=count*leading+2*pad;page.drawRectangle({x:x1,y:y-height,width:w1,height,borderWidth:.45,borderColor:BORDER});page.drawRectangle({x:x1+w1,y:y-height,width:w2,height,borderWidth:.45,borderColor:BORDER});for(let i=0;i<count;i++){if(al[index+i])page.drawText(al[index+i],{x:x1+pad,y:y-pad-12-i*leading,size:12,font,color:BLACK});if(bl[index+i])page.drawText(bl[index+i],{x:x1+w1+pad,y:y-pad-12-i*leading,size:12,font,color:BLACK});}y-=height;index+=count;if(index<n){newPage();header();}}};
      const header=()=>{activePage=page;drawRow(first,second,true);};ensure(72);header();for(const row of rows){if(activePage!==page){header();}drawRow(row.label,row.value);activePage=page;}y-=10;
    };
    heading(report.title,true);paragraph('Tanggal pembuatan: '+report.generatedAt);heading('Data Demografi Pasien');table(report.demographics);
    for(const section of report.sections){heading(section.title);if(section.summary)paragraph('Hasil penilaian: '+section.summary);if(section.classification)paragraph('Interpretasi: '+section.classification);if(section.rows.length)table(section.rows,'Komponen penilaian','Hasil');if(section.advice.length){heading('Saran Penatalaksanaan Selanjutnya');section.advice.forEach((value,index)=>paragraph((index+1)+'. '+value));}if(section.source)paragraph('Sumber: '+section.source);
      for(const image of section.images){const data=await imageData(image),embedded=data.type==='png'?await document.embedPng(data.bytes):await document.embedJpg(data.bytes),scale=Math.min(CW/data.width,(TOP-BOTTOM-60)/data.height),width=data.width*scale,height=data.height*scale;ensure(height+40);page.drawImage(embedded,{x:L+(CW-width)/2,y:y-height,width,height});y-=height+8;if(data.caption)paragraph(data.caption);}
    }
    document.getPages().forEach((p,index)=>{const value='Halaman '+(index+1)+' dari '+document.getPageCount();p.drawText(value,{x:(W-regular.widthOfTextAtSize(value,10))/2,y:26,size:10,font:regular,color:GRAY});});
    return document.save();
  }
  function filename(report,extension) {const name=clean(report.patient?.name || report.patient?.nama || 'Pasien').normalize('NFKC').replace(/[^\p{L}\p{N}_-]+/gu,'_').slice(0,90);return 'Hasil_Tumbuh_Kembang_'+(name||'Pasien')+'.'+extension;}
  function download(blob,name) {const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.style.display='none';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  global.ReportExport={buildDocx,buildPdf,async docx(report){const blob=await buildDocx(report);download(blob,filename(report,'docx'));return blob;},async pdf(report){const bytes=await buildPdf(report);const blob=new Blob([bytes],{type:'application/pdf'});download(blob,filename(report,'pdf'));return blob;}};
})(window);
