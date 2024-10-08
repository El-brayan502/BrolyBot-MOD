import fetch from 'node-fetch'
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un repositorio de github*\n\nEjemplo, ${usedPrefix + command} Ai-Yaemori`, m, rcanal)
try {
await m.react(rwait)
const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
q: text,
}))
const json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
❏ *Resultado:* ${1 + index}
❏ *Enlace:* ${repo.html_url}
❏ *Creador:* ${repo.owner.login}
❏ *Nombre:* ${repo.name}
❏ *Creado:* ${formatDate(repo.created_at)}
❏ *Actualizado:* ${formatDate(repo.updated_at)}
❏ *Visitas:* ${repo.watchers}
❏ *Bifurcado:* ${repo.forks}
❏ *Estrellas:* ${repo.stargazers_count}
❏ *Issues:* ${repo.open_issues}
❏ *Descripción:* ${repo.description ? `${repo.description}` : 'Sin Descripción'}
❏ *Clone:* ${repo.clone_url}
`.trim()}).join('\n\n─────────────────\n\n') 
// await m.react(done)
let img = await (await fetch(json.items[0].owner.avatar_url)).buffer()
await conn.sendMini(m.chat, '🐉 G I T H U B - S E A R C H 🐉', dev, str, img, img, redes, estilo)
await m.react(done)
} catch {
await m.react(error)
conn.reply(m.chat, '🐲 *No se encontró resultados de:* ' + text, m, fake)}}
handler.help = ['githubsearch']
handler.tags = ['buscador']
handler.command = ['githubsearch']

handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
const d = new Date(n)
return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}

/*import MessageType from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import fs from 'fs'

var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un repositorio de github*\n\nEjemplo, ${usedPrefix + command} Ai-Yaemori`, m, rcanal)

try {

let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }))
let json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
🍟 *Resultado:* ${1 + index}
🔗 *Enlace:* ${repo.html_url}
👑 *Creador:* ${repo.owner.login}
🍟 *Nombre:* ${repo.name}
🫂 *Creado:* ${formatDate(repo.created_at)}
💥 *Actualizado:* ${formatDate(repo.updated_at)}
👀 *Visitas:* ${repo.watchers}
✨️ *Bifurcado:* ${repo.forks}
🌟 *Estrellas:* ${repo.stargazers_count}
🍂 *Issues:* ${repo.open_issues}
🍭 *Descripción:* ${repo.description ? `${repo.description}` : 'Sin Descripción'}
⭐️ *Clone:* ${repo.clone_url}
`.trim()}).join('\n\n─────────────────\n\n')

let img = await (await fetch(json.items[0].owner.avatar_url)).buffer()
await conn.sendUrl(m.chat, str, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: img, thumbnailUrl: img, title: 'Resultados Encontrados 🔎',
}
})

} catch {
conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake)
}

}
handler.help = ['githubsearch']
handler.tags = ['buscador']
handler.command = /^(githubsearch)$/i

handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric'
}) }*/