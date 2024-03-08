import fetch from "node-fetch"

let handler = async (m, {
    conn,
    usedPrefix,
    args,
    command
}) => {
    let query = "Where is the link? The link you want to convert to pdf!\n Example :\n .urltopdf https://github.com/whiteshadowofficial/Jessi-md"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    await m.reply(wait)

    if (!isValidURL(text)) return m.reply("*The link is not available or is not transferable. Try again with another link*")
    try {
        let gas = "https://api.html2pdf.app/v1/generate?url=" + text + "&apiKey=DzhGk9fhdPope6j8PmVmbxoNDDiWbsFpdeKZfMMrrxtsl3pXCRbfYOd7N4HovaJ1"
        await conn.sendFile(m.chat, gas, m.name, text, m)
    } catch (e) {
        await m.reply('error')
    }
}
handler.tags = ["pdf"]
handler.command = handler.help = ["urltopdf"]
export default handler

function isValidURL(message) {
    const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/;
    return urlPattern.test(message);
}
