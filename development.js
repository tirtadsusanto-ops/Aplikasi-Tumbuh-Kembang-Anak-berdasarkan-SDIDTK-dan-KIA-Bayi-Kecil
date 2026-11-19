/* Clinical content: uploaded SDIDTK 2022 only. */
(function(){
"use strict";
const instruments={
  "kpsp": {
    "id": "kpsp",
    "title": "Kuesioner Pra Skrining Perkembangan (KPSP)",
    "source": "Kementerian Kesehatan RI. Buku Pedoman Pelaksanaan SDIDTK, revisi 23 Agustus 2022. Hlm. 117–146 (PDF 130–159).",
    "ageMinMonths": 3,
    "ageMaxMonths": 72,
    "forms": [
      {
        "id": "kpsp-3",
        "label": "KPSP umur 3 bulan",
        "age": 3,
        "sourcePages": [
          135
        ],
        "questions": [
          {
            "text": "Pada saat bayi terlentang, apakah masing-masing lengan dan tungkai bergerak dengan mudah? Jawab ‘Tidak’ bila salah satu atau kedua tungkai atau lengan bayi bergerak tak terarah atau tak terkendali.",
            "domain": "Gerak kasar",
            "sourcePage": 135
          },
          {
            "text": "Jangan membuat suara apapun. Pada saat bayi terlentang apakah ia melihat dan menatap wajah Anda?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 135
          },
          {
            "text": "Pada saat Anda mengajak bayi berbicara dan tersenyum, apakah ia tersenyum kembali kepada Anda?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 135
          },
          {
            "text": "Apakah bayi dapat mengeluarkan suara-suara lain (mengoceh) selain menangis?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 135
          },
          {
            "text": "Apakah bayi suka tertawa keras walau tidak digelitik atau diraba-raba?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 135
          },
          {
            "text": "Ambil gulungan wool merah, lalu letakkan di atas wajah di depan mata bayi. Gerakkan wool dari samping kiri ke kanan kepala atau sebaliknya. Apakah ia dapat mengikuti gerakan Anda dengan menggerakkan kepalanya dari kanan atau kiri ke tengah?",
            "domain": "Gerak halus",
            "sourcePage": 135
          },
          {
            "text": "Ambil gulungan wool merah, lalu letakkan di atas wajah di depan mata bayi. Gerakkan wool dari samping kiri ke kanan kepala atau sebaliknya. Apakah ia dapat mengikuti gerakan Anda dengan menggerakkan kepalanya dari satu sisi hampir sampai pada sisi yang lain?",
            "domain": "Gerak halus",
            "sourcePage": 135
          },
          {
            "text": "Pada saat bayi tengkurap di alas yang datar, apakah ia dapat mengangkat kepalanya seperti pada gambar?",
            "domain": "Gerak kasar",
            "sourcePage": 135,
            "imageSourcePage": 135
          },
          {
            "text": "Pada saat bayi tengkurap di alas yang datar, apakah ia dapat mengangkat kepalanya sehingga membentuk sudut 45˚ seperti pada gambar?",
            "domain": "Gerak kasar",
            "sourcePage": 135,
            "imageSourcePage": 135
          },
          {
            "text": "Pada saat bayi tengkurap di alas yang datar, apakah ia dapat mengangkat kepalanya dengan tegak seperti pada gambar?",
            "domain": "Gerak kasar",
            "sourcePage": 135,
            "imageSourcePage": 135
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 122 (PDF 135).",
        "images": [
          {
            "src": "assets/development/pedoman_135.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 122 (PDF 135)"
          }
        ]
      },
      {
        "id": "kpsp-6",
        "label": "KPSP umur 6 bulan",
        "age": 6,
        "sourcePages": [
          136
        ],
        "questions": [
          {
            "text": "Bayi diposisikan terlentang. Ambil gulungan wool merah, letakkan di atas wajah di depan mata bayi. Gerakkan wool dari samping kiri ke kanan kepala. Apakah ia dapat mengikuti gerakan Anda dengan menggerakkan kepala sepenuhnya dari satu ke sisi yang lain?",
            "domain": "Gerak halus",
            "sourcePage": 136
          },
          {
            "text": "Pada posisi bayi terlentang, pegang kedua tangannya lalu tarik perlahan ke posisi duduk. Dapatkah bayi mempertahankan lehernya secara kaku seperti pada gambar? Jawab ‘Tidak’ bila kepala bayi jatuh kembali seperti gambar.",
            "domain": "Gerak kasar",
            "sourcePage": 136,
            "imageSourcePage": 136
          },
          {
            "text": "Ketika bayi tengkurap di alas yang datar, apakah ia dapat mengangkat dada dengan kedua lengannya sebagai penyangga seperti pada gambar?",
            "domain": "Gerak kasar",
            "sourcePage": 136,
            "imageSourcePage": 136
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Dapatkah bayi mempertahankan posisi kepala dalam keadaan tegak dan stabil? Jawab ‘Tidak’ bila kepala bayi cenderung jatuh ke kanan, kiri, atau ke dadanya.",
            "domain": "Gerak kasar",
            "sourcePage": 136
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Sentuhkan pensil di punggung tangan atau ujung jari bayi (jangan meletakkan di atas telapak tangan bayi). Apakah bayi dapat menggenggam pensil itu selama beberapa detik?",
            "domain": "Gerak halus",
            "sourcePage": 136
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Dapatkah bayi mengarahkan matanya pada benda kecil sebesar kacang, kismis atau uang logam? Jawab ‘Tidak’ jika ia tidak dapat mengarahkan matanya.",
            "domain": "Gerak halus",
            "sourcePage": 136
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Dapatkah bayi meraih mainan yang diletakkan agak jauh namun masih berada dalam jangkauan tangannya?",
            "domain": "Gerak halus",
            "sourcePage": 136
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, pernahkah bayi berbalik paling sedikit 2 kali, dari terlentang ke tengkurap atau sebaliknya?",
            "domain": "Gerak kasar",
            "sourcePage": 136
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, pernahkah bayi mengeluarkan suara gembira bernada tinggi atau memekik tetapi bukan menangis?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 136
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, pernahkah orang tua atau pengasuh melihat bayi tersenyum ketika melihat mainan yang lucu, gambar, atau binatang peliharaan pada saat ia bermain sendiri?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 136,
            "imageSourcePage": 136
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 123 (PDF 136).",
        "images": [
          {
            "src": "assets/development/pedoman_136.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 123 (PDF 136)"
          }
        ]
      },
      {
        "id": "kpsp-9",
        "label": "KPSP umur 9 bulan",
        "age": 9,
        "sourcePages": [
          137,
          138
        ],
        "questions": [
          {
            "text": "Bayi dipangku orang tua atau pengasuh, Taruh kismis di atas meja. Dapatkah bayi memungut dengan tangannya benda−benda kecil seperti kismis, kacang-kacangan, potongan biskuit dengan gerakan miring atau menggerapai seperti gambar?",
            "domain": "Gerak halus",
            "sourcePage": 137,
            "imageSourcePage": 137
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Taruh 2 kubus di atas meja, buat agar bayi dapat memungut dan memegang kubus pada masing-masing tangannya. Dapatkah ia melakukannya?",
            "domain": "Gerak halus",
            "sourcePage": 137
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Tarik perhatian bayi dengan memperlihatkan gulungan wool merah, kemudian jatuhkan ke lantai. Apakah bayi mencoba mencari benda tersebut, misalnya mencari di bawah meja atau di belakang kursi?",
            "domain": "Gerak halus",
            "sourcePage": 137
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Letakkan suatu mainan yang diinginkan bayi di luar jangkauannya, apakah ia mencoba mendapatkan mainan dengan mengulurkan lengan atau badannya?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 137
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah bayi menengok ke belakang seperti mendengar kedatangan seseorang pada saat bayi sedang bermain sendiri dan seseorang diam-diam datang berdiri di belakangnya? Suara keras tidak ikut dihitung. Jawab ‘Ya’ hanya jika melihat reaksinya terhadap suara yang perlahan atau bisikan.",
            "domain": "Bicara dan bahasa",
            "sourcePage": 137
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mengatakan 2 suku kata yang sama, misalnya: “Ma-ma”, “Da-da” atau “Pa-pa”? Jawab ‘Ya’ bila ia dapat mengeluarkan salah satu suara tersebut.",
            "domain": "Bicara dan bahasa",
            "sourcePage": 137
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah bayi dapat makan kue kering sendiri?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 137
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh apakah pernah melihat bayi memindahkan mainan atau kue kering dari satu tangan ke tangan yang lain? Benda−benda panjang seperti sendok atau kerincingan bertangkai tidak ikut dinilai.",
            "domain": "Gerak halus",
            "sourcePage": 137
          },
          {
            "text": "Tanpa disangga oleh bantal, kursi atau dinding, dapatkah bayi duduk sendiri selama 60 detik?",
            "domain": "Gerak kasar",
            "sourcePage": 137
          },
          {
            "text": "Jika Anda mengangkat bayi melalui ketiaknya ke posisi berdiri, dapatkah ia menyangga sebagian berat badan dengan kedua kakinya? Jawab ‘Ya’ bila ia mencoba berdiri dan sebagian berat badan tertumpu pada kedua kakinya.",
            "domain": "Gerak kasar",
            "sourcePage": 138
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 124, 125 (PDF 137, 138).",
        "images": [
          {
            "src": "assets/development/pedoman_137.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 124 (PDF 137)"
          },
          {
            "src": "assets/development/pedoman_138.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 125 (PDF 138)"
          }
        ]
      },
      {
        "id": "kpsp-12",
        "label": "KPSP umur 12 bulan",
        "age": 12,
        "sourcePages": [
          139
        ],
        "questions": [
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Letakkan pensil di telapak tangan anak. Coba ambil pensil tersebut dengan perlahan-lahan. Apakah anak menggenggam pensil dengan erat dan Anda merasa kesulitan mendapatkan pensil itu kembali?",
            "domain": "Gerak halus",
            "sourcePage": 139
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Letakkan kismis di atas meja. Dapatkah anak memungut dengan tangannya benda−benda kecil seperti kismis, kacang−kacangan, potongan biskuit dengan gerakan miring atau menggerapai seperti gambar?",
            "domain": "Gerak halus",
            "sourcePage": 139,
            "imageSourcePage": 139
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Berikan 2 kubus kepada bayi. Tanpa bantuan, apakah anak dapat mempertemukan 2 kubus kecil yang ia pegang?",
            "domain": "Gerak halus",
            "sourcePage": 139
          },
          {
            "text": "Sebut 2−3 kata yang dapat ditiru oleh anak (tidak perlu kata−kata yang lengkap). Apakah ia mencoba meniru kata-kata tadi?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 139
          },
          {
            "text": "Tanyakan kepada ibu atau pengasuh, apakah anak dapat mengangkat badannya ke posisi berdiri tanpa bantuan?",
            "domain": "Gerak kasar",
            "sourcePage": 139
          },
          {
            "text": "Tanyakan kepada ibu atau pengasuh, apakah anak dapat duduk sendiri tanpa bantuan dari posisi tidur atau tengkurap?",
            "domain": "Gerak kasar",
            "sourcePage": 139
          },
          {
            "text": "Tanyakan kepada ibu atau pengasuh, apakah anak dapat memahami makna kata ’jangan’?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 139
          },
          {
            "text": "Tanyakan kepada ibu atau pengasuh, apakah anak akan mencari atau terlihat mengharapkan muncul kembali jika ibu atau pengasuh bersembunyi di belakang sesuatu atau di pojok, kemudian muncul dan menghilang secara berulang-ulang di hadapan anak?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 139
          },
          {
            "text": "Tanyakan kepada ibu atau pengasuh, apakah anak dapat membedakan ibu atau pengasuh dengan orang yang belum ia kenal? Ia akan menunjukkan sikap malu-malu atau ragu-ragu pada saat permulaan bertemu dengan orang yang belum dikenalnya.",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 139
          },
          {
            "text": "Berdirikan anak. Apakah anak dapat berdiri dengan berpegangan pada kursi atau meja selama 30 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 139
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 126 (PDF 139).",
        "images": [
          {
            "src": "assets/development/pedoman_139.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 126 (PDF 139)"
          }
        ]
      },
      {
        "id": "kpsp-15",
        "label": "KPSP umur 15 bulan",
        "age": 15,
        "sourcePages": [
          140
        ],
        "questions": [
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Berikan 2 kubus kepada anak. Tanpa bantuan, apakah anak dapat mempertemukan 2 kubus kecil yang ia pegang?",
            "domain": "Gerak halus",
            "sourcePage": 140
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Berikan sebuah kubus dan cangkir. Apakah anak dapat memasukkan 1 kubus ke dalam cangkir?",
            "domain": "Gerak halus",
            "sourcePage": 140
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat berjalan dengan berpegangan?",
            "domain": "Gerak kasar",
            "sourcePage": 140
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mengatakan ‘papa’ ketika ia memanggil atau melihat ayahnya, atau mengatakan ‘mama’ jika memanggil atau melihat ibunya? Jawab ‘Ya’ bila anak mengatakan salah satu di antaranya.",
            "domain": "Bicara dan bahasa",
            "sourcePage": 140
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mengucapkan 1 kata yang bermakna selain ‘mama’, ‘papa’, atau nama panggilan orang?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 140
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat bertepuk tangan atau melambai-lambai tanpa bantuan? Jawab ‘Tidak’ bila ia membutuhkan bantuan.",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 140
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat menunjukkan apa yang diinginkannya tanpa menangis atau merengek? Jawab ‘Ya’ bila ia menunjuk, menarik atau mengeluarkan suara yang menyenangkan.",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 140
          },
          {
            "text": "Coba berdirikan anak. Apakah anak dapat berdiri sendiri tanpa berpegangan selama 30 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 140
          },
          {
            "text": "Letakkan kubus di lantai, tanpa berpegangan atau menyentuh lantai, apakah anak dapat membungkuk untuk memungut kubus di lantai dan kemudian berdiri kembali?",
            "domain": "Gerak kasar",
            "sourcePage": 140
          },
          {
            "text": "Apakah anak dapat berjalan di sepanjang ruangan tanpa jatuh atau terhuyung-huyung?",
            "domain": "Gerak kasar",
            "sourcePage": 140
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 127 (PDF 140).",
        "images": [
          {
            "src": "assets/development/pedoman_140.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 127 (PDF 140)"
          }
        ]
      },
      {
        "id": "kpsp-18",
        "label": "KPSP umur 18 bulan",
        "age": 18,
        "sourcePages": [
          141
        ],
        "questions": [
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Berikan anak sebuah pensil dan kertas. Apakah anak dapat mencoret-coret kertas tanpa bantuan atau petunjuk?",
            "domain": "Gerak halus",
            "sourcePage": 141
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat menyebutkan sedikitnya 3 kata yang bermakna?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 141
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat menunjukkan apa yang diinginkannya tanpa menangis atau merengek?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 141
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat minum dari cangkir atau gelas sendiri tanpa banyak yang tumpah?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 141
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak suka meniru bila ibu atau pengasuh sedang melakukan pekerjaan rumah tangga (merapikan mainan, menyapu, dll)?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 141
          },
          {
            "text": "Gelindingkan bola tenis ke arah anak. Apakah anak dapat menggelindingkan atau melempar bola tersebut kembali kepada Anda?",
            "domain": "Gerak halus",
            "sourcePage": 141
          },
          {
            "text": "Letakkan kubus di lantai, tanpa berpegangan atau menyentuh lantai, apakah anak dapat membungkuk untuk memungut kubus di lantai dan kemudian berdiri kembali?",
            "domain": "Gerak kasar",
            "sourcePage": 141
          },
          {
            "text": "Minta anak untuk berjalan sepanjang ruangan. Dapatkah ia berjalan tanpa terhuyung-huyung atau terjatuh?",
            "domain": "Gerak kasar",
            "sourcePage": 141
          },
          {
            "text": "Dapatkah anak berjalan mundur minimal 5 langkah tanpa kehilangan keseimbangan?",
            "domain": "Gerak kasar",
            "sourcePage": 141
          },
          {
            "text": "Berikan anak perintah berikut ini dengan bantuan telunjuk atau isyarat: “Ambil kertas” “Ambil pensil” “Tutup pintu” Dapatkah anak melakukan perintah tersebut dengan bantuan telunjuk atau isyarat?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 141
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 128 (PDF 141).",
        "images": [
          {
            "src": "assets/development/pedoman_141.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 128 (PDF 141)"
          }
        ]
      },
      {
        "id": "kpsp-21",
        "label": "KPSP umur 21 bulan",
        "age": 21,
        "sourcePages": [
          142
        ],
        "questions": [
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Berikan anak sebuah pensil dan kertas. Apakah anak dapat mencoret-coret kertas tanpa bantuan atau petunjuk?",
            "domain": "Gerak halus",
            "sourcePage": 142
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Minta anak untuk menyusun kubus. Apakah anak dapat menyusun 2 kubus?",
            "domain": "Gerak halus",
            "sourcePage": 142
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Tunjukkan gambar di bawah pada anak dan minta ia untuk menunjuk gambar sesuai dengan yang Anda sebutkan namanya. Apakah anak dapat menunjuk minimal 1 gambar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 142,
            "imageSourcePage": 142
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Tanpa bimbingan, petunjuk, atau bantuan Anda, dapatkah anak menunjuk paling sedikit 1 bagian tubuhnya dengan benar (rambut, mata, hidung, mulut, atau bagian badan yang lain)?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 142
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mengucapkan minimal 7 kata yang mempunyai arti (selain kata ‘mama’ dan ‘papa’)?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 142
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat minum dari cangkir atau gelas sendiri tanpa banyak yang tumpah?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 142
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak suka meniru bila ibu atau pengasuh sedang melakukan pekerjaan rumah tangga (merapikan mainan, menyapu, dll)?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 142
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat berlari tanpa terjatuh?",
            "domain": "Gerak kasar",
            "sourcePage": 142
          },
          {
            "text": "Letakkan kubus di lantai, tanpa berpegangan atau menyentuh lantai, apakah anak dapat membungkuk untuk memungut kubus di lantai dan kemudian berdiri kembali?",
            "domain": "Gerak kasar",
            "sourcePage": 142
          },
          {
            "text": "Dapatkah anak berjalan mundur minimal 5 langkah tanpa kehilangan keseimbangan?",
            "domain": "Gerak kasar",
            "sourcePage": 142
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 129 (PDF 142).",
        "images": [
          {
            "src": "assets/development/pedoman_142.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 129 (PDF 142)"
          }
        ]
      },
      {
        "id": "kpsp-24",
        "label": "KPSP umur 24 bulan",
        "age": 24,
        "sourcePages": [
          143
        ],
        "questions": [
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Berikan anak sebuah pensil dan kertas. Apakah anak dapat mencoret-coret kertas tanpa bantuan atau petunjuk?",
            "domain": "Gerak halus",
            "sourcePage": 143
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Minta anak untuk menyusun kubus. Apakah anak dapat menyusun 4 kubus?",
            "domain": "Gerak halus",
            "sourcePage": 143
          },
          {
            "text": "Bayi dipangku orang tua atau pengasuh. Tanpa bimbingan, petunjuk, atau bantuan Anda, dapatkah anak menunjuk paling sedikit 2 bagian tubuhnya dengan benar (rambut, mata, hidung, mulut, atau bagian badan yang lain)?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 143
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak mampu menggabungkan 2 kata berbeda ketika berbicara, misalnya “Minum susu” atau “Main bola”? “Terima kasih” dan “Da-dah” tidak termasuk.",
            "domain": "Bicara dan bahasa",
            "sourcePage": 143
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat melepas pakaiannya seperti baju, rok, atau celana?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 143
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat makan dengan menggunakan sendok sendiri tanpa banyak yang tumpah?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 143
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat berlari tanpa terjatuh?",
            "domain": "Gerak kasar",
            "sourcePage": 143
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat berjalan naik tangga sendiri? Jawab ‘Ya’ jika ia naik tangga dengan posisi tegak atau berpegangan pada dinding atau pegangan tangga. Jawab ‘Tidak’ jika ia naik tangga dengan merangkak, orang tua tidak memperbolehkan anak naik tangga, atau anak harus berpegangan pada seseorang.",
            "domain": "Gerak kasar",
            "sourcePage": 143
          },
          {
            "text": "Letakkan bola tenis di depan kaki anak. Apakah ia dapat menendang ke depan tanpa berpegangan pada apapun?",
            "domain": "Gerak kasar",
            "sourcePage": 143
          },
          {
            "text": "Ikuti perintah dengan seksama. Jangan memberi isyarat dengan telunjuk atau mata pada saat memberikan perintah berikut ini: “Ambil kertas” “Ambil pensil” “Tutup pintu” Dapatkah anak melakukan perintah tersebut?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 143
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 130 (PDF 143).",
        "images": [
          {
            "src": "assets/development/pedoman_143.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 130 (PDF 143)"
          }
        ]
      },
      {
        "id": "kpsp-30",
        "label": "KPSP umur 30 bulan",
        "age": 30,
        "sourcePages": [
          144
        ],
        "questions": [
          {
            "text": "Beri kubus di depan anak. Dapatkah anak menyusun 4 buah kubus menyerupai kereta api dengan cerobong asap (dicontohkan)?",
            "domain": "Gerak halus",
            "sourcePage": 144,
            "imageSourcePage": 144
          },
          {
            "text": "Buat garis lurus ke bawah sepanjang sekurang-kurangnya 2,5 cm. Minta anak untuk menggambar garis lain di samping garis ini. Jawab ‘Ya’ bila ia menggambar garis seperti ini: Jawab ‘Tidak’ bila ia menggambar garis seperti ini:",
            "domain": "Gerak halus",
            "sourcePage": 144,
            "imageSourcePage": 144
          },
          {
            "text": "Tanpa bimbingan, petunjuk, atau bantuan Anda, dapatkah anak menyebut 2 gambar di antara gambar-gambar di bawah dengan benar? Menyebut dengan suara binatang tidak ikut dinilai.",
            "domain": "Bicara dan bahasa",
            "sourcePage": 144,
            "imageSourcePage": 144
          },
          {
            "text": "Tanpa bimbingan, petunjuk, atau bantuan Anda, dapatkah anak menunjuk 4 gambar di antara gambar-gambar di atas ini dengan benar ketika Anda sebutkan namanya?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 144,
            "imageSourcePage": 144
          },
          {
            "text": "Tanpa bimbingan, petunjuk, atau bantuan Anda, dapatkah anak menunjuk paling sedikit 6 bagian tubuhnya?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 144
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat memahami perintah yang terdiri dari 2 langkah, misalnya “Tolong ambil bola dan berikan kepada Ayah”?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 144
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak berpakaian sendiri seperti baju, rok, celana (topi dan kaos kaki tidak ikut dinilai)?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 144
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak bermain peran, misalnya menyuapi boneka?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 144
          },
          {
            "text": "Letakkan bola tenis di depan kaki anak. Dapatkah anak menendang ke depan tanpa berpegangan pada apapun? Mendorong bola tidak ikut dinilai.",
            "domain": "Gerak kasar",
            "sourcePage": 144
          },
          {
            "text": "Minta anak untuk melompat atau mengangkat kedua kakinya pada saat bersamaan. Dapatkah ia melakukannya?",
            "domain": "Gerak kasar",
            "sourcePage": 144
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 131 (PDF 144).",
        "images": [
          {
            "src": "assets/development/pedoman_144.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 131 (PDF 144)"
          }
        ]
      },
      {
        "id": "kpsp-36",
        "label": "KPSP umur 36 bulan",
        "age": 36,
        "sourcePages": [
          145,
          146
        ],
        "questions": [
          {
            "text": "Beri kubus di depan anak. Dapatkah anak menyusun 6 buah kubus satu persatu di atas kubus yang lain tanpa menjatuhkan kubus tersebut?",
            "domain": "Gerak halus",
            "sourcePage": 145
          },
          {
            "text": "Buat garis lurus ke bawah sepanjang sekurang-kurangnya 2,5 cm. Minta anak untuk menggambar garis lain di samping garis ini. Jawab ‘Ya’ bila ia menggambar garis seperti ini: Jawab ‘Tidak’ bila ia menggambar garis seperti ini:",
            "domain": "Gerak halus",
            "sourcePage": 145,
            "imageSourcePage": 145
          },
          {
            "text": "Tanpa bimbingan, petunjuk, atau bantuan Anda, dapatkah anak menyebut 4 gambar di antara gambar-gambar di bawah ini dengan benar? Menyebut dengan suara binatang tidak ikut dinilai.",
            "domain": "Bicara dan bahasa",
            "sourcePage": 145,
            "imageSourcePage": 145
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat memahami perintah yang terdiri dari 2 langkah, misalnya “Tolong ambil bola dan berikan kepada Ayah”?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 145
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah sebagian dari bicara anak dapat dipahami oleh orang asing (yang tidak bertemu setiap hari)?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 145
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak merangkai kalimat sederhana yang terdiri dari minimal 3 kata, misalnya “Aku makan roti” atau ”Ibu minta susu”?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 145
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak menggosok gigi dengan bantuan?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 145
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak mengenakan baju, celana, atau sepatu sendiri (tidak termasuk mengancing dan menali)?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 145
          },
          {
            "text": "Berikan kepada anak sebuah bola tenis. Minta ia untuk melemparkan ke arah dada Anda. Dapatkah anak melempar bola dengan lurus ke arah perut atau dada Anda dari jarak 1,5 meter?",
            "domain": "Gerak kasar",
            "sourcePage": 145
          },
          {
            "text": "Letakkan selembar kertas seukuran buku ini di atas lantai. Apakah anak dapat melompati bagian lebar kertas dengan mengangkat kedua kakinya secara bersamaan tanpa didahului lari?",
            "domain": "Gerak kasar",
            "sourcePage": 146
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 132, 133 (PDF 145, 146).",
        "images": [
          {
            "src": "assets/development/pedoman_145.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 132 (PDF 145)"
          },
          {
            "src": "assets/development/pedoman_146.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 133 (PDF 146)"
          }
        ]
      },
      {
        "id": "kpsp-42",
        "label": "KPSP umur 42 bulan",
        "age": 42,
        "sourcePages": [
          147,
          148
        ],
        "questions": [
          {
            "text": "Buat garis lurus ke bawah sepanjang sekurang-kurangnya 2,5 cm. Minta anak untuk menggambar garis lain di samping garis ini. Jawab ‘Ya’ bila ia menggambar garis seperti ini: Jawab ‘Tidak’ bila ia menggambar garis seperti ini:",
            "domain": "Gerak halus",
            "sourcePage": 147,
            "imageSourcePage": 147
          },
          {
            "text": "Beri kubus di depan anak. Dapatkah anak menyusun 8 buah kubus satu persatu di atas kubus yang lain tanpa menjatuhkannya?",
            "domain": "Gerak halus",
            "sourcePage": 147
          },
          {
            "text": "Tunjukkan anak gambar di bawah ini dan tanyakan: “Mana yang dapat terbang?” “Mana yang dapat mengeong?” “Mana yang dapat bicara?” “Mana yang dapat menggonggong?” “Mana yang dapat meringkik?” Apakah anak dapat menunjuk 2 kegiatan yang sesuai?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 147,
            "imageSourcePage": 147
          },
          {
            "text": "Tanyakan kepada anak pertanyaan berikut ini satu persatu: “Apa yang kamu lakukan bila kedinginan?” Jawaban: pakai jaket, pakai selimut “Apa yang kamu lakukan bila kamu kelelahan?” Jawaban: tidur, berbaring, istirahat “Apa yang kamu lakukan bila kamu merasa lapar?” Jawaban: makan “Apa yang kamu lakukan bila kamu merasa haus?” Jawaban: minum Apakah anak dapat menjawab 3 pertanyaan dengan benar tanpa gerakan dan isyarat?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 147
          },
          {
            "text": "Minta anak untuk menyebut 1 warna. Dapatkah anak menyebut 1 warna dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 147
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mencuci tangannya sendiri dengan baik setelah makan?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 147
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak menyebut nama teman bermain di luar rumah atau saudara yang tidak tinggal serumah?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 148
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak mengenakan kaos (T-shirt) tanpa dibantu?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 148
          },
          {
            "text": "Letakkan selembar kertas seukuran buku ini di atas lantai. Apakah anak dapat melompati bagian lebar kertas dengan mengangkat kedua kakinya secara bersamaan tanpa didahului lari?",
            "domain": "Gerak kasar",
            "sourcePage": 148
          },
          {
            "text": "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 1 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 148
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 134, 135 (PDF 147, 148).",
        "images": [
          {
            "src": "assets/development/pedoman_147.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 134 (PDF 147)"
          },
          {
            "src": "assets/development/pedoman_148.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 135 (PDF 148)"
          }
        ]
      },
      {
        "id": "kpsp-48",
        "label": "KPSP umur 48 bulan",
        "age": 48,
        "sourcePages": [
          149,
          150
        ],
        "questions": [
          {
            "text": "Berikan contoh membuat jembatan dari 3 buah kubus, yaitu dengan meletakkan 2 kubus dengan sedikit jarak (kira kira satu jari), lalu letakkan balok ketiga di atas kedua balok sehingga terbentuk seperti jembatan. Minta anak untuk melakukan. Dapatkan anak melakukannya?",
            "domain": "Gerak halus",
            "sourcePage": 149,
            "imageSourcePage": 149
          },
          {
            "text": "Beri pensil dan kertas. Jangan membantu anak dan jangan menyebut lingkaran. Buatlah lingkaran di atas kertas tersebut. Minta anak menirunya. Dapatkah anak menggambar lingkaran?",
            "domain": "Gerak halus",
            "sourcePage": 149,
            "imageSourcePage": 149
          },
          {
            "text": "Tunjukkan anak gambar di bawah ini dan tanyakan: “Yang mana yang dapat terbang?” “Yang mana yang dapat mengeong?” “Yang mana yang dapat bicara?” “Yang mana yang dapat menggonggong?” “Yang mana yang dapat meringkik?” Apakah anak dapat menunjuk 2 kegiatan yang sesuai?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 149,
            "imageSourcePage": 149
          },
          {
            "text": "Dapatkah anak menyebut nama lengkapnya tanpa dibantu? Jawab ‘Tidak’ jika ia menyebut sebagian namanya atau ucapannya sulit dimengerti.",
            "domain": "Bicara dan bahasa",
            "sourcePage": 149
          },
          {
            "text": "Mengenal konsep angka satu Letakkan 5 kubus di atas meja dan selembar kertas di samping kubus. Katakan kepada anak “Ambil 1 kubus dan letakkan di atas kertas”. Setelah anak selesai meletakkan, tanyakan “Ada berapa banyak kubus di atas kertas?” Dapatkah anak melakukan dengan hanya mengambil satu kubus dan bisa menyebutkan “Satu”?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 149
          },
          {
            "text": "Tanyakan kepada anak pertanyaan di bawah satu persatu: “Apa kegunaan kursi?” Jawaban: untuk duduk “Apa kegunaan cangkir?” Jawaban: untuk minum “Apa kegunaan pensil?” Jawaban: untuk mencoret, menulis, menggambar Dapatkah anak menjawab ketiga pertanyaan terkait kegunaan benda tersebut dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 149,
            "imageSourcePage": 149
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak mengikuti peraturan permainan saat bermain dengan teman-temannya (misal: ular tangga, petak umpet, dll)?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 150
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak mengenakan kaos (T-shirt) tanpa dibantu?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 150
          },
          {
            "text": "Letakkan selembar kertas seukuran buku ini di atas lantai. Apakah anak dapat melompati bagian lebar kertas dengan mengangkat kedua kakinya secara bersamaan tanpa didahului lari?",
            "domain": "Gerak kasar",
            "sourcePage": 150
          },
          {
            "text": "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 2 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 150
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 136, 137 (PDF 149, 150).",
        "images": [
          {
            "src": "assets/development/pedoman_149.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 136 (PDF 149)"
          },
          {
            "src": "assets/development/pedoman_150.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 137 (PDF 150)"
          }
        ]
      },
      {
        "id": "kpsp-54",
        "label": "KPSP umur 54 bulan",
        "age": 54,
        "sourcePages": [
          151,
          152
        ],
        "questions": [
          {
            "text": "Jangan mengoreksi atau membantu anak. Jangan menyebut kata “Lebih panjang”. Perlihatkan gambar kedua garis ini pada anak. Tanyakan: “Mana garis yang lebih panjang?” Minta anak menunjuk garis yang lebih panjang. Setelah anak menunjuk, putar lembar ini dan ulangi pertanyaan tersebut. Apakah anak dapat menunjuk garis yang lebih panjang sebanyak 3 kali dengan benar?",
            "domain": "Gerak halus",
            "sourcePage": 151,
            "imageSourcePage": 151
          },
          {
            "text": "Jangan membantu anak dan jangan memberitahu nama gambar ini. Minta anak untuk menggambar seperti contoh di kertas kosong yang tersedia. Berikan 3 kali kesempatan. Apakah anak dapat menggambar + seperti contoh di bawah?",
            "domain": "Gerak halus",
            "sourcePage": 151,
            "imageSourcePage": 151
          },
          {
            "text": "Berikan anak pensil dan kertas lalu katakan kepada anak “Buatlah gambar orang” (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan, dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak menggambar orang dengan sedikitnya 3 bagian tubuh? Jawaban ‘Ya’: Jawaban ‘Tidak’:",
            "domain": "Gerak halus",
            "sourcePage": 151,
            "imageSourcePage": 151
          },
          {
            "text": "Memahami konsep 2 warna Minta anak untuk menyebutkan 2 warna. Dapatkah anak menyebut 2 warna dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 152
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah bicara anak mampu dipahami seluruhnya oleh orang lain (yang tidak bertemu setiap hari)?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 152
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak mengikuti peraturan permainan saat bermain dengan teman-temannya (misal: ular tangga, petak umpet, dll)?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 152
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak menggosok gigi tanpa dibantu?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 152
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mengancingkan bajunya atau pakaian boneka?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 152
          },
          {
            "text": "Mengenal konsep 2 kata depan Minta anak untuk mengikuti perintah di bawah, jangan memberi isyarat. “Ambil benda (misalnya kertas, balok) dan letakkan di atas meja” “Ambil benda (misalnya kertas, balok) dan letakkan di bawah meja” “Ambil benda (misalnya kertas, balok) dan letakkan di depan ibu” “Ambil benda (misalnya kertas, balok) dan letakkan di samping ibu” “Ambil benda (misalnya kertas, balok) dan letakkan di belakang ibu” Dapatkah anak melakukan sedikitnya 2 perintah (memahami 2 kata depan)?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 152
          },
          {
            "text": "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 2 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 152
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 138, 139 (PDF 151, 152).",
        "images": [
          {
            "src": "assets/development/pedoman_151.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 138 (PDF 151)"
          },
          {
            "src": "assets/development/pedoman_152.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 139 (PDF 152)"
          }
        ]
      },
      {
        "id": "kpsp-60",
        "label": "KPSP umur 60 bulan",
        "age": 60,
        "sourcePages": [
          153,
          154
        ],
        "questions": [
          {
            "text": "Perlihatkan gambar kedua garis ini pada anak. Tanyakan: “Mana garis yang lebih panjang?” Minta anak menunjuk garis yang lebih panjang. Setelah anak menunjuk, putar lembar ini dan ulangi pertanyaan tersebut. Apakah anak dapat menunjuk garis yang lebih panjang sebanyak 3 kali dengan benar?",
            "domain": "Gerak halus",
            "sourcePage": 153,
            "imageSourcePage": 153
          },
          {
            "text": "Berikan anak pensil dan kertas lalu katakan kepada anak “Buatlah gambar orang” (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak menggambar orang dengan sedikitnya 3 bagian tubuh? Jawaban ‘Ya’: Jawaban ‘Tidak’:",
            "domain": "Gerak halus",
            "sourcePage": 153,
            "imageSourcePage": 153
          },
          {
            "text": "Memahami konsep 4 warna Minta anak untuk menyebutkan 4 warna. Dapatkah anak menyebut keempat warna tersebut dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 153
          },
          {
            "text": "Tanyakan kepada anak pertanyaan berikut ini satu persatu: “Apa yang kamu lakukan saat kedinginan?” Jawaban: pakai jaket, pakai selimut “Apa yang kamu lakukan saat kelelahan?” Jawaban: tidur, berbaring, istirahat “Apa yang kamu lakukan saat merasa lapar?” Jawaban: makan “Apa yang kamu lakukan saat merasa haus?” Jawaban: minum Dapatkah anak menjawab 3 pertanyaan terkait kata sifat tersebut dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 153
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mengancingkan bajunya atau pakaian boneka?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 154
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak bereaksi dengan tenang dan tidak rewel (tanpa menangis atau menggelayut) pada saat ditinggal oleh orang tua atau pengasuh?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 154
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak sepenuhnya berpakaian sendiri tanpa dibantu?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 154
          },
          {
            "text": "Mengenal konsep 4 kata depan Minta anak untuk mengikuti perintah di bawah, jangan memberi isyarat: “Ambil benda (misalnya kertas, balok) dan letakkan di atas meja” “Ambil benda (misalnya kertas, balok) dan letakkan di bawah meja” “Ambil benda (misalnya kertas, balok) dan letakkan di depan ibu” “Ambil benda (misalnya kertas, balok) dan letakkan di samping ibu” “Ambil benda (misalnya kertas, balok) dan letakkan di belakang ibu” Dapatkah anak melakukan sedikitnya 4 perintah (memahami 4 kata depan)?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 154
          },
          {
            "text": "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 4 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 154
          },
          {
            "text": "Minta anak untuk melompat dengan 1 kaki beberapa kali tanpa berpegangan (lompatan dengan 2 kaki tidak ikut dinilai). Dapatkah anak melompat 2-3 kali dengan 1 kaki?",
            "domain": "Gerak kasar",
            "sourcePage": 154
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 140, 141 (PDF 153, 154).",
        "images": [
          {
            "src": "assets/development/pedoman_153.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 140 (PDF 153)"
          },
          {
            "src": "assets/development/pedoman_154.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 141 (PDF 154)"
          }
        ]
      },
      {
        "id": "kpsp-66",
        "label": "KPSP umur 66 bulan",
        "age": 66,
        "sourcePages": [
          155,
          156
        ],
        "questions": [
          {
            "text": "Menggambar + Jangan membantu anak dan jangan memberitahu nama gambar ini. Minta anak untuk menggambar seperti contoh di kertas kosong yang tersedia. Berikan 3 kali kesempatan. Apakah anak dapat menggambar + seperti contoh di bawah?",
            "domain": "Gerak halus",
            "sourcePage": 155,
            "imageSourcePage": 155
          },
          {
            "text": "Menggambar kotak dengan dicontohkan Berikan kepada anak pensil dan kertas. Tunjukkan kepada anak contoh gambar di bawah. Anda bisa mencontohkan cara membuat kotak. Dapatkah anak menggambar kotak seperti contoh di bawah?",
            "domain": "Gerak halus",
            "sourcePage": 155,
            "imageSourcePage": 155
          },
          {
            "text": "Menggambar orang dengan sedikitnya 6 bagian tubuh Berikan anak pensil dan kertas lalu katakan kepada anak “Buatlah gambar orang” (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak menggambar orang dengan sedikitnya 6 bagian tubuh? Jawaban ‘Ya’: Jawaban ‘Tidak’:",
            "domain": "Gerak halus",
            "sourcePage": 155,
            "imageSourcePage": 155
          },
          {
            "text": "Mengetahui konsep angka 5 Letakkan 8 kubus di atas meja dan selembar kertas di samping kubus. Katakan kepada anak “Ambil 5 kubus dan letakkan di atas kertas”. Setelah anak selesai meletakkan, tanyakan “Ada berapa banyak kubus di atas kertas?” Dapatkah anak melakukannya?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 156
          },
          {
            "text": "Memahami/mengartikan 5 kata Pastikan anak mendengar pemeriksa lalu katakan “Saya akan mengucapkan 1 kata dan saya ingin kamu menyebutkan apa arti kata itu”. Setiap kata dapat diberikan sebanyak 3 kali bila perlu. Pemeriksa dapat mengatakan “Beritahu saya sesuatu tentang itu” tetapi jangan tanya apa kegunaannya. Tanyalah setiap kata dalam satu waktu. “Apakah bola itu?” “Apakah sungai itu?” “Apakah meja itu?” “Apakah mobil/motor itu?” “Apakah rumah itu?” “Apakah pisang itu?” “Apakah pintu itu?” “Apakah atap itu?” Anak dikatakan dapat mengartikan jika anak mengartikan yang sesuai dalam istilah: 1) kegunaan, 2) bentuk, 3) terbuat dari apa, 4) kategori umum. Dapatkah anak mengartikan 5 kata yang sesuai?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 156
          },
          {
            "text": "Mengetahui konsep analogi berlawanan Minta anak untuk melengkapi kalimat di bawah ini, jangan membantu kecuali mengulang pertanyaan: “Jika kuda besar, maka tikus...?” Jawaban: kecil “Jika api panas, maka es...?” Jawaban: dingin “Jika ibu seorang wanita, maka ayah seorang...” Jawaban: pria, laki-laki Apakah anak menjawab ketiga pertanyaan dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 156
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak bereaksi dengan tenang dan tidak rewel (tanpa menangis atau menggelayut) pada saat ditinggal oleh orang tua atau pengasuh?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 156
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, dapatkah anak sepenuhnya berpakaian sendiri tanpa dibantu?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 156
          },
          {
            "text": "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 6 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 156
          },
          {
            "text": "Apakah anak dapat menangkap bola kecil sebesar bola tenis atau bola kasti hanya dengan menggunakan kedua tangannya?",
            "domain": "Gerak kasar",
            "sourcePage": 156
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 142, 143 (PDF 155, 156).",
        "images": [
          {
            "src": "assets/development/pedoman_155.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 142 (PDF 155)"
          },
          {
            "src": "assets/development/pedoman_156.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 143 (PDF 156)"
          }
        ]
      },
      {
        "id": "kpsp-72",
        "label": "KPSP umur 72 bulan",
        "age": 72,
        "sourcePages": [
          157,
          158,
          159
        ],
        "questions": [
          {
            "text": "Menggambar kotak tanpa dicontohkan Berikan kepada anak pensil dan kertas. Tunjukkan kepada anak contoh gambar di bawah. Tanpa menyebutkan nama dan tanpa mencontohkan atau menggerakkan jari telunjuk atau pensil untuk menunjukkan bagaimana cara menggambarnya, katakan kepada anak “Gambarlah yang seperti gambar ini”. Lihat contoh di bawah untuk menilai gambar anak. Dapatkah anak menggambar kotak seperti contoh di bawah?",
            "domain": "Gerak halus",
            "sourcePage": 157,
            "imageSourcePage": 157
          },
          {
            "text": "Menggambar orang dengan sedikitnya 6 bagian tubuh Berikan anak pensil dan kertas lalu katakan kepada anak “Buatlah gambar orang” (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak menggambar orang dengan sedikitnya 6 bagian tubuh? Jawaban ‘Ya’: Jawaban ‘Tidak’:",
            "domain": "Gerak halus",
            "sourcePage": 157,
            "imageSourcePage": 157
          },
          {
            "text": "Mengetahui konsep analogi berlawanan Minta anak untuk melengkapi kalimat di bawah ini, jangan membantu kecuali mengulang pertanyaan: “Jika kuda besar, maka tikus...?” Jawaban: kecil “Jika api panas, maka es...?” Jawaban: dingin “Jika ibu seorang wanita, maka ayah seorang...” Jawaban: pria, laki-laki “Jika pagi ada matahari, malam ada...” Jawaban: bulan Apakah anak menjawab ketiga pertanyaan dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 157
          },
          {
            "text": "Memahami/mengartikan 7 kata Pastikan anak mendengar pemeriksa lalu katakan “Saya akan mengucapkan 1 kata dan saya ingin kamu menyebutkan apa arti kata itu”. Setiap kata dapat diberikan sebanyak 3 kali bila perlu. Pemeriksa dapat mengatakan “Beritahu saya sesuatu tentang itu” tetapi jangan tanya apa kegunaannya. Tanyalah setiap kata dalam satu waktu. “Apakah bola itu?” “Apakah sungai itu?” “Apakah meja itu?” “Apakah mobil/motor itu?” “Apakah rumah itu?” “Apakah pisang itu?” “Apakah pintu itu?” “Apakah atap itu?” Anak dikatakan dapat mengartikan jika anak mengartikan yang sesuai dalam istilah: 1) kegunaan, 2) bentuk, 3) terbuat dari apa, 4) kategori umum. Dapatkah anak mengartikan 7 kata yang sesuai?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 158
          },
          {
            "text": "Mengetahui komposisi benda Isi titik−titik di bawah ini dengan jawaban anak. Jangan membantu kecuali mengulangi pertanyaan sampai 3 kali bila anak menanyakannya. \"Sendok dibuat dari apa?\" Jawaban: besi, baja, plastik, kayu \"Sepatu dibuat dari apa?\" Jawaban: kulit, karet, kain, plastik, kayu \"Pintu dibuat dari apa?\" Jawaban: kayu, besi, kaca Apakah anak dapat menjawab ketiga pertanyaan diatas dengan benar?",
            "domain": "Bicara dan bahasa",
            "sourcePage": 158
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat menggosok giginya tanpa bantuan?",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 158
          },
          {
            "text": "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat menyiapkan dan mengambil makanan tanpa bantuan, termasuk menggunakan mangkok, sendok, menuangkan makanan dan susu ke mangkok tanpa banyak tumpah? Jawab ‘Ya’ jika anak dapat melakukannya, termasuk menuangkan susu dari beberapa jenis kotak atau wadah makanan.",
            "domain": "Sosialisasi dan kemandirian",
            "sourcePage": 158
          },
          {
            "text": "Apakah anak dapat menangkap bola kecil sebesar bola tenis atau bola kasti hanya dengan menggunakan kedua tangannya?",
            "domain": "Gerak kasar",
            "sourcePage": 158
          },
          {
            "text": "Tunjukkan kepada anak bagaimana cara berjalan di garis lurus dengan menempatkan tumit dari 1 kaki di depan jari kaki lain. Berjalanlah 8 langkah, lalu minta anak untuk melakukannya. Berikan contoh dan kesempatan sebanyak 3 kali bila perlu. Dapatkah anak melakukannya sebanyak 4 langkah atau lebih dengan meletakkan tumit tidak lebih dari 2,5 cm dari jari kaki lain tanpa berpegangan?",
            "domain": "Gerak kasar",
            "sourcePage": 158
          },
          {
            "text": "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 11 detik atau lebih?",
            "domain": "Gerak kasar",
            "sourcePage": 159
          }
        ],
        "source": "Buku Pedoman SDIDTK revisi 23-08-2022, hlm. 144, 145, 146 (PDF 157, 158, 159).",
        "images": [
          {
            "src": "assets/development/pedoman_157.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 144 (PDF 157)"
          },
          {
            "src": "assets/development/pedoman_158.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 145 (PDF 158)"
          },
          {
            "src": "assets/development/pedoman_159.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 146 (PDF 159)"
          }
        ]
      }
    ],
    "instructions": [
      "Anak harus hadir saat pemeriksaan. Hitung umur dan koreksi prematuritas menurut pedoman. Gunakan formulir kelompok umur yang paling dekat dan lebih muda bila umur tidak tepat pada kelompok KPSP.",
      "Jawab Ya bila anak bisa, pernah, sering, atau kadang-kadang melakukan kemampuan tersebut. Jawab Tidak bila belum pernah, tidak pernah, atau pengasuh tidak tahu.",
      "Lakukan setiap tugas dan gunakan alat bantu serta gambar sesuai formulir sumber."
    ],
    "sourcePages": [
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159
    ]
  },
  "tdd": {
    "id": "tdd",
    "title": "Tes Daya Dengar (TDD)",
    "source": "Kementerian Kesehatan RI. Buku Pedoman Pelaksanaan SDIDTK, revisi 23 Agustus 2022. Hlm. 147–152 (PDF 160–165).",
    "ageMinMonths": 0,
    "ageMaxMonths": 72,
    "forms": [
      {
        "id": "tdd-3",
        "label": "Umur kurang atau sampai 3 bulan",
        "questions": [
          {
            "text": "Apakah bayi dapat mengatakan “Aaaaa”, “Ooooo”?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah bayi menatap wajah dan tampak mendengarkan Anda, lalu berbicara saat Anda diam?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah Anda dapat seolah-olah berbicara dengan bayi Anda?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah bayi kaget bila mendengar suara (mengejapkan mata, napas lebih cepat)?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah bayi kelihatan menoleh bila Anda berbicara di sebelahnya?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah bayi Anda dapat tersenyum?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah bayi Anda kenal dengan Anda, seperti tersenyum lebih cepat pada Anda dibandingkan orang lain?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 0,
        "maxMonths": 3,
        "minExclusive": false,
        "sourcePages": [
          162
        ]
      },
      {
        "id": "tdd-6",
        "label": "Umur lebih dari 3 sampai 6 bulan",
        "questions": [
          {
            "text": "Apakah bayi Anda dapat tertawa keras?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah bayi dapat bermain menggelembungkan mulut seperti meniup balon?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah bayi memberi respons tertentu, seperti menjadi lebih riang bila Anda datang?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Pemeriksa duduk menghadap bayi yang dipangku orang tuanya, bunyikan bel disamping tanpa terlihat bayi, apakah bayi itu menoleh ke samping?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Pemeriksa menatap mata bayi sekitar 45 cm, lalu gunakan mainan untuk menarik pandangan bayi ke kiri, kanan, atas, dan bawah. Apakah bayi dapat mengikutinya?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah bayi berkedip bila pemeriksa melakukan gerakan menusuk mata, lalu berhenti sekitar 3 cm tanpa menyentuh mata?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 3,
        "maxMonths": 6,
        "minExclusive": true,
        "sourcePages": [
          162
        ]
      },
      {
        "id": "tdd-12",
        "label": "Umur lebih dari 6 sampai 12 bulan",
        "questions": [
          {
            "text": "Apakah bayi dapat membuat suara berulang seperti ‘mamamama’, ‘babababa’?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah bayi dapat memanggil mama atau papa, walaupun tidak untuk memanggil orang tuanya?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Pemeriksa duduk mengahadap bayi yang dipangku orang tuanya, bunyikan bel di samping bawah tanpa terlihat bayi, apakah bayi langsung menoleh ke samping bawah?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah bayi mengikuti perintah tanpa dibantu gerakan badan, seperti “Stop, berikan mainanmu”?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah bayi mengikuti perintah dengan dibantu gerakan badan, seperti “Stop, berikan mainanmu”?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah bayi secara spontan memulai permainan dengan gerakan tubuh, seperti ‘Pok Ame-Ame’ atau ‘Cilukba’?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 6,
        "maxMonths": 12,
        "minExclusive": true,
        "sourcePages": [
          163
        ]
      },
      {
        "id": "tdd-18",
        "label": "Umur lebih dari 12 sampai 18 bulan",
        "questions": [
          {
            "text": "Apakah anak dapat memanggil ‘mama’ atau ‘papa’, hanya untuk memanggil orang tuanya?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah anak memulai menggunakan kata-kata lain, selain kata ‘mama’, ‘papa’, anggota keluarga lain, dan hewan peliharaan?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Pemeriksa duduk menghadap bayi yang dipangku orang tuanya, bunyikan bel di samping bawah tanpa terlihat bayi, apakah bayi langsung menoleh ke samping bawah?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak mengikuti perintah tanpa dibantu gerakan badan, seperti “Stop, berikan mainanmu”?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak secara spontan memulai permainan dengan gerakan tubuh, seperti ‘Pok Ame-Ame’ atau ‘Cilukba’?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah anak Anda menunjuk dengan jari telunjuk bila ingin sesuatu, bukan dengan cara memegang dengan semua jari?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 12,
        "maxMonths": 18,
        "minExclusive": true,
        "sourcePages": [
          163
        ]
      },
      {
        "id": "tdd-24",
        "label": "Umur lebih dari 18 sampai 24 bulan",
        "questions": [
          {
            "text": "Apakah anak dapat mengucapkan 2 atau lebih kata yang menunjukkan keinginan, seperti “Susu”, “Minum”, “Lagi”?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah anak secara spontan mengatakan 2 kombinasi kata, seperti “Mau bobo”, “Lihat Papa”?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah anak dapat menunjukkan paling sedikit 1 anggota badan, misal “Mana hidungmu?”, “Mana matamu?” tanpa diberi contoh?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak dapat mengerjakan 2 macam perintah dalam satu kalimat, seperti “Ambil sepatumu dan taruh disini” tanpa diberi contoh?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak secara spontan memulai permainan dengan gerakan tubuh, seperti ‘Pok Ame-Ame’ atau ‘Cilukba’?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah anak Anda menunjuk dengan jari telunjuk bila ingin sesuatu, bukan dengan cara memegang dengan semua jari?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 18,
        "maxMonths": 24,
        "minExclusive": true,
        "sourcePages": [
          164
        ]
      },
      {
        "id": "tdd-30",
        "label": "Umur lebih dari 24 sampai 30 bulan",
        "questions": [
          {
            "text": "Apakah anak mulai menggunakan kata-kata lain, selain kata ‘mama’, ‘papa’, anggota keluarga lain, dan hewan peliharaan?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah anak mulai mengungkapkan kata yang berarti ‘milik’ misal “Susu kamu”, “Bonekaku”?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah anak dapat mengerjakan 2 macam perintah dalam satu kalimat, seperti “Ambil sepatu dan taruh disini” tanpa diberi contoh?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak dapat menunjuk minimal 2 nama benda di depannya (cangkir, bola, sendok)?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak secara spontan memulai permainan dengan gerakan tubuh, seperti ‘Pok Ame-Ame’ atau ‘Cilukba’?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah anak Anda menunjuk dengan jari telunjuk bila ingin sesuatu, bukan dengan cara memegang dengan semua jari?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 24,
        "maxMonths": 30,
        "minExclusive": true,
        "sourcePages": [
          164
        ]
      },
      {
        "id": "tdd-36",
        "label": "Umur lebih dari 30 sampai 36 bulan",
        "questions": [
          {
            "text": "Apakah anak dapat menyebutkan nama benda dan kegunaannya, seperi cangkir untuk minum, bola untuk dilempar, pensil warna untuk menggambar, sendok untuk makan?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah lebih dari tiga perempat orang mengerti apa yang dibicarakan anak Anda?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah anak dapat menunjukkan minimal 2 nama benda di depannya sesuai fungsinya (misal untuk minum: cangkir, untuk dilempar: bola, untuk makan: sendok, untuk menggambar: pensil warna)?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak dapat mengerjakan perintah yang disertai kata depan? (misal: “Sekarang kubus itu di bawah meja, tolong taruh di atas meja”)?",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak secara spontan memulai permainan dengan gerakan tubuh? Seperti ‘Pok Ame-Ame’ atau ‘Cilukba’?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah anak Anda menunjuk dengan jari telunjuk bila ingin sesuatu, bukan dengan cara memegang dengan semua jari?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 30,
        "maxMonths": 36,
        "minExclusive": true,
        "sourcePages": [
          165
        ]
      },
      {
        "id": "tdd-72",
        "label": "Umur lebih dari 36 bulan",
        "questions": [
          {
            "text": "Apakah anak dapat menyebutkan nama benda dan kegunaannya, seperti cangkir untuk minum, bola untuk dilempar, pensil warna untuk menggambar, sendok untuk makan?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah lebih dari tiga perempat orang mengerti apa yang dibicarakan anak Anda?",
            "domain": "Kemampuan ekspresif"
          },
          {
            "text": "Apakah anak Anda dapat menunjukkan minimal 2 nama benda di depannya sesuai fungsi (misal untuk minum: cangkir, untuk dilempar: bola, untuk makan: sendok, untuk menggambar: pensil warna?)",
            "domain": "Kemampuan reseptif"
          },
          {
            "text": "Apakah anak secara spontan memulai permainan dengan gerakan tubuh, seperti ‘Pok Ame-Ame’ atau ‘Cilukba’?",
            "domain": "Kemampuan visual"
          },
          {
            "text": "Apakah anak Anda menunjuk dengan jari telunjuk bila ingin sesuatu, bukan dengan cara memegang dengan semua jari?",
            "domain": "Kemampuan visual"
          }
        ],
        "minMonths": 36,
        "maxMonths": 72,
        "minExclusive": true,
        "sourcePages": [
          165
        ]
      }
    ],
    "sourcePages": [
      160,
      161,
      162,
      163,
      164,
      165
    ],
    "instructions": [
      "Jadwal TDD setiap 3 bulan pada umur kurang dari 12 bulan dan setiap 6 bulan pada umur 12 bulan ke atas. Koreksi umur bayi lahir <38 minggu sampai umur 2 tahun.",
      "Pada umur kurang dari 24 bulan, orang tua/pengasuh menjawab berdasarkan kemampuan dalam 1 bulan terakhir. Jawab Tidak bila tidak pernah, tidak tahu, atau tidak dapat melakukannya.",
      "Pada umur 24 bulan atau lebih, amati anak melaksanakan perintah melalui orang tua/pengasuh. Jawab Tidak bila anak tidak dapat atau tidak mau melaksanakan perintah."
    ]
  },
  "kmpe": {
    "id": "kmpe",
    "title": "Kuesioner Masalah Perilaku Emosional (KMPE)",
    "source": "Kementerian Kesehatan RI. Buku Pedoman Pelaksanaan SDIDTK, revisi 23 Agustus 2022. Hlm. 161–164 (PDF 174–177). Diadaptasi dari Mental Health Care in the Community (Ladrido-Ignacio L, Tronco AT, 2000).",
    "ageMinMonths": 36,
    "ageMaxMonths": 72,
    "forms": [
      {
        "id": "kmpe",
        "label": "KMPE umur 36–72 bulan",
        "questions": [
          {
            "text": "Apakah anak Anda sering bereaksi negatif, marah atau tegang tanpa sebab yang jelas? (Bereaksi negatif contohnya rewel, tidak sabaran, banyak menangis, mudah tersinggung atau bereaksi berlebihan bila merasa situasi tidak seperti yang diharapkannya atau kemauannya tidak terpenuhi)"
          },
          {
            "text": "Apakah anak Anda tampak lebih memilih untuk menyendiri, bermain sendiri, atau menghindar dari anak seumurnya atau orang dewasa? (Ingin sendirian, menyendiri dengan ekspresi murung, tidak bersemangat, sedih, atau kehilangan minat terhadap hal-hal yang biasa sangat dinikmati)"
          },
          {
            "text": "Apakah anak Anda cenderung bersikap menentang? (Membantah, melawan, tidak mau menurut atau melakukan hal yang sebaliknya dari apa yang diminta, serta tampak tidak peduli ketika diberitahu atau ditegur)"
          },
          {
            "text": "Apakah anak Anda mudah takut atau cemas berlebihan tanpa sebab yang jelas? (Misalnya takut pada binatang atau benda yang tidak berbahaya, terlihat cemas ketika tidak melihat ibu atau pengasuh)"
          },
          {
            "text": "Apakah anak Anda sering sulit konsentrasi, perhatiannya mudah teralihkan atau banyak bergerak atau tidak bisa diam? (Misalnya anak tidak bisa bertahan lama untuk bermain dengan satu permainan, mudah mengalihkan perhatian bila ada hal lain yang lebih menarik perhatian seperti bunyi atau gerakan, tidak bisa duduk dengan tenang, banyak bergerak atau cenderung berjalan atau berlari mondar-mandir)"
          },
          {
            "text": "Apakah anak Anda lebih banyak menempel atau selalu minta ditemani, mudah cemas, dan tidak percaya diri? (Seakan minta perlindungan atau minta ditemani pada berbagai situasi, terutama ketika berada dalam situasi baru atau ada orang yang baru dikenalnya; mengekspresikan kecemasan serta terlihat tidak percaya diri)"
          },
          {
            "text": "Apakah anak Anda menunjukkan adanya perubahan pola tidur? (Misalnya sulit tidur, terjaga sepanjang hari, sering terbangun di waktu tidur malam oleh karena mimpi buruk, mengigau, menangis di dalam tidurnya)"
          },
          {
            "text": "Apakah anak Anda mengalami perubahan pola makan dari yang biasanya? (Kehilangan nafsu makan, tidak mau makan sama sekali, atau sebaliknya makan berlebihan, sangat memilih jenis makanan, atau membiarkan makanan lama di mulut tanpa dikunyah atau diemut)"
          },
          {
            "text": "Apakah anak Anda seringkali mengeluh sakit kepala, sakit perut, atau keluhan fisik lainnya pada waktu-waktu tertentu?"
          },
          {
            "text": "Apakah anak Anda mudah putus asa atau frustrasi dan sering menunjukkan emosi yang negatif? (Misalnya sedih atau kecewa yang berkepanjangan, mudah mengeluh, marah, atau protes. Misal ketika anak merasa kesulitan dalam menggambar, lalu berteriak minta tolong, marah, atau kertasnya disobek)"
          },
          {
            "text": "Apakah anak Anda menunjukkan kemunduran pola perilaku dari kemampuan yang sudah dimilikinya? (Misalnya mengompol kembali, menghisap jempol, atau tidak mau berpisah dengan orangtua atau pengasuhnya)"
          },
          {
            "text": "Apakah anak Anda sering berkelahi, bertengkar, atau menyerang anak lain baik secara verbal maupun non verbal? (Misalnya mengejek, meneriaki, merebut permainan, atau memukul temannya)"
          },
          {
            "text": "Apakah anak Anda sering diperlakukan tidak menyenangkan oleh anak lain atau orang dewasa? (Misalnya ditinggal bermain, dihindari, diejek, dikata-katai, direbut mainannya, atau disakiti secara fisik)"
          },
          {
            "text": "Apakah anak Anda cenderung berperilaku merusak atau cenderung selalu ingin menang atau menguasai? (Misalnya merusak benda, menyakiti dirinya atau binatang)"
          }
        ]
      }
    ],
    "sourcePages": [
      174,
      175,
      176,
      177
    ],
    "instructions": [
      "Lakukan pemeriksaan atas indikasi. Tanyakan setiap pertanyaan secara lambat, jelas, nyaring, dan satu per satu kepada orang tua atau pengasuh."
    ]
  },
  "mchat": {
    "id": "mchat",
    "title": "Modified Checklist for Autism in Toddlers, Revised (M-CHAT-R)",
    "source": "Kementerian Kesehatan RI. Buku Pedoman Pelaksanaan SDIDTK, revisi 23 Agustus 2022. Hlm. 164–168 (PDF 177–181). ©2009 Diana Robins, Deborah Fein, Marianne Barton. Terjemahan Soetjiningsih, Trisna Windiani, Sugitha Adnyana, Apik Lestari (2014).",
    "ageMinMonths": 16,
    "ageMaxMonths": 30,
    "forms": [
      {
        "id": "mchat",
        "label": "M-CHAT-R umur 16–30 bulan",
        "questions": [
          {
            "text": "Jika Anda menunjuk sesuatu di ruangan, apakah anak Anda melihatnya? (Misalnya, jika Anda menunjuk hewan atau mainan, apakah anak Anda melihat ke arah hewan atau mainan yang anda tunjuk?)"
          },
          {
            "text": "Pernahkah Anda berpikir bahwa anak Anda tuli?"
          },
          {
            "text": "Apakah anak Anda pernah bermain pura-pura? (Misalnya, berpura-pura minum dari gelas kosong, berpura-pura berbicara menggunakan telepon, atau menyuapi boneka atau boneka binatang?)"
          },
          {
            "text": "Apakah anak Anda suka memanjat benda-benda? (Misalnya, furnitur, alat-alat bermain, atau tangga)"
          },
          {
            "text": "Apakah anak Anda menggerakkan jari-jari tangannya dengan cara yang tidak biasa di dekat matanya? (Misalnya, apakah anak Anda menggoyangkan jari dekat pada matanya?)"
          },
          {
            "text": "Apakah anak Anda pernah menunjuk dengan satu jari untuk meminta sesuatu atau untuk meminta tolong? (Misalnya, menunjuk makanan atau mainan yang jauh dari jangkauannya)"
          },
          {
            "text": "Apakah anak Anda pernah menunjuk dengan satu jari untuk menunjukkan sesuatu yang menarik pada Anda? (Misalnya, menunjuk pada pesawat di langit atau truk besar di jalan)"
          },
          {
            "text": "Apakah anak Anda tertarik pada anak lain? (Misalnya, apakah anak Anda memperhatikan anak lain, tersenyum pada mereka atau pergi ke arah mereka)"
          },
          {
            "text": "Apakah anak Anda pernah memperlihatkan suatu benda dengan membawa atau mengangkatnya kepada Anda - tidak untuk minta tolong, hanya untuk berbagi? (Misalnya, memperlihatkan Anda bunga, binatang atau truk mainan)"
          },
          {
            "text": "Apakah anak Anda memberikan respon jika namanya dipanggil? (Misalnya, apakah anak Anda melihat, bicara atau bergumam, atau menghentikan apa yang sedang dilakukannya saat Anda memanggil namanya)"
          },
          {
            "text": "Saat Anda tersenyum pada anak Anda, apakah anak Anda tersenyum balik?"
          },
          {
            "text": "Apakah anak Anda pernah marah saat mendengar suara bising sehari-hari? (Misalnya, apakah anak Anda berteriak atau menangis saat mendengar suara bising seperti vacuum cleaner atau musik keras)"
          },
          {
            "text": "Apakah anak Anda bisa berjalan?"
          },
          {
            "text": "Apakah anak Anda menatap mata Anda saat Anda bicara padanya, bermain bersamanya, atau saat memakaikan pakaian?"
          },
          {
            "text": "Apakah anak Anda mencoba meniru apa yang Anda lakukan? (Misalnya, melambaikan tangan, tepuk tangan atau meniru saat Anda membuat suara lucu)"
          },
          {
            "text": "Jika Anda memutar kepala untuk melihat sesuatu, apakah anak Anda melihat sekeliling untuk melihat apa yang Anda lihat?"
          },
          {
            "text": "Apakah anak Anda mencoba utuk membuat Anda melihat kepadanya? (Misalnya, apakah anak Anda melihat Anda untuk dipuji atau berkata “lihat” atau “lihat aku”)"
          },
          {
            "text": "Apakah anak Anda mengerti saat Anda memintanya melakukan sesuatu? (Misalnya, jika Anda tidak menunjuk, apakah anak Anda mengerti kalimat “letakkan buku itu di atas kursi” atau “ambilkan saya selimut”)"
          },
          {
            "text": "Jika sesuatu yang baru terjadi, apakah anak Anda menatap wajah Anda untuk melihat perasaan Anda tentang hal tersebut? (Misalnya, jika anak Anda mendengar bunyi aneh atau lucu, atau melihat mainan baru, akankah dia menatap wajah Anda?)"
          },
          {
            "text": "Apakah anak Anda menyukai aktivitas yang bergerak? (Misalnya, diayun-ayun atau dihentak-hentakkan pada lutut Anda)"
          }
        ]
      }
    ],
    "sourcePages": [
      177,
      178,
      179,
      180,
      181
    ],
    "instructions": [
      "Lakukan atas indikasi keterlambatan bicara, gangguan komunikasi/interaksi sosial, atau perilaku berulang. Pertanyaan dijawab orang tua atau pengasuh dan dilengkapi pengamatan pemeriksa.",
      "Pikirkan perilaku anak biasanya. Jika tindakan hanya pernah terlihat beberapa kali dan tidak selalu dilakukan, jawab Tidak. Lingkari/pilih satu jawaban untuk setiap pertanyaan."
    ]
  },
  "actrs": {
    "id": "actrs",
    "title": "Abbreviated Conners’ Teacher Rating Scale (ACTRS/GPPH)",
    "source": "Kementerian Kesehatan RI. Buku Pedoman Pelaksanaan SDIDTK, revisi 23 Agustus 2022. Hlm. 168–170 (PDF 181–183).",
    "ageMinMonths": 36,
    "ageMaxMonths": 72,
    "forms": [
      {
        "id": "actrs",
        "label": "ACTRS/GPPH umur 36 bulan ke atas",
        "questions": [
          {
            "text": "Tidak kenal lelah atau aktivitas yang berlebihan",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Mudah menjadi gembira, impulsif",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Mengganggu anak-anak lain",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Gagal menyelesaikan kegiatan yang telah dimulai; rentang perhatian pendek",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Menggerak-gerakkan anggota badan atau kepala secara terus menerus",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Kurang memperhatikan, mudah teralihkan",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Permintaannya harus segera dipenuhi; mudah menjadi frustrasi",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Sering dan mudah menangis",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Suasana hatinya mudah berubah dengan cepat dan drastis",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Ledakan kekesalan, tingkah laku eksplosif dan tak terduga",
            "options": [
              {
                "value": "0",
                "label": "0 — Tidak ditemukan"
              },
              {
                "value": "1",
                "label": "1 — Kadang-kadang"
              },
              {
                "value": "2",
                "label": "2 — Sering"
              },
              {
                "value": "3",
                "label": "3 — Selalu"
              }
            ]
          },
          {
            "text": "Setelah menilai 10 kegiatan di atas, apakah pemeriksa masih merasa ragu terhadap hasil pemeriksaan?",
            "contextual": true
          }
        ]
      }
    ],
    "sourcePages": [
      181,
      182,
      183
    ],
    "instructions": [
      "Lakukan atas indikasi anak tidak bisa duduk tenang, selalu bergerak tanpa tujuan dan tidak mengenal lelah, atau perubahan suasana hati mendadak/impulsif.",
      "Tanyakan dan amati perilaku di semua tempat, setiap saat, dan dengan siapa saja. Nilai 0: tidak ditemukan; 1: kadang-kadang; 2: sering; 3: selalu. Pertimbangan pemeriksa dicatat terpisah dari 10 nilai instrumen."
    ]
  },
  "tdl": {
    "id": "tdl",
    "title": "Tes Daya Lihat dengan tumbling E",
    "source": "Kementerian Kesehatan RI. Buku Pedoman Pelaksanaan SDIDTK, revisi 23 Agustus 2022. Hlm. 158–160 (PDF 171–173).",
    "ageMinMonths": 36,
    "ageMaxMonths": 72,
    "forms": [
      {
        "id": "tdl",
        "label": "Pemeriksaan mata kanan dan kiri",
        "questions": [
          {
            "text": "Hasil mata kanan menggunakan kartu optotype E 6/60",
            "options": [
              {
                "value": "pass3",
                "label": "Benar 3 kali berturut-turut dari 3 percobaan"
              },
              {
                "value": "pass5",
                "label": "Benar 4 atau 5 dari 5 percobaan"
              },
              {
                "value": "fail",
                "label": "Kurang: benar kurang dari 4/5 atau tidak dapat menjawab benar sesuai petunjuk"
              },
              {
                "value": "notsee",
                "label": "Anak menyatakan tidak melihat kartu E"
              }
            ]
          },
          {
            "text": "Hasil mata kanan menggunakan kartu optotype E 6/12",
            "options": [
              {
                "value": "pass3",
                "label": "Benar 3 kali berturut-turut dari 3 percobaan"
              },
              {
                "value": "pass5",
                "label": "Benar 4 atau 5 dari 5 percobaan"
              },
              {
                "value": "fail",
                "label": "Kurang: benar kurang dari 4/5 atau tidak dapat menjawab benar sesuai petunjuk"
              },
              {
                "value": "notsee",
                "label": "Anak menyatakan tidak melihat kartu E"
              },
              {
                "value": "skip",
                "label": "Tidak dilanjutkan karena hasil kartu E 6/60 pada mata yang sama kurang"
              }
            ]
          },
          {
            "text": "Hasil mata kiri menggunakan kartu optotype E 6/60",
            "options": [
              {
                "value": "pass3",
                "label": "Benar 3 kali berturut-turut dari 3 percobaan"
              },
              {
                "value": "pass5",
                "label": "Benar 4 atau 5 dari 5 percobaan"
              },
              {
                "value": "fail",
                "label": "Kurang: benar kurang dari 4/5 atau tidak dapat menjawab benar sesuai petunjuk"
              },
              {
                "value": "notsee",
                "label": "Anak menyatakan tidak melihat kartu E"
              }
            ]
          },
          {
            "text": "Hasil mata kiri menggunakan kartu optotype E 6/12",
            "options": [
              {
                "value": "pass3",
                "label": "Benar 3 kali berturut-turut dari 3 percobaan"
              },
              {
                "value": "pass5",
                "label": "Benar 4 atau 5 dari 5 percobaan"
              },
              {
                "value": "fail",
                "label": "Kurang: benar kurang dari 4/5 atau tidak dapat menjawab benar sesuai petunjuk"
              },
              {
                "value": "notsee",
                "label": "Anak menyatakan tidak melihat kartu E"
              },
              {
                "value": "skip",
                "label": "Tidak dilanjutkan karena hasil kartu E 6/60 pada mata yang sama kurang"
              }
            ]
          }
        ],
        "images": [
          {
            "src": "assets/development/pedoman_171.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 158 (PDF 171)"
          },
          {
            "src": "assets/development/pedoman_172.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 159 (PDF 172)"
          }
        ]
      }
    ],
    "sourcePages": [
      171,
      172,
      173
    ],
    "instructions": [
      "Gunakan kartu optotype E fisik dengan ukuran setara 6/60 dan 6/12. Periksa pada ruangan bersih, tenang, dengan penyinaran baik; jarak pemeriksa dan anak 6 meter. Gunakan pita/tali 6 meter dengan simpul di 3 meter.",
      "Latih anak menentukan arah kaki E. Tutup sebelah mata dengan benar. Periksa tiap mata secara terpisah, dimulai kartu E 6/60 kemudian E 6/12.",
      "Tunjukkan E dengan arah berubah 3 kali. Bila benar 3 kali berturut-turut, hentikan untuk kartu itu. Bila benar 2/3, lanjutkan sampai 5 kali; benar setidaknya 4/5 dinilai baik. Jika E 6/60 kurang/tidak bisa, jangan lanjutkan E 6/12 pada mata itu."
    ]
  },
  "pupil": {
    "id": "pupil",
    "title": "Deteksi dini kelainan pupil putih",
    "source": "Kementerian Kesehatan RI. Buku Pedoman Pelaksanaan SDIDTK, revisi 23 Agustus 2022. Hlm. 153–157 (PDF 166–170).",
    "ageMinMonths": 0,
    "ageMaxMonths": 72,
    "forms": [
      {
        "id": "pupil-red",
        "label": "Tes Refleks Merah (Bruckner test)",
        "questions": [
          {
            "text": "Hasil Tes Refleks Merah (Bruckner test) pada kedua mata",
            "options": [
              {
                "value": "normal",
                "label": "Refleks merah terang dan ekual pada kedua mata"
              },
              {
                "value": "right",
                "label": "Abnormal/pupil putih pada mata kanan"
              },
              {
                "value": "left",
                "label": "Abnormal/pupil putih pada mata kiri"
              },
              {
                "value": "both",
                "label": "Abnormal/pupil putih pada kedua mata"
              },
              {
                "value": "unequal",
                "label": "Refleks tidak ekual antara kedua mata"
              }
            ]
          }
        ],
        "images": [
          {
            "src": "assets/development/pedoman_166.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 153 (PDF 166)"
          },
          {
            "src": "assets/development/pedoman_167.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 154 (PDF 167)"
          }
        ]
      },
      {
        "id": "pupil-torch",
        "label": "Pemeriksaan pupil menggunakan senter",
        "questions": [
          {
            "text": "Hasil Pemeriksaan pupil menggunakan senter pada kedua mata",
            "options": [
              {
                "value": "normal",
                "label": "Pupil tampak hitam pada kedua mata"
              },
              {
                "value": "right",
                "label": "Abnormal/pupil putih pada mata kanan"
              },
              {
                "value": "left",
                "label": "Abnormal/pupil putih pada mata kiri"
              },
              {
                "value": "both",
                "label": "Abnormal/pupil putih pada kedua mata"
              }
            ]
          }
        ],
        "images": [
          {
            "src": "assets/development/pedoman_168.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 155 (PDF 168)"
          }
        ]
      },
      {
        "id": "pupil-flash",
        "label": "Pemeriksaan pupil menggunakan lampu kilat kamera",
        "questions": [
          {
            "text": "Hasil Pemeriksaan pupil menggunakan lampu kilat kamera pada kedua mata",
            "options": [
              {
                "value": "normal",
                "label": "Pupil tampak hitam pada kedua mata"
              },
              {
                "value": "right",
                "label": "Abnormal/pupil putih pada mata kanan"
              },
              {
                "value": "left",
                "label": "Abnormal/pupil putih pada mata kiri"
              },
              {
                "value": "both",
                "label": "Abnormal/pupil putih pada kedua mata"
              }
            ]
          }
        ],
        "images": [
          {
            "src": "assets/development/pedoman_169.png",
            "caption": "Buku Pedoman SDIDTK, hlm. 156 (PDF 169)"
          }
        ]
      }
    ],
    "sourcePages": [
      166,
      167,
      168,
      169,
      170
    ],
    "instructions": [
      "Pemeriksaan dapat dimulai pada bayi baru lahir umur 0–3 bulan, dilanjutkan umur 6, 9, 18, 24, dan 36 bulan, saat kunjungan imunisasi, atau bila ada keluhan penglihatan/kelainan mata.",
      "Tes Refleks Merah dilakukan dokter dengan funduskopi/oftalmoskop direk, lensa 0, baterai terisi, pada ruang redup/gelap. Pemeriksa pada jarak 50 cm mengarahkan sinar ke kedua mata anak.",
      "Senter digunakan dokter bila alat funduskopi/oftalmoskop direk tidak tersedia; cara ini kurang akurat dibanding Tes Refleks Merah. Amati ada tidaknya putih pada pupil.",
      "Tes lampu kilat kamera dilakukan pada ruang redup dengan red-eye mode dinonaktifkan, kamera sejajar mata, dan anak melihat ke kamera. Catat hasil pengamatan; aplikasi tidak menganalisis foto secara otomatis."
    ]
  }
};
const kpsp72=instruments.kpsp.forms.find(f=>f.age===72);
kpsp72.questions[2].options=[{value:'yes',label:'Ya'},{value:'no',label:'Tidak'},{value:'unresolved',label:'Belum dapat ditetapkan'}];
kpsp72.fields=[
 {id:'analogy1Response',label:'Jawaban anak: jika kuda besar, maka tikus…',type:'textarea',required:false,hint:'Catat jawaban anak sebagaimana diucapkan.'},
 {id:'analogy2Response',label:'Jawaban anak: jika api panas, maka es…',type:'textarea',required:false,hint:'Catat jawaban anak sebagaimana diucapkan.'},
 {id:'analogy3Response',label:'Jawaban anak: jika ibu seorang wanita, maka ayah seorang…',type:'textarea',required:false,hint:'Catat jawaban anak sebagaimana diucapkan.'},
 {id:'analogy4Response',label:'Jawaban anak: jika pagi ada matahari, malam ada…',type:'textarea',required:false,hint:'Catat jawaban anak sebagaimana diucapkan.'},
 {id:'manualExaminer',label:'Nama dokter yang menetapkan hasil secara manual',type:'text',required:false},
 {id:'manualReviewDate',label:'Tanggal penetapan pemeriksa',type:'date',required:false},
 {id:'manualScore',label:'Skor total yang dicatat pemeriksa secara manual (0–10)',type:'number',min:0,max:10,step:1,required:false},
 {id:'manualAssessment',label:'Kesimpulan penilaian pemeriksa',type:'textarea',required:false},
 {id:'manualBasis',label:'Dasar penetapan pemeriksa dan petunjuk kriteria yang digunakan',type:'textarea',required:false,hint:'Catat dasar keputusan secara lengkap. Formulir sumber memuat empat analogi dan menyebut ketiga pertanyaan; aplikasi tidak menetapkan kriteria pengganti.'},
 {id:'manualPlan',label:'Rencana tindak lanjut yang ditetapkan pemeriksa',type:'textarea',required:false}
];
const normalAdvice=["Lanjutkan stimulasi sesuai umur.","Jadwalkan kunjungan berikutnya dan lanjutkan pemantauan tumbuh kembang."];
const ref="Rujuk ke rumah sakit rujukan tumbuh kembang level 1.";
function result(summary,classification,advice,extra){return Object.assign({summary,classification,advice},extra||{});}
function incomplete(){return result("Pemeriksaan belum lengkap.","Belum lengkap",["Lengkapi seluruh jawaban dan pastikan pemeriksaan telah dilakukan sesuai petunjuk sumber."],{complete:false});}
function valid(a,n,values){return Array.isArray(a)&&a.length===n&&Array.from(a).every(v=>values.includes(String(v)));}
function selectForm(id,c){return c&&c.form?c.form:instruments[id].forms.find(f=>f.id===(c&&c.formId))||instruments[id].forms[0];}
function validReviewDate(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const [y,m,d]=value.split('-').map(Number);const date=new Date(Date.UTC(y,m-1,d));return y>=1900&&y<=2200&&date.getUTCFullYear()===y&&date.getUTCMonth()===m-1&&date.getUTCDate()===d;}
function kpsp72Review(a,c,f){
 if(!Array.isArray(a)||a.length!==10||!Array.from({length:10},(_,i)=>i===2?['yes','no','unresolved'].includes(a[i]):['yes','no'].includes(a[i])).every(Boolean))return incomplete();
 const v=c&&c.values||{},subtotal=a.filter((x,i)=>i!==2&&x==='yes').length;
 const present=id=>typeof v[id]==='string'&&v[id].trim()!=='';
 const fields=['analogy1Response','analogy2Response','analogy3Response','analogy4Response','manualExaminer','manualReviewDate','manualScore','manualAssessment','manualBasis','manualPlan'];
 const missing=fields.filter(id=>!present(id));
 const manualScore=present('manualScore')?Number(v.manualScore):NaN;
 const scoreValid=Number.isInteger(manualScore)&&manualScore>=0&&manualScore<=10&&manualScore>=subtotal&&manualScore<=subtotal+1;
 const answerConsistent=a[2]==='unresolved'||a[2]==='yes'&&manualScore===subtotal+1||a[2]==='no'&&manualScore===subtotal;
 const reasons=[];
 if(missing.length)reasons.push('Lengkapi keempat jawaban anak, nama dan tanggal penetapan dokter, skor manual, kesimpulan, dasar penetapan, serta rencana tindak lanjut.');
 if(present('manualReviewDate')&&!validReviewDate(v.manualReviewDate))reasons.push('Tanggal penetapan pemeriksa harus merupakan tanggal kalender yang valid.');
 if(present('manualScore')&&!scoreValid)reasons.push('Skor manual harus berupa bilangan bulat '+subtotal+' atau '+(subtotal+1)+', sesuai sembilan jawaban lain dan satu butir yang belum ditetapkan.');
 if(present('manualScore')&&scoreValid&&!answerConsistent)reasons.push('Skor manual dan pilihan Ya/Tidak pada butir 3 tidak konsisten. Periksa kembali catatan pemeriksa.');
 const observations=fields.filter(present).map(id=>({label:f.fields.find(field=>field.id===id).label,value:v[id]}));
 if(missing.length||!validReviewDate(v.manualReviewDate)||!scoreValid||!answerConsistent)return result('Butir 3 KPSP 72 bulan belum memiliki penetapan pemeriksa yang lengkap. Skor total dan klasifikasi otomatis belum dapat ditetapkan.','Penilaian belum lengkap',reasons.length?reasons:['Lengkapi penetapan pemeriksa.'],{complete:false,pending:true,manualRequired:true,knownSubtotal:subtotal,maxKnownSubtotal:9,details:[{label:'Sembilan butir lain: jumlah jawaban Ya',value:String(subtotal)+' / 9'},...observations]});
 return result('Hasil dicatat sebagai penetapan pemeriksa secara manual. Skor yang dicatat pemeriksa: '+manualScore+' / 10. Kesimpulan pemeriksa: '+v.manualAssessment.trim(),'Penetapan pemeriksa (manual)',[v.manualPlan.trim()],{complete:true,manual:true,automaticScore:false,manualScore,knownSubtotal:subtotal,details:[{label:'Status penilaian',value:'Penetapan pemeriksa secara manual; bukan skor otomatis yang telah divalidasi terhadap kriteria butir 3.'},{label:'Sembilan butir lain: jumlah jawaban Ya',value:String(subtotal)+' / 9'},...observations]});
}
instruments.kpsp.interpret=function(a,c){
 const f=selectForm("kpsp",c);
 if(f&&f.age===72)return kpsp72Review(a,c,f);
 if(!valid(a,10,["yes","no"]))return incomplete();
 const score=a.filter(x=>x==="yes").length;
 let domains={};
 if(f) f.questions.forEach((q,i)=>{if(a[i]==="no"){const d=q.domain||"Aspek perkembangan";domains[d]=(domains[d]||0)+1;}});
 const extra={score,maxScore:10,domainFailures:domains,complete:true};
 if(score>=9){
  const currentAge=c&&Number(c.roundedAgeMonths),currentForm=Number.isFinite(currentAge)?[...instruments.kpsp.forms].reverse().find(form=>form.age<=currentAge):null;
  if(c&&c.values&&c.values.followUp==='recheck'&&f&&currentForm&&currentForm.age>f.age)return result(score+' jawaban Ya: sesuai (S) pada formulir evaluasi ulang umur '+f.age+' bulan. Penilaian menggunakan formulir umur sekarang belum selesai.','Sesuai (S) pada formulir evaluasi ulang',['Segera lanjutkan pemeriksaan menggunakan '+currentForm.label+' untuk menilai perkembangan sesuai umur sekarang.','Lanjutkan stimulasi perkembangan dan pemantauan menggunakan Buku KIA.'],extra);
  return result(score+" jawaban Ya: perkembangan sesuai tahap perkembangan (S).","Sesuai (S)",["Lanjutkan stimulasi perkembangan sesuai umur dan pemantauan menggunakan Buku KIA.","Ikutkan anak pada penimbangan dan pelayanan kesehatan di Posyandu setiap bulan serta kegiatan BKB. Anak umur 36–72 bulan dapat mengikuti PAUD, KB, atau TK.","Lakukan skrining KPSP setiap 3 bulan pada umur kurang dari 24 bulan dan setiap 6 bulan pada umur 24–72 bulan."],extra);
 }
 if(score>=7)return result(score+" jawaban Ya: perkembangan meragukan (M).","Meragukan (M)",["Ajarkan stimulasi dan intervensi dini secara intensif pada aspek yang tertinggal, sesering mungkin setiap hari.","Periksa kesehatan anak untuk mencari dan mengobati penyakit atau masalah gizi yang mungkin memengaruhi perkembangan.","Evaluasi setelah 2 minggu. Gunakan formulir umur yang sama dengan umur anak, atau formulir paling dekat yang lebih muda bila umur tidak tepat pada kelompok formulir.","Jika evaluasi mencapai 9–10 Ya, lanjutkan skrining sesuai umur anak sekarang. Jika tetap 7–8 Ya, periksa intensitas, ketepatan jenis, dan cara intervensi serta masalah kesehatan; perbaiki lalu evaluasi kembali.","Jika tidak ada kemajuan setelah intervensi 2 minggu atau selambat-lambatnya 4 minggu, segera rujuk ke rumah sakit. Sertakan jenis dan jumlah aspek perkembangan yang belum tercapai."],extra);
 return result(score+" jawaban Ya: kemungkinan penyimpangan perkembangan (P).","Kemungkinan penyimpangan (P)",[ref,"Tuliskan jenis dan jumlah penyimpangan: gerak kasar, gerak halus, bicara dan bahasa, serta sosialisasi dan kemandirian.","Lakukan intervensi dini sesuai aspek yang tertinggal sambil menyiapkan rujukan; tidak harus menunggu diagnosis etiologi."],extra);
};
instruments.tdd.interpret=function(a,c){const f=selectForm("tdd",c);if(!f||!valid(a,f.questions.length,["yes","no"]))return incomplete();const no=a.filter(v=>v==="no").length;return no?result(no+" jawaban Tidak: kemungkinan gangguan pendengaran.","Kemungkinan penyimpangan",[ref,"Catat hasil dalam Buku KIA, register SDIDTK, atau catatan medik anak."],{score:no,complete:true}):result("Tidak ada jawaban Tidak: sesuai umur.","Sesuai umur",normalAdvice,{score:0,complete:true});};
instruments.kmpe.interpret=function(a){if(!valid(a,14,["yes","no"]))return incomplete();const n=a.filter(v=>v==="yes").length;if(!n)return result("Tidak ada jawaban Ya: normal.","Normal",normalAdvice,{score:n,complete:true});if(n===1)return result("1 jawaban Ya: kemungkinan masalah perilaku emosional, hasil meragukan.","Meragukan",["Lakukan konseling kepada orang tua tentang intervensi dini masalah perilaku dan emosi.","Evaluasi ulang setelah 1 bulan. Jika tidak ada perubahan, rujuk ke rumah sakit rujukan tumbuh kembang atau fasilitas kesehatan jiwa."],{score:n,complete:true});return result(n+" jawaban Ya: kemungkinan masalah perilaku emosional.","Kemungkinan masalah perilaku emosional",[ref,"Lakukan konseling prarujukan. Sertakan jumlah dan jenis masalah perilaku emosional yang ditemukan."],{score:n,complete:true});};
instruments.mchat.interpret=function(a){if(!valid(a,20,["yes","no"]))return incomplete();const risk=a.map((v,i)=>[1,4,11].includes(i)?v==="yes":v==="no");const n=risk.filter(Boolean).length;const extra={score:n,maxScore:20,riskItems:risk.map((v,i)=>v?i+1:null).filter(Boolean),complete:true};if(n<=2)return result("Skor "+n+": risiko rendah gangguan spektrum autisme.","Risiko rendah",["Lanjutkan stimulasi sesuai tahapan umur, terutama kemampuan pada butir yang menghasilkan skor.","Jika umur anak kurang dari 24 bulan, lakukan skrining ulang setelah ulang tahun kedua.","Lanjutkan surveilans perkembangan dan jadwalkan kunjungan berikutnya."],extra);return result("Skor "+n+": risiko "+(n<=7?"sedang":"tinggi")+" gangguan spektrum autisme.",n<=7?"Risiko sedang":"Risiko tinggi",["Segera rujuk ke rumah sakit rujukan tumbuh kembang level 1 untuk penegakan diagnosis dan evaluasi kebutuhan intervensi awal.","Lanjutkan stimulasi sesuai umur dan kemampuan yang belum tercapai."],extra);};
instruments.actrs.interpret=function(a,c){if(!Array.isArray(a)||a.length!==11||!Array.from(a.slice(0,10)).every(v=>["0","1","2","3"].includes(String(v)))||!["yes","no"].includes(a[10]))return incomplete();const n=a.slice(0,10).reduce((s,v)=>s+Number(v),0);const extra={score:n,maxScore:30,complete:true};if(n>=13)return result("Skor "+n+": kemungkinan GPPH.","Kemungkinan GPPH",[ref,"Rujuk untuk konsultasi dan pemeriksaan lebih lanjut ke pelayanan tumbuh kembang atau fasilitas kesehatan jiwa."],extra);if(a[10]==="yes")return result("Skor "+n+" (<13), tetapi pemeriksa masih ragu.","Meragukan",["Lakukan intervensi dini masalah perilaku dan emosi.","Evaluasi ulang setelah 1 bulan. Tanyakan perilaku kepada orang tua, pengasuh, guru, dan orang terdekat lainnya.","Jika hasil evaluasi tetap meragukan, rujuk ke rumah sakit rujukan tumbuh kembang level 1."],extra);return result("Skor "+n+" (<13): normal.","Normal",normalAdvice,extra);};
instruments.pupil.interpret=function(a,c){if(!valid(a,1,["normal","right","left","both","unequal"]))return incomplete();if(a[0]==="normal")return result("Hasil pemeriksaan pupil normal sesuai metode yang dipilih.","Normal",normalAdvice,{complete:true});return result("Hasil pemeriksaan pupil abnormal atau tidak ekual; curiga kelainan pupil putih.","Curiga kelainan pupil putih",["Segera rujuk ke dokter spesialis mata atau mata anak.",ref],{complete:true});};
instruments.tdl.interpret=function(a){if(!Array.isArray(a)||a.length!==4)return incomplete();const pass=v=>["pass3","pass5"].includes(v);const fail=v=>["fail","notsee"].includes(v);const rows=[];let needsReferral=false;for(let i=0;i<4;i+=2){if(!pass(a[i])&&!fail(a[i]))return incomplete();if(pass(a[i])&&!pass(a[i+1])&&!fail(a[i+1]))return incomplete();if(fail(a[i])&&a[i+1]!=="skip")return result("Periksa kembali urutan pemeriksaan mata "+(i===0?"kanan":"kiri")+".","Data tidak konsisten",["Jika hasil kartu E 6/60 kurang, pemeriksaan E 6/12 pada mata yang sama tidak dilanjutkan. Pilih hasil sesuai pemeriksaan yang dilakukan."],{complete:false});const bad=fail(a[i])||fail(a[i+1]);needsReferral=needsReferral||bad;rows.push({eye:i===0?"Kanan":"Kiri",chart60:pass(a[i])?"Baik (>6/60)":"Kurang (<6/60)",chart12:a[i+1]==="skip"?"Tidak dilanjutkan":pass(a[i+1])?"Baik (>6/12)":"Kurang (<6/12)"});}return result(needsReferral?"Daya lihat kurang pada satu atau kedua mata.":"Daya lihat kedua mata baik pada kartu E 6/60 dan 6/12.",needsReferral?"Daya lihat kurang":"Daya lihat baik",needsReferral?["Rujuk ke dokter spesialis mata atau mata anak.",ref]:normalAdvice,{eyes:rows,complete:true});};
window.INSTRUMENTS=Object.assign(window.INSTRUMENTS||{},instruments);
})();
