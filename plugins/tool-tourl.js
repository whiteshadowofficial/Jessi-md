import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = `> 𝗟𝗶𝗻𝗸 :
${link}
> 𝗦𝗶𝘇𝗲 : ${media.length} Byte
> 𝗘𝘅𝗽𝗶𝗿𝗲 : ${isTele ? 'No Expiry Date' : 'Unknown'}

> 𝗦𝗵𝗼𝗿𝘁 : ${await shortUrl(link)}`

conn.reply(m.chat, caption, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: pp,
    mediaType: 2,
    title: await shortUrl(link),
    body: botdate,
    thumbnail: await(await fetch(link)).buffer(),
    sourceUrl: link
     }}
  })
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
