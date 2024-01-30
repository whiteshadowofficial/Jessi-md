// downloader ig story by jessi2decolop team
// api.lolhuman.xyz

import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command, args }) => {
    let username;
  
    if (args[0] && args[0].startsWith('https://www.instagram.com/stories/')) {
        username = args[0].match(/\/stories\/([^/]+)\//)[1];
    } else {
        username = args[0];
    }

    try {

        await m.react('🕥');
        const apiUrl = `https://api.lolhuman.xyz/api/igstory/${username}/?apikey=${apilol}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch Instagram story. Status code: ${response.status}`);
        }

        const data = await response.json();

        if (data.status && data.result) {
            const mediaUrls = data.result;

            for (const mediaUrl of mediaUrls) {
                
                const fileName = `story_media.${mediaUrl.split('.').pop()}`;
                const mediaResponse = await fetch(mediaUrl);
                const buffer = await mediaResponse.arrayBuffer();

                m.react('✅');
                await conn.sendFile(m.chat, Buffer.from(buffer), fileName, `Instagram story of ${username} 🫢`, m);
            }
        } else {
            throw new Error('Error in response data');
        }
    } catch (error) {
        console.error('Error:', error.message);
        m.react('🤔');
        m.reply(`◔ Failed to download Instagram story.\n◔ Please make sure the username or link is correct and try again later.\n\nExample:\n> ${usedPrefix}${command} UserName Or Story Link`);
    }
};

handler.help = ['story'].map(v => v + ' <story_url or username>');
handler.tags = ['downloader'];
handler.command = /^story$/i;

export default handler;
