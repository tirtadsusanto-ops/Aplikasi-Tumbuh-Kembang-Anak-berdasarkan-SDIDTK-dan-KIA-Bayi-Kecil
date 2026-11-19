(function(){
'use strict';
if(window.APP_IMAGES_READY)return;
const base=document.currentScript.src;
const parts=['growth-images-part-1.js','growth-images-part-2.js'];
function loadPart(name){
 if(window.__GROWTH_IMAGE_PARTS?.[name])return Promise.resolve();
 return new Promise((resolve,reject)=>{
  const script=document.createElement('script');script.src=new URL(name,base).href;
  script.onload=()=>window.__GROWTH_IMAGE_PARTS?.[name]?resolve():reject(new Error('Data gambar tidak lengkap: '+name));
  script.onerror=()=>reject(new Error('Berkas gambar tidak dapat dibuka: '+name));
  document.head.append(script);
 });
}
window.APP_IMAGES_READY=(async()=>{
 for(const name of parts)await loadPart(name);
 return window.APP_IMAGES;
})().catch(error=>{delete window.APP_IMAGES_READY;throw error;});
})();
