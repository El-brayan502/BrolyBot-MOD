
let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'fino señores': './src/mp3/fino.mp3',
  'buenos días': 'https://k.top4top.io/m_2826iqdri1.mp3',
  'buenas tardes': 'https://b.top4top.io/m_2826v2zg51.mp3',
  'buenas noches': 'https://i.top4top.io/m_2826o8rfj1.mp3',
  'sad': 'https://h.top4top.io/m_2826mcim21.mp3',
    'Motivación': 'https://qu.ax/MXnK.mp3',
    'Uwu': 'https://qu.ax/lOCR.mp3',
    'fiesta viernes': 'https://qu.ax/wqXs.mp3',
    'un Pato': 'https://qu.ax/pmOm.mp3',
    'Estoy triste': 'https://qu.ax/QSyP.mp3',
    'Bueno master': 'https://qu.ax/xynz.mp3',
    'ara ara': 'https://qu.ax/PPgt.mp3', 
'Tengo los calzones': 'https://qu.ax/pzRp.mp3',
'Calla Fan de bts': 'https://qu.ax/oqNf.mp3',
    'hola': 'https://qu.ax/oqNf.mp3',
'Xd': 'https://qu.ax/MWJz.mp3',
'Que': 'https://qu.ax/MWJz.mp3',
'Mmm': 'https://qu.ax/YsLt.mp3',
    'Bro': 'https://qu.ax/PPgt.mp3', 
  '@5491168352204|@50231458537': 'https://l.top4top.io/m_2492i4mdu1.mp3'
}