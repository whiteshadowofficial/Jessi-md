import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let chat = global.db.data.chats[m.chat];
  if (!chat.nsfw)
    throw `*You Can't Use 18+ Commands In This Group.💥*\n\n*Cantact Bot Owner To Enabled 18+ Commands.Type .owner To Get Owner Number.*\n*Or You Can Use 18+ Commands In Our Public Group ✅*\n\nhttps://chat.whatsapp.com/LDvDGq3E2DQ2vyz34mqBuy`;

  let user = global.db.data.users[m.sender].age;
  if (user < 17)
    throw `*You must be over 18 years of age to use 18+ commands...😾👋*`;

 m.react(rwait)

let res = await fetch(`https://fantox-apis.vercel.app/${command}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw '❎ Error'
conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Random ${command}`, m)
m.react(dwait)
}
handler.help = ['18menu']
handler.command = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl']
handler.tags = ['nsfw', 'premium'] 
handler.diamond = true
handler.group = true
handler.register = true


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
