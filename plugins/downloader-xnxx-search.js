import { xvideosSearch, xvideosdl } from '../lib/scraper.js';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat];
  if (!chat.nsfw) throw `🚫 This group does not support NSFW content.\n\nTo use premium features contact admin or Register the bot .reg your-name.age`;
  let user = global.db.data.users[m.sender].age;
  if (user < 18) throw `❎ You must be 18 years or older to use this feature.`;
  if (!text) throw `✳️ What do you want to search?\n📌 Usage: *${usedPrefix + command} <search>*\n\nExample: Cute teen girl or you can use a link as well\nExample: .xvid link  *`;

  m.react('⌛');
    if (!text) throw 'Please provide a search query or a valid Xvideos URL.';

    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);

    try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result;

        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();

        conn.sendFile(
          m.chat,
          Buffer.from(buffer),
          `${title}.mp4`,
          `Here is your Xvideos video: ${title}`
        );

      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          m.reply('No search results found for the given query.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');

          m.reply(`*Search Results for "${text}":*\n\n${searchResults}`);
        }
      }
    } catch (error) {
      console.error(error);
      throw '❌ Error. Failed to fetch Xvideos video details.';
    }
  };

  handler.help = ['xvid']
  handler.tags = ['nsfw', 'premium']
handler.command = ['xvid'];
handler.group = true;
handler.premium = false;
handler.register = true;

handler.premium = false;

export default handler;
