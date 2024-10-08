/*

- Agradecimiento a la comunidad de "WSApp • Developers"
 * https://chat.whatsapp.com/FaQunmlp9BmDRk6lEEc9FJ
- Agradecimiento especial a Carlos (PT) por los codigos de interactiveMessage (botones)
- Agradecimiento a Darlyn1234 por la estructura de uso en este codigo y quoted
 * https://github.com/darlyn1234
- Adaptacion de imagen en tipo lista, codigo y funcionamiento por BrunoSobrino
 * https://github.com/BrunoSobrino

*/
import fetch from 'node-fetch';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let apiUrl2;
let apiUrlsz;
let device;
let dataMessage;
let enviando = false;
const handler = async (m, { command, usedPrefix, conn, text }) => {
  const datas = global;
  device = await getDevice(m.key.id);

  if (!text) throw `*[ ℹ️ ] 𝐇𝐚𝐜𝐞 𝐟𝐚𝐥𝐭𝐚 𝐞𝐥 𝐭𝐢́𝐭𝐮𝐥𝐨 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Good Feeling - Flo Rida_\n\n[ 💡 ] Ejemplo 2:* _${usedPrefix + command} https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p_`;
  if (command === 'playyt' && (device == 'desktop' || device == 'web')) throw `*[❗] Los mensajes de botones aun no estan disponibles en WhatsApp web, acceda a su celular para poder ver y usar los mensajes con botones.*`;
  if (enviando) return;
  enviando = true;

  try {
    apiUrlsz = [
      `https://api.cafirexos.com/api/ytplay?text=${text}`,
      `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}&apikey=BrunoSobrino`,
      `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytplay?text=${text}`
    ];
    const linkyt = await isValidYouTubeLink(text);
    if (linkyt) apiUrlsz = [
        `https://api.cafirexos.com/api/ytinfo?url=${text}`,
        `https://api-brunosobrino-koiy.onrender.com/api/ytinfo?url=${text}&apikey=BrunoSobrino`,
        `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytinfo?url=${text}`
    ];
    let success = false;
    for (const url of apiUrlsz) {
      try {
        const res = await fetch(url);
        data = await res.json();
        if (data.resultado && data.resultado.url) {
          success = true;
          break;
        }
      } catch {}
    }

    if (!success) {
      enviando = false;
      throw `*[ ℹ️ ] O̶c̶u̶r̶r̶i̶ó ̶u̶n ̶e̶r̶r̶o̶r. 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐢𝐧𝐭𝐞́𝐧𝐭𝐚𝐥𝐨 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨 𝐦𝐚́𝐬 𝐭𝐚𝐫𝐝𝐞.*`;
    }

    const dataMessage = `_*< DESCARGAS - PLAY V2 />*_\n\n▢ *̶T̶í̶t̶u̶l̶o:* ${data.resultado.title}\n▢ *𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨:* ${data.resultado.publicDate}\n▢ *𝐂𝐚𝐧𝐚𝐥:* ${data.resultado.channel}\n▢ *𝐕𝐢́𝐝𝐞𝐨 𝐔𝐑𝐋:* ${data.resultado.url}`.trim();  
    if (!text.includes('SN@') && command !== 'playyt') await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });      
      
    if (command === 'playyt') {
      var messa = await prepareWAMessageMedia({ image: {url: data.resultado.image}}, { upload: conn.waUploadToServer });
      let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
              message: {
                  interactiveMessage: {
                      body: { text: dataMessage },
                      footer: { text: `${global.wm}`.trim() },
                      header: {
                          hasMediaAttachment: true,
                          imageMessage: messa.imageMessage,
                      },
                      nativeFlowMessage: {
                          buttons: [
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'AUDIO',
                                      id: `${usedPrefix}play.1 ${data.resultado.url} SN@`
                                  })
                              },
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'VIDEO',
                                      id: `${usedPrefix}play.2 ${data.resultado.url} SN@`
                                  })
                              },   
                          ],
                          messageParamsJson: "",
                      },
                  },
              },
          }
      }, { userJid: conn.user.jid, quoted: m});
      await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});
      enviando = false;    
      return;
    }    

    try {
      if (command === 'play.1') {
        let apiUrls2 = [
          `https://api.cafirexos.com/api/v1/ytmp3?url=${data.resultado.url}`,
          `https://api.cafirexos.com/api/v2/ytmp3?url=${data.resultado.url}`,
          `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino.onrender.com/api/v2/ytmp3?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v1/ytmp3?url=${data.resultado.url}`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v2/ytmp3?url=${data.resultado.url}`,
        ];

        let success2 = false;
        for (const urll of apiUrls2) {
          try {
            apiUrl2 = urll;
            mimeType = 'audio/mpeg';
            fileName = 'error.mp3';
            buff = await conn.getFile(apiUrl2);
            success2 = true;
            break;
          } catch {}
        }

        if (!success2) {
          enviando = false;
          throw `[ ℹ️ ] O̶c̶u̶r̶r̶i̶ó ̶u̶n ̶e̶r̶r̶o̶r. 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐢𝐧𝐭𝐞́𝐧𝐭𝐚𝐥𝐨 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨 𝐦𝐚́𝐬 𝐭𝐚𝐫𝐝𝐞.*`;
        }
      } else if (command === 'play.2') {
        let apiUrls22 = [
          `https://api.cafirexos.com/api/v1/ytmp4?url=${data.resultado.url}`,
          `https://api.cafirexos.com/api/v2/ytmp4?url=${data.resultado.url}`,            
          `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino.onrender.com/api/v2/ytmp4?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v1/ytmp4?url=${data.resultado.url}`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v2/ytmp4?url=${data.resultado.url}`,
        ];

        let success2 = false;
        for (const urlll of apiUrls22) {
          try {
            apiUrl2 = urlll;
            mimeType = 'video/mp4';
            fileName = 'error.mp4';
            buff = await conn.getFile(apiUrl2);
            success2 = true;
            break;
          } catch (e) {
             console.log(e.message) 
          }
        }

        if (!success2) {
          enviando = false;
          throw `[ ℹ️ ] O̶c̶u̶r̶r̶i̶ó ̶u̶n ̶e̶r̶r̶o̶r. 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐢𝐧𝐭𝐞́𝐧𝐭𝐚𝐥𝐨 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨 𝐦𝐚́𝐬 𝐭𝐚𝐫𝐝𝐞.*`;
        }
      }
    } catch (ee) {
      console.log(ee.message)  
      enviando = false;
      throw `[ ℹ️ ] O̶c̶u̶r̶r̶i̶ó ̶u̶n ̶e̶r̶r̶o̶r. 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐢𝐧𝐭𝐞́𝐧𝐭𝐚𝐥𝐨 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨 𝐦𝐚́𝐬 𝐭𝐚𝐫𝐝𝐞.*`;
    }

    if (buff) {
      await conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName}, {quoted: m});
      enviando = false;
    } else {
      enviando = false;
      throw `[ ℹ️ ] O̶c̶u̶r̶r̶i̶ó ̶u̶n ̶e̶r̶r̶o̶r. 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐢𝐧𝐭𝐞́𝐧𝐭𝐚𝐥𝐨 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨 𝐦𝐚́𝐬 𝐭𝐚𝐫𝐝𝐞.*`;
    }
  } catch (error) {
    console.log(error);  
    enviando = false;
    throw '[ ℹ️ ] O̶c̶u̶r̶r̶i̶ó ̶u̶n ̶e̶r̶r̶o̶r. 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐢𝐧𝐭𝐞́𝐧𝐭𝐚𝐥𝐨 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨 𝐦𝐚́𝐬 𝐭𝐚𝐫𝐝𝐞.*';
  }
};

handler.command = ['play.1','play.2','playyt']
handler.register = true;
handler.group = true;
export default handler;

async function isValidYouTubeLink(link) {
    const validPatterns = [/youtube\.com\/watch\?v=/i, /youtube\.com\/shorts\//i, /youtu\.be\//i, /youtube\.com\/embed\//i, /youtube\.com\/v\//i, /youtube\.com\/attribution_link\?a=/i, /yt\.be\//i, /googlevideo\.com\//i, /youtube\.com\.br\//i, /youtube-nocookie\.com\//i, /youtubeeducation\.com\//i, /m\.youtube\.com\//i, /youtubei\.googleapis\.com\//i];
    return validPatterns.some(pattern => pattern.test(link));
}
