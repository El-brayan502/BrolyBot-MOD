import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/cUYg.mp3';
  let vn2 = 'https://qu.ax/iOky.mp3';
  let welc = welcome;
  let adi = adios;
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, {
      audio: { url: vn },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "thumbnail": welc,
          "title": "  ͟͞ 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶 ͟͞  ",
          "body": `${userName}!`,
          "previewType": "PHOTO",
          "thumbnailUrl": null,
          "showAdAttribution": true,
          sourceUrl: [yt, md, channel].sort(() => 0.5 - Math.random())[0]
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'welcome.mp3'
    }, { quoted: fkontak });
  }

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, {
      audio: { url: vn2 },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
        "thumbnail": adi,
        "title": '  ͟͞ 𝑼𝑵 𝑷𝑼𝑻𝑶 𝑴𝑬𝑵𝑶𝑺 ͟͞  ',
        "body": `${userName}, se despide.`,
        "previewType": "PHOTO",
          "showAdAttribution": true,
          "containsAutoReply": true,
         "thumbnailUrl": null,
          "showAdAttribution": true,
          "sourceUrl": redes
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'bye.mp3'
    }, { quoted: fkontak });
  }
}