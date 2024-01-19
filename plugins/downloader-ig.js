import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(args[0])) throw m.reply(`Use example ${usedPrefix}${command} link`);
    await m.reply(`Ｌｏａｄｉｎｇ．．．`);
    
    try {
        let response = await fetch(`https://vihangayt.me/download/instagram2?url=${args[0]}`);
        let data = await response.json();
        
        if (data.status) {
            await conn.sendMessage(m.chat, { video: { url: data.data[0].download_link } }, m);
        } else {
            throw new Error('Error in response data');
        }
    } catch (error) {
        console.error('Error:', error.message);
        m.reply('Failed to fetch Instagram data. Please try again later.');
    }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?|insta|instagram(dl)?)$/i

export default handler;
