import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botnumber = '' //Ejemplo: +50231458537
global.confirmCode = ''

//• ↳𝑺𝑶𝑳𝑶 𝑫𝑬𝑺𝑨𝑹𝑹𝑶𝑳𝑳𝑨𝑫𝑶𝑹𝑬𝑺 𝑨𝑷𝑹𝑶𝑩𝑨𝑫𝑶𝑺
global.owner = [
  ['50231458537', '𝗘𝗹•𝗕𝗥𝗔𝗬𝗔𝗡', true],
  ['59168182482', '𝗘𝗺𝗶𝗹𝘆💫', true],
  ['50582340051'],
  ['79278122217'],
  ['50248019799'],
  ['5218711426787'],
  ['5217774603921'],
  ['50492280729']
];

//• ↳𝑺𝑶𝑳𝑶 𝑴𝑶𝑫𝑬𝑹𝑨𝑫𝑶𝑹𝑬𝑺!
global.mods = ['50231458537', '5218711426787', '', '', '']

global.suittag = ['5351524614']
global.prems = []

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = true
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '3.0.3'
global.languaje = 'Español'
global.nameqr = 'BrolyBot-MD'
global.sessions = 'BrolySession'
global.jadi = 'BrolyJadiBot'

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 🐲
global.packsticker = `♾ ━━━━━━━━\n├ 𝑩𝑶𝑻:\n├ 𝑷𝑹𝑶𝑷𝑹𝑬𝑻𝑨𝑹𝑰𝑶:\n├ 𝑭𝑬𝑪𝑯𝑨  𝑨𝑬𝑨𝑪𝑰𝑶𝑵:\n├ 𝑯𝑶𝑹𝑨:\n♾━━━━━━━━`
global.packname = `🐉𝘽𝙧𝙤𝙡𝙮𝘽𝙤𝙩-𝙈𝘿`
global.author = `♾━━━━━━━━\n⇝͟͞ ۵̤͟𝑩𝑹𝑶𝑳𝒀𝑩𝑶𝑻-𝑴𝑶𝑫𝑺̈♡̵̑ ͟͞   ᷨᜳ ͦ ̵ͭ⋆\n⇝ ۵-̱̅𝙀𝙡•𝙗𝙧𝙖𝙮𝙖𝙣𝙮𝙩-͞ˍ\n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n♾━━━━━━━━\n\n\n\n𝙎𝙏𝙄𝙆𝙀𝙍 𝘽𝙔: ৎ୭࠭͢𝘽𝙍𝙊𝙇𝙔-𝘽𝙊𝙏-𝙈𝘿ⷭ𓆪͟͞ `;
global.wm = '𝘽𝙍𝙊𝙇𝙔-𝘽𝙊𝙏-𝙈𝘿';
global.titulowm = '𝐵𝑅𝑂𝐿𝑌-𝐵𝑂𝑇-𝑀𝑂𝐷𝑆';
global.titulowm2 = `𝐁𝐑𝐎𝐋𝐘𝐁𝐎𝐓-𝐌𝐃`
global.igfg = '𝘽𝙍𝙊𝙇𝙔 𝘽𝙔 𝘽𝙍𝘼𝙔𝘼𝙉𝙔𝙏'
global.botname = '𝘽𝙍𝙊𝙇𝙔-𝘽𝙊𝙏-𝙈𝘿'
global.dev = '𝑩𝒓𝒐𝒍𝒚𝑩𝒐𝒕-𝑴𝑫\nhttps://chat.whatsapp.com/BoaRPJlKLnN4Ay3ebSTaDi'
global.textbot = '𝑩𝑹𝑶𝑳𝒀 𝑩𝑶𝑻 𝑴𝑫 : ᥫᩣ𝑩𝑹𝑨𝒀𝑨𝑵'
global.gt = '𝐵𝑅𝑂𝐿𝑌-𝐵𝑂𝑇-𝑀𝑂𝐷𝑆';
global.namechannel = '𝐁𝐑𝐎𝐋𝐘 𝐁𝐎𝐓 𝐌𝐃/ᥫᩣ𝐁𝐑𝐀𝐘𝐀𝐍'


//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 📥
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/anime.jpg');
global.imagen3 = fs.readFileSync('./Menu3.jpg');
global.imagen4 = fs.readFileSync('./Menu.jpg');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.jpg');
global.imagen7 = fs.readFileSync('./Menu5.jpg');
global.imagen8 = fs.readFileSync('./Menu4.jpg')
global.imagen9 = fs.readFileSync('./src/menu_en.png')
global.imagen10 = fs.readFileSync('./src/nuevobot.jpg')
global.que = fs.readFileSync('./src/ke/que1.jpg')
global.que2 = fs.readFileSync('./src/ke/que2.jpg')
global.que3 = fs.readFileSync('./src/ke/que3.jpg')
global.que4 = fs.readFileSync('./src/ke/que4.jpg')
global.que5 = fs.readFileSync('./src/ke/que5.jpg')
global.que6 = fs.readFileSync('./src/ke/que6.jpg')
global.amor = fs.readFileSync('./src/amor/amor1.webp')
global.amor2 = fs.readFileSync('./src/amor/amor2.webp')
global.amor3 = fs.readFileSync('./src/amor/amor3.webp')
global.amor4 = fs.readFileSync('./src/amor/amor4.webp')
global.amor5 = fs.readFileSync('./src/amor/amor5.webp')
global.miniurl = fs.readFileSync('./src/Grupo.jpg');
global.logo2 = fs.readFileSync('./src/logo2.jpg')
global.logo3 = fs.readFileSync('./src/logo3.jpg')
global.catalogo = fs.readFileSync('./src/logo6.png')
global.logo4 = fs.readFileSync('./src/logo4.jpg')
global.logo5 = fs.readFileSync('./src/logo5.jpg')
global.logo7 = fs.readFileSync('./src/Logo7.png')
global.logo8 = fs.readFileSync('./src/Logo8.jpg')
global.rule = fs.readFileSync('./src/rule.jpg')
global.welcome = fs.readFileSync('./media/Welcome.jpg')
global.adios = fs.readFileSync('./media/Bye.jpg')

global.stickeramor = [amor, amor2, amor3, amor4, amor5]
global.sickerque = [que, que2, que3, que4, que5, que6]
global.photoSity = [imagen8, imagen1, imagen4, imagen6]

//• ↳ ◜𝑭𝑨𝑲𝑬 𝑬𝑺𝑻𝑰𝑳𝑶◞ • 🪩
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50231458537-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝐁𝐑𝐎𝐋𝐘𝐁𝐎𝐓-𝐌𝐃', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50231458537-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐁𝐑𝐎𝐋𝐘𝐁𝐎𝐓-𝐌𝐃', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𖥔.𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨❞ ꔷ──᜔◇⃟̣̣⃕🐲', jpegThumbnail: logo5 }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐁𝐑𝐎𝐋𝐘𝐁𝐎𝐓-𝐌𝐃', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𝐓𝐨𝐧𝐭𝐨 (￣へ ￣ ) 🔥', jpegThumbnail: logo3 }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐁𝐑𝐎𝐋𝐘𝐁𝐎𝐓-𝐌𝐃', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𝐒𝐭𝐢𝐜𝐤𝐞𝐫 (^_^♪) 💥', jpegThumbnail: logo5 }}};

global.fgif2 = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`͟͞ 𓆩ꪶꪾ𝘿᪶𝙞ᷨ𝙖ᷞ𝙢ͣ𝙤᪶ͨ𝙣ᷜ𝙙ꫂৎ୭࠱࠭ ͟͞`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `⏤͟͞ू⃪ ፝͜⁞𝐁𝐑𝐎𝐋𝐘𝐁𝐎𝐓-𝐌𝐃✰⃔࿐\n  ͟͞ 𓆩ꪶꪾ𝘿᪶𝙞ᷨ𝙖ᷞ𝙢ͣ𝙤᪶ͨ𝙣ᷜ𝙙ꫂৎ୭࠱࠭ ͟͞`, 'jpegThumbnail': logo4 }}}

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🏆
global.gp4 = 'https://chat.whatsapp.com/BoaRPJlKLnN4Ay3ebSTaDi' //Grupo Oficial De BrolyBot-MD 
global.gp1 = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno' //Grupo 
global.gp2 = 'https://chat.whatsapp.com/BoaRPJlKLnN4Ay3ebSTaDi'//
global.comunidad1 = 'https://chat.whatsapp.com/BoaRPJlKLnN4Ay3ebSTaDi' //Comunidad BrolyBot-MD 
global.channel = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W' //Canal Oficial
global.yt = 'https://youtube.com/@davidchian4957' //Canal De Youtube
global.md = 'https://github.com/El-brayan502/Broly-bot-MD' //Github Oficial
global.correo = 'brayanphonkponk@gmail.com'
global.cn ='https://chat.whatsapp.com/BoaRPJlKLnN4Ay3ebSTaDi';

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🐲' + hour;

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363312092804854@newsletter", serverMessageId: 100, newsletterName: namechannel, }, }, }
//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nBroly - Bot`;
global.nomorown = '50231458537';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.jpg')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

//• ↳ ◜𝑨𝑷𝑰𝑺 𝑭𝑼𝑵𝑪𝑰𝑶𝑵◞ 👑
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDiosV2']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

/** ************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🧬 Nivel',
      cookies: '🍪 Cookies',
      exp: '⚡ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
      kyubi: '🌀 Magia',
      joincount: '💰 Token',
      emerald: '💚 Esmeralda',
      stamina: '✨ Energía',
      role: '💪 Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp',
      gold: '👑 Oro',
      trash: '🗑 Basura',
      crystal: '🔮 Cristal',
      intelligence: '🧠 Inteligencia',
      string: '🕸️ Cuerda',
      keygold: '🔑 Llave de Oro',
      keyiron: '🗝️ Llave de Hierro',
      emas: '🪅 Piñata',
      fishingrod: '🎣 Caña de Pescar',
      gems: '🍀 Gemas',
      magicwand: '⚕️ Varita Mágica',
      mana: '🪄 Hechizo',
      agility: '🤸‍♂️ Agilidad',
      darkcrystal: '♠️ Cristal Oscuro',
      iron: '⛓️ Hierro',
      rock: '🪨 Roca',
      potion: '🥤 Poción',
      superior: '💼 Superior',
      robo: '🚔 Robo',
      upgrader: '🧰 Aumentar Mejora',
      wood: '🪵 Madera',
      strength: '🦹‍ ♀️ Fuerza',
      arc: '🏹 Arco',
      armor: '🥼 Armadura',
      bow: '🏹 Super Arco',
      pickaxe: '⛏️ Pico',
      sword: '⚔️ Espada',
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítico',
      legendary: '🎁 Caja Legendaria',
      petFood: '🍖 Alimento para Mascota',
      pet: '🍱 Caja para Mascota',
      bibitanggur: '🍇 Semilla de Uva',
      bibitapel: '🍎 Semilla de Manzana',
      bibitjeruk: '🍊 Semillas de naranja',
      bibitmangga: '🥭 Semilla de Mango',
      bibitpisang: '🍌 Semillas de Plátano',
      ayam: '🐓 Pollo',
      babi: '🐖 Puerco',
      Jabali: '🐗 Jabali',
      bull: '🐃 Toro',
      buaya: '🐊 Cocodrilo',
      cat: '🐈 Gato',
      centaur: '🐐 Centauro',
      chicken: '🐓 Pollo',
      cow: '🐄 Vaca',
      dog: '🐕 Perro',
      dragon: '🐉 Dragón',
      elephant: '🐘 Elefante',
      fox: '🦊 Zorro',
      giraffe: '🦒 Jirafa',
      griffin: '🦅 Ave',
      horse: '🐎 Caballo',
      kambing: '🐐 Cabra',
      kerbau: '🐃 Búfalo',
      lion: '🦁 León',
      money: '❤️‍🔥 MeguCoins',
      monyet: '🐒 Mono',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente',
      phonix: '🕊️ Fénix',
      rhinoceros: '🦏 Rinoceronte',
      wolf: '🐺 Lobo',
      tiger: '🐅 Tigre',
      cumi: '🦑 Calamar',
      udang: '🦐 Camarón',
      ikan: '🐟 Pez',
      fideos: '🍝 Fideos',
      ramuan: '🧪 Ingrediente NOVA',
      knife: '🔪 Cuchillo',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { // Solo emojis
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: '🧬',
      cookies: '🍪',
      exp: '⚡',
      bank: '🏦',
      diamond: '💎+',
      health: '❤️',
      kyubi: '🌀',
      joincount: '💰',
      emerald: '💚',
      stamina: '✨',
      role: '💪',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      trash: '🗑',
      crystal: '🔮',
      intelligence: '🧠',
      string: '🕸️',
      keygold: '🔑',
      keyiron: '🗝️',
      emas: '🪅',
      fishingrod: '🎣',
      gems: '🍀',
      magicwand: '⚕️',
      mana: '🪄',
      agility: '🤸‍♂️',
      darkcrystal: '♠️',
      iron: '⛓️',
      rock: '🪨',
      potion: '🥤',
      superior: '💼',
      robo: '🚔',
      upgrader: '🧰',
      wood: '🪵',
      strength: '🦹‍ ♀️',
      arc: '🏹',
      armor: '🥼',
      bow: '🏹',
      pickaxe: '⛏️',
      sword: '⚔️',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      legendary: '🎁',
      petFood: '🍖',
      pet: '🍱',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      ayam: '🐓',
      babi: '🐖',
      Jabali: '🐗',
      bull: '🐃',
      buaya: '🐊',
      cat: '🐈',
      centaur: '🐐',
      chicken: '🐓',
      cow: '🐄',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      fox: '🦊',
      giraffe: '🦒',
      griffin: '🦅',
      horse: '🐎',
      kambing: '🐐',
      kerbau: '🐃',
      lion: '🦁',
      money: '❤️‍🔥',
      monyet: '🐒',
      panda: '🐼',
      snake: '🐍',
      phonix: '🕊️',
      rhinoceros: '🦏',
      wolf: '🐺',
      tiger: '🐅',
      cumi: '🦑',
      udang: '🦐',
      ikan: '🐟',
      fideos: '🍝',
      ramuan: '🧪',
      knife: '🔪',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};
global.rpgshop = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emottt = {
      exp: '⚡ Experiencia',
      cookies: '🍪 Cookies',
      diamond: '💎 Diamante',
      joincount: '💰 Token',
      emerald: '💚 Esmeralda',
      berlian: '♦️ Joya',
      kyubi: '🌀 Magia',
      gold: '👑 Oro',
      money: '❤️‍🔥 MeguCoins',
      tiketcoin: '🎫 Megu Tickers',
      stamina: '✨ Energía',
      potion: '🥤 Poción',
      aqua: '💧 Agua',
      trash: '🗑 Basura',
      wood: '🪵 Madera',
      rock: '🪨 Roca',
      batu: '🥌 Piedra',
      string: '🕸️ Cuerda',
      iron: '⛓️ Hierro',
      coal: '⚱️ Carbón',
      botol: '🍶 Botella',
      kaleng: '🥫 Lata',
      kardus: '🪧 Cartón',
      eleksirb: '💡 Electricidad',
      emasbatang: '〽️ Barra de Oro',
      emasbiasa: '🧭 Oro Común',
      rubah: '🦊🌫️ Zorro Grande',
      sampah: '🗑🌫️ Super Basura',
      serigala: '🐺🌫️ Super Lobo',
      kayu: '🛷 Super Madera',
      sword: '⚔️ Espada',
      umpan: '🪱 Carnada',
      healtmonster: '💵 Billetes',
      emas: '🪅 Piñata',
      pancingan: '🪝 Gancho',
      pancing: '🎣 Caña de Pescar',
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítica',
      pet: '📫 Caja de Mascotas', // ?
      gardenboxs: '💐 Caja de Jardinería', // ?
      legendary: '🎁 Caja Legendaria',
      anggur: '🍇 Uva',
      apel: '🍎 Manzana',
      jeruk: '🍊 Naranja',
      mangga: '🥭 Mango',
      pisang: '🍌 Platano',
      bibitanggur: '🌾🍇 Semillas de uva',
      bibitapel: '🌾🍎 Semillas de manzana',
      bibitjeruk: '🌾🍊 Semillas de naranja',
      bibitmangga: '🌾🥭 Semillas de Mango',
      bibitpisang: '🌾🍌 Semillas de plátano',
      centaur: '🐐 Centauro',
      griffin: '🦅 Ave',
      kucing: '🐈 Gato',
      naga: '🐉 Dragón',
      fox: '🦊 Zorro',
      kuda: '🐎 Caballo',
      phonix: '🕊️ Fénix',
      wolf: '🐺 Lobo',
      anjing: '🐶 Perro',
      petFood: '🍖 Alimento para Mascota', // ?
      makanancentaur: '🐐🥩 Comida de Centauro',
      makanangriffin: '🦅🥩 Comida de Ave',
      makanankyubi: '🌀🥩 Comida Mágica',
      makanannaga: '🐉🥩 Comida de Dragón',
      makananpet: '🍱🥩 Alimentos de mascotas',
      makananphonix: '🕊️🥩 Comida de Fénix',
    };
    const results = Object.keys(emottt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }};
global.rpgshopp = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emotttt = {
      exp: '⚡',
      cookies: '🍪',
      diamond: '💎+',
      joincount: '💰',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '❤️‍🔥',
      tiketcoin: '🎫',
      stamina: '✨',
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱',
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫', // ?
      gardenboxs: '💐', // ?
      legendary: '🎁',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      petFood: '🍖', // ?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩',
    };
    const results = Object.keys(emotttt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }};

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
