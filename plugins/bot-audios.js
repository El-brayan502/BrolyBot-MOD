
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
'Blackpink in your area': 'https://qu.ax/pavq.mp3',
'Buen día grupo': 'https://qu.ax/GoKq.mp3',
'Corte Corte': 'https://qu.ax/hRuU.mp3',
'Las reglas del grupo': 'https://qu.ax/fwek.mp3',
'Eres Fuerte': 'https://qu.ax/lhzq.mp3',
'En caso de una investigación': 'https://qu.ax/Syg.mp3',
'El Toxico': 'https://qu.ax/WzBd.mp3',
'Muchachos': 'https://qu.ax/dRVb.mp3',
'Nico Nico': 'https://qu.ax/OUyB.mp3',
'No Rompas más': 'https://qu.ax/ZkAp.mp3',
'Porque ta tite': 'https://qu.ax/VrjA.mp3',
'hola': 'https://qu.ax/eGdW.mp3',
'Me voy': 'https://qu.ax/iOky.mp3',
'Potaxio': 'https://qu.ax/vPoj.mp3',
'Que tal Grupo': 'https://qu.ax/lirF.mp3',
'Se están riendo de mí': 'https://qu.ax/XBXo.mp3',
'Su nivel de pendejo': 'https://qu.ax/SUHo.mp3',    
'Pendejo': 'https://qu.ax/SUHo.mp3',
'Pendejó': 'https://qu.ax/SUHo.mp3',
'tal vez': 'https://qu.ax/QMjH.mp3',
'Ok': 'https://qu.ax/QMjH.mp3'
'Te gusta el Pepino': 'https://qu.ax/ddrn.mp3', 
'Pene': 'https://qu.ax/ddrn.mp3'
'Todo bien': 'https://qu.ax/EDUC.mp3',
'Traigan le una falda': 'https://qu.ax/fnTL.mp3',
'Niña': 'https://qu.ax/fnTL.mp3',
'Y este quien es': 'https://qu.ax/QnET.mp3',
'Quien eres': 'https://qu.ax/QnET.mp3',
'Fototeta': 'https://qu.ax/CUmZ.mp3',
'Goku pervertido': 'https://qu.ax/CUmZ.mp3',   
'': ' ', 
' ': ' ',
' ': ' ',
  '@5491168352204|@50231458537': 'https://l.top4top.io/m_2492i4mdu1.mp3'
}