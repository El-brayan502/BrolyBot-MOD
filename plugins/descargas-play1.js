case 'play': {
const yts = require("youtube-yts");
if (!text) return m.reply(`*🚩 Ejemplo:*\n${prefix + command} ozuna`) 
m.reply(`🚀 Calma negro ya voy con tu perdidos`) 
m.react("⌛"); //Si no tiene definidos la reacción pon un //m.react("⌛") 
const videoSearch = await yts(text);
if (!videoSearch.all.length) {
return m.react("❌");
}
const vid = videoSearch.all[0];
const videoUrl = vid.url;
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();

if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;

//Descarga audios
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });

//Para descargar video usar :
conn.sendMessage(m.chat, { video: { url: downloadUrl }, caption: `↻ ◁ II ▷ ↺`}, {quoted: m})

m.react("✅")}
break