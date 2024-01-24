import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat];
  if (!chat.nsfw)
    throw `*You Can't Use 18+ Commands In This Group.💥*\n\n*Cantact Bot Owner To Enabled 18+ Commands.Type .owner To Get Owner Number.*\n*Or You Can Use 18+ Commands In Our Public Group ✅*\n\nhttps://chat.whatsapp.com/DFEN5UlG610JjdNIClXUPK`;

  let user = global.db.data.users[m.sender].age;
  if (user < 17)
    throw `*You must be over 18 years of age to use 18+ commands...😾👋*`;

  if (!text)
    throw `*Do You Want To Use 18+ Commands..⏱️*\n\nSearch Video\neg:- .xnxx sweetie fox\n\nDownload Video\neg:- .xnxx http://xnxx.com\n\n*Powerd By Jessi-md..💥*`;

  m.react(nwait);

  if (text.includes('http://') || text.includes('https://')) {
    if (!text.includes('xnxx.com'))
      return m.reply(`Invalid link. Only xnxx.com, Generated Ms.Jessica `);

    try {
      let xnResponse = await fetch(
        `https://raganork-network.vercel.app/api/xvideos/download?url=${encodeURIComponent(text)}`
      );
      let xnJson = await xnResponse.json();

      console.log('XNXX DL Response:', xnJson);

      if (xnJson.data && xnJson.data.high) {
        conn.sendFile(
          m.chat,
          xnJson.data.high,
          'xnxx_video.mp4',
          `
*Hear it is..⏱️*\n
${xnJson.data.duration ? `▢ ⌚Duration: ${xnJson.data.duration}\n` : ''}
Upload By
➬ Jessi-md
          `.trim(),
          m,
          false,
          { asDocument: chat.useDocument }
        );

        m.react(done);
      } else {
        console.error('XNXX DL Error: Invalid response format');
        m.reply(`*Please wait a minute...⏱️*`);
      }
    } catch (e) {
      console.error('XNXX DL Error:', e);
      m.reply(`*Please wait a minute...⏱️*`);
    }
  } else {
    try {
      let searchResponse = await fetch(
        `https://raganork-network.vercel.app/api/xvideos/search?query=${encodeURIComponent(text)}`
      );
      let searchJson = await searchResponse.json();

      console.log('XNXX Search Response:', searchJson);

      if (searchJson.data && searchJson.data.length > 0) {
        let listSections = [];
        searchJson.data.forEach((result, index) => {
          listSections.push([
            `${index}┃ ${result.title}`,
            [['🎥 MP4', `${usedPrefix}xnxxdl ${result.link}`, `▢ 📌 Title : ${result.title}`]],
          ]);
        });

        let ff = searchJson.data
          .map((result, i) => `${i + 1}┃ Title : ${result.title}\n*Link:* ${result.link}\n`)
          .join('\n');

        m.reply(ff);
      } else {
        console.error('XNXX Search Error: No results found');
        m.reply(` No results found for the Ms.Jessica  search list.`);
      }
    } catch (e) {
      console.error('XNXX Search Error:', e);
      m.reply(`*Please wait a minute...⏱️*`);
    }
  }
};

handler.help = ['xnxx'];
handler.tags = ['nsfw', 'prem'];
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'];
handler.diamond = false;
handler.premium = false;
handler.group = true
handler.register = true;

export default handler;
