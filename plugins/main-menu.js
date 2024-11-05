import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': '𝙄𝙉𝙁𝙊×𝘽𝙊𝙏',
  'buscador': '𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍𝙀𝙎',
  'fun': '𝙅𝙐𝙀𝙂𝙊𝙎',
  'rollwaifu': '𝙍𝙊𝙇𝙇𝙒𝘼𝙄𝙁𝙐',
  'citaboom': '𝘾𝙄𝙏𝘼𝘽𝙊𝙊𝙈',  
  'jadibot': '𝙎𝙀𝙍𝘽𝙊𝙏',
  'rpg': '×𝙋×𝙋×𝙂×',
  'rg': '𝗥𝗘𝗝𝗜𝗦𝗧𝗥𝗢',
  'xp': '×𝗘×𝗫×𝗣×',
  'sticker': '𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦',
  'anime': '𝗔𝗡𝗜𝗠𝗘𝗦',
  'database': '𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘',
  'fix': '𝗙𝗜𝗫𝗠𝗘𝗡𝗦𝗔𝗝𝗘',
  'grupo': '𝗚𝗥𝗨𝗣𝗢𝗦',
  'nable': '𝗢𝗡 / 𝗢𝗙𝗙', 
  'descargas': '𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦',
  'youtube': '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
  'tools': '𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦',
  'info': '𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡',
  'nsfw': '𝗡𝗦𝗙𝗪', 
  'owner': '𝗖𝗥𝗘𝗔𝗗𝗢𝗥', 
  'mods': '𝗦𝗧𝗔𝗙𝗙 𝗕𝗥𝗢𝗟𝗬𝗕𝗢𝗧',
  'audio': '𝗔𝗨𝗗𝗜𝗢𝗦', 
  'ai': '×𝗔×𝗜×',
  'transformador': '𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦',
}

const defaultMenu = {
  before: `*├┈‧͙⁺˚*･༓☾　®　☽༓･*˚⁺‧͙ * 
*┃*  🐲𝙷𝙾𝙻𝙰, *%name* 🐲*• 
*┣* 
*┣*  %greeting* 
*┣* 
*┣* *𝙾𝚆𝙽𝙴𝚁:* §ȟåď¤Ψ-£ďȋț§
*┣ׁ* *𝙼𝙾𝙳𝙾':* Público
*┣* *𝙱𝙰𝚈𝙻𝙴𝚈𝚂:* Multi Device
*┣* *𝙰𝙲𝚃𝙸𝚅𝙾:* %muptime
*┣* *𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂:* %totalreg 
*╘━ꥇ۬═══════•| ✿ |•══════╝* 
%readmore
┏━━━━━━━━━━━━━━━━━━━━┓
┃ ◉— ɪɴғᴏ ᴜsᴜᴀʀɪᴏ  —◉
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣⟣☯︎ *𝙲𝙻𝙸𝙴𝙽𝚃𝙴:* %name
┣⟣☯︎ *𝙴𝚇𝙿:* %exp
┣⟣☯︎ *𝙴𝚂𝚃𝚁𝙴𝙻𝙻𝙰𝚂:* %estrellas
┣⟣☯︎ *𝙽𝙸𝚅𝙴𝙻:* %level
┣⟣☯︎ *𝚁𝙰𝙽𝙶𝙾:* %role
┗━━━━━━━━━━━━━━━━━━━━┛
%readmore
∧ ,,, ∧
(̳ • · ̫ • ̳)𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰 𝙳𝙴𝙻 𝙱𝙾𝚃
➷ ׂׂૢ∪∪ ⁀➷ ׂׂૢ ೃ⁀➷ ׂׂૢ ೃ⁀➷ ׂׂૢ 
°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•

\t*𝗟𝗜𝗦𝗧𝗔𝗦 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦᯾* 
`.trimStart(),
      header: '╭╼✯ۣۜ  *%category* ⊱⸙⊰',
  body: '┃֪࣪ ├ׁ̟̇𖠵⃕⁖ %cmd\n',
  footer: '┃֪࣪ ╰─✹╌═⊱𖧷⊰✧⊱✹⊰═╌𖧷╌╯\n╚▭࣪▬ִ▭࣪▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭ ⛧',
  after: `> ${dev}`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, estrellas, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        estrellas: plugin.estrellas,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? '🐲 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙱𝙾𝚃 𝙾𝙵𝙲' : `🐲 𝚂𝚄𝙱-𝙱𝙾𝚃 𝙳𝙴: Wa.me/${global.conn.user.jid.split`@`[0]}`), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, estrellas, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

const pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

  let category = "video"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  global.vid = rlink
  const response = await fetch(vid)
  const gif = await response.buffer()
 // const img = imagen1

await conn.reply(m.chat, '🐉 𝗘𝗡𝗩𝗜𝗔𝗡𝗗𝗢 𝗘𝗟 𝗠𝗘𝗡𝗨\n  > 𝘕𝘖 𝘏𝘈𝘎𝘈𝘚 𝘚𝘗𝘈𝘔 𝘋𝘌 𝘊𝘖𝘔𝘈𝘕𝘋𝘖𝘚\n > 𝘚𝘐 𝘛𝘐𝘌𝘕𝘌 𝘜𝘕 𝘌𝘙𝘙𝘖𝘙 𝘊𝘖𝘕 𝘓𝘖𝘚 𝘊𝘖𝘔𝘈𝘕𝘋𝘖𝘚 𝘏𝘈𝘉𝘓𝘌 𝘊𝘖𝘕 𝘔𝘐 𝘊𝘙𝘌𝘈𝘋𝘖𝘙 𝘗𝘖𝘕𝘎𝘈 .𝘰𝘸𝘯𝘦𝘳۪', m, { contextInfo:{ forwardingScore: 2024, isForwarded: true, externalAdReply: {title: namechannel, body: dev, sourceUrl: channel, thumbnail: icons }}})

// await conn.reply(m.chat, '🐲 Enviando el menú.....', m, rcanal)

await m.react('🐉') 

//await conn.sendFile(m.chat, imagen1, 'yaemori.jpg', text.trim(), fkontak, null, rcanal)

await conn.sendMessage(
  m.chat,
  { video: { url: vid }, caption: text.trim(),
  contextInfo: {
    mentionedJid: [m.sender],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363312092804854@newsletter',
      newsletterName: '🐉𝙱𝚁𝙾𝙻𝚈 𝙱𝙾𝚃 - 𝙼𝙳🐉',
      serverMessageId: -1,
    },
    forwardingScore: 999,
    externalAdReply: {
      title: '💥𝙱𝚁𝙾𝙻𝚈-𝙱𝙾𝚃-𝙼𝙳💥',
      body: dev,
      thumbnailUrl: icono,
      sourceUrl: redes,
      mediaType: 1,
      renderLargerThumbnail: false,
    },
  },

  gifPlayback: true, gifAttribution: 0 },
  { quoted: fkontak })

  } catch (e) {
    conn.reply(m.chat, '🔵 Lo sentimos, el menú tiene un error', m, rcanal, )
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'menuall', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;
