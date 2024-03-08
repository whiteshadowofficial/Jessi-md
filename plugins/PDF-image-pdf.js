import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*This is for converting an image to a PDF*\n*Please indicate the image you want to convert to PDF and then write*\n.topdf\n'    
let img = await q.download?.()
let url = await uploadImage(img)    
let docname = text ? text : m.pushName || '💌 Jessi-md'
conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=GataDios&img=${url}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.help = ["topdf"]
handler.tags = ["pdf"]
handler.command = /^(topdf)$/i
export default handler
