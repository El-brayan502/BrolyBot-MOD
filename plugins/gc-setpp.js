function _0x278b() {
  const _0x389b21=['tags', 'getBufferAsync', 'group', 'adm', '3729642jTtpyS', 'getHeight', 'msg', 'w:profile:picture', '*⚠️️\x20Responde\x20a\x20una\x20imagen.*', 'picture', 'command', '2VUYQTB', '12PdWAYT', '39645AizItY', 'AUTO', 'chat', 'reply', 'setppgc', 'resize', 'getWidth', '3414468AzGyTc', 'help', 'botAdmin', 'alias', '451828NOPkGW', '1051098ThEpka', '25757347CPUdpb', 'query', '8PEmlmf', 'mimetype', '293845KHONfT', '78aXsQPU', '1370rCeRwD', 'image', 'quoted', 'setppgrup', 'read', 'setppgroup']; _0x278b=function() {
    return _0x389b21;
  }; return _0x278b();
} const _0x3985f9=_0x375c; (function(_0x2cc4a5, _0x1a1581) {
  const _0x33d42c=_0x375c; const _0x3e2be4=_0x2cc4a5(); while ([]) {
    try {
      const _0x61e9dd=parseInt(_0x33d42c(0x1d1))/0x1*(-parseInt(_0x33d42c(0x1b8))/0x2)+-parseInt(_0x33d42c(0x1b9))/0x3+parseInt(_0x33d42c(0x1b4))/0x4+parseInt(_0x33d42c(0x1be))/0x5*(-parseInt(_0x33d42c(0x1bf))/0x6)+parseInt(_0x33d42c(0x1ca))/0x7*(-parseInt(_0x33d42c(0x1bc))/0x8)+-parseInt(_0x33d42c(0x1d3))/0x9*(parseInt(_0x33d42c(0x1c0))/0xa)+-parseInt(_0x33d42c(0x1ba))/0xb*(-parseInt(_0x33d42c(0x1d2))/0xc); if (_0x61e9dd===_0x1a1581) break; else _0x3e2be4['push'](_0x3e2be4['shift']());
    } catch (_0x1dbb20) {
      _0x3e2be4['push'](_0x3e2be4['shift']());
    }
  }
}(_0x278b, 0x784a8)); import _0x4f8bf3 from 'jimp'; function _0x375c(_0x106906, _0x385db3) {
  const _0x278b1a=_0x278b(); return _0x375c=function(_0x375c5d, _0x22ccb8) {
    _0x375c5d=_0x375c5d-0x1b2; const _0x435bc8=_0x278b1a[_0x375c5d]; return _0x435bc8;
  }, _0x375c(_0x106906, _0x385db3);
} const handler=async (_0x394eb8, {conn: _0x161b4f, usedPrefix: _0xab7bf7, command: _0x4fbfd8, args: _0x3db997, isOwner: _0x8d53d8, isAdmin: _0x35aa8a, isROwner: _0x48ca82})=>{
  const _0x1a6abe=_0x375c; try {
    const _0x8edba8=_0x394eb8[_0x1a6abe(0x1d5)]; const _0x3e1655=_0x394eb8['quoted']?_0x394eb8[_0x1a6abe(0x1c2)]:_0x394eb8; if (!_0x394eb8[_0x1a6abe(0x1c2)]) throw _0x1a6abe(0x1ce); const _0x88aaa1=(_0x3e1655[_0x1a6abe(0x1cc)]||_0x3e1655)[_0x1a6abe(0x1bd)]||''; const _0x3ae092=await _0x3e1655['download'](); const _0x35ce56=await _0x8edba8; async function _0x533f90(_0x56968e) {
      const _0x41c84d=_0x1a6abe; const _0x543927=await _0x4f8bf3[_0x41c84d(0x1c4)](_0x56968e); const _0x42b7c5=_0x543927[_0x41c84d(0x1b3)]()>_0x543927[_0x41c84d(0x1cb)]()?_0x543927[_0x41c84d(0x1b2)](0x2d0, _0x4f8bf3[_0x41c84d(0x1d4)]):_0x543927['resize'](_0x4f8bf3[_0x41c84d(0x1d4)], 0x2d0); const _0x115f60=await _0x4f8bf3[_0x41c84d(0x1c4)](await _0x42b7c5[_0x41c84d(0x1c7)](_0x4f8bf3['MIME_JPEG'])); return {'img': await _0x42b7c5[_0x41c84d(0x1c7)](_0x4f8bf3['MIME_JPEG'])};
    } const {img: _0x4fe079}=await _0x533f90(_0x3ae092); await _0x161b4f[_0x1a6abe(0x1bb)]({'tag': 'iq', 'attrs': {'to': _0x35ce56, 'type': 'set', 'xmlns': _0x1a6abe(0x1cd)}, 'content': [{'tag': _0x1a6abe(0x1cf), 'attrs': {'type': _0x1a6abe(0x1c1)}, 'content': _0x4fe079}]}), _0x394eb8[_0x1a6abe(0x1d6)]('⚘\x20*_Imagen\x20actualizada\x20con\x20éxito._*');
  } catch {
    throw _0x1a6abe(0x1ce);
  }
}; handler[_0x3985f9(0x1b5)]=[_0x3985f9(0x1c3)], handler[_0x3985f9(0x1c6)]=['group', _0x3985f9(0x1c9)], handler[_0x3985f9(0x1b7)]=[_0x3985f9(0x1d7), _0x3985f9(0x1c3), _0x3985f9(0x1c5)], handler[_0x3985f9(0x1d0)]=['setppgc','setppgrup','setppgroup'], handler[_0x3985f9(0x1c8)]=handler['admin']=handler[_0x3985f9(0x1b6)]=!![]; export default handler;

/* let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw '*⚠️️ Responde a una imagen.*'
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('⚘ *_Imagen actualizada con éxito._*'))
} else throw '*⚠️️ Responde a una imagen.*'}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler*/
