import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
            if (!text) return m.reply("This is for searching for topics in Wikipedia. We write like this\n*.wiki Justice*")
            await m.reply(wait)
            try {
                let item = await Wiki(text)
                let cap = `🔍 *[ RESULT ]*

📌 *:* ${item[0].judul}
📋 *:* ${item[0].wiki}
`
                await conn.sendFile(m.chat, item[0].thumb || logo, "", cap, m)
                
            } catch (e) {
                await m.reply('error')
            }
}
handler.help = ["wiki"]
handler.tags = ["search"]
handler.command = /^(wiki)$/i
export default handler

/* New Line */
async function Wiki(query) {
  const res = await fetch(`https://en.m.wikipedia.org/w/index.php?search=${query}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  const wiki = $('#mf-section-0').find('p').text();
  const thumb = $('#mf-section-0').find('div > div > a > img').attr('src') || '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png';
  const judul = $('h1#section_0').text();
  return [{ wiki, thumb: `https:${thumb}`, judul }];
}
