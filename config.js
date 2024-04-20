import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+94779529221', 'Mr.White Shadow', true]
]
// Put your number here
// [number, he creator/owner?, he developer?]

global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit

// api key here okay
global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
global.xyro = 'LyrK9JMI7N' 
global.apilol = 'GataDios' 
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  violetics: 'https://violetics.pw',
  rrul: 'https://api-rull.herokuapp.com',
  hadi: 'http://hadi-api.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  td: 'https://api-toxic-devil.herokuapp.com/api',
  fdci: 'https://api.fdci.se',
  skh: 'https://sekha.me',
  dzx: 'https://api.dhamzxploit.my.id',
  hardianto: 'http://hardianto.xyz',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://violetics.pw': 'beta',
  'https://sekha.me': 'apirey',
  'https://api.chipa.xyz': 'pais',
  'http://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

 global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

// Sticker WM
global.packname = `「 Cʀᴇᴀᴛᴇᴅ Bʏ ᴍʀ.ᴡʜɪᴛᴇ ꜱʜᴀᴅᴏᴡ 」`
global.botdate = `⫹⫺ Day`
global.bottime = `ᴛɪᴍᴇ:`
global.author = ''
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = 'Cʀᴇᴀᴛᴇᴅ Bʏ ᴍʀ.ᴡʜɪᴛᴇ ꜱʜᴀᴅᴏᴡ - 2023'
global.bott = 'Jessi-md'
global.nomorown = '94779529221'
// owner put this creator.js
global.str = '-------------'
global.l = '「'
global.r = '」'
global.mwait = '⏱️'
global.nwait = '🤤'
global.dwait = '🍊'
global.pwait = '⏱️'
global.qwait = '😩'
global.pwait = '💌'
global.rwait = '⏱️'
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...```'
global.eror = '```404 ᴇʀʀᴏʀ```'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, (){"noiseKey":{"private":{"type":"Buffer","data":"YD0Yptj6t3nesMSCfEXjka/d5W3zQzG4VCqHk/4+BHc="},"public":{"type":"Buffer","data":"C8DygeeQgQ7MGy3wxIe2U/WUypc6JPzFFCxdIrWI0UY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"8FLJJYhX0obTdM2fOH9Ort0fl7jzaujxR8s9NZTmh1M="},"public":{"type":"Buffer","data":"Ab8y60thZtfJ6NHbF3vnw2FrPtERet1BvbQdtm/kdgw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KIIyKK592PA00qa74/47ku2iZQzq9fCghvTrPm/Pb3g="},"public":{"type":"Buffer","data":"DPAWyHMRn6B0rv8E2J9a6ETps4cKHaq8vR/4f3sJnBo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4DBbSmcUNFY++lYNjvvj4B8eXgmhWMoDFsHHIf1vVEQ="},"public":{"type":"Buffer","data":"78ZV8BTibaprdFNIxG8VimdqQZ53peuIqVIJwiSCGTY="}},"signature":{"type":"Buffer","data":"Y8wEo64J/QVP/By3vZQo/6nsA2jzKqooC3LDmLPL3ynLPgrZY57lvckmyceIG5O8PVL22khGa+wEsWrWeRQfjQ=="},"keyId":1},"registrationId":193,"advSecretKey":"/RkQzZYKm64E4NCaWcfm8x63gt/XQMlClZPpXOY8wiE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"800BpyOrTECQ720FSz8o7g","phoneId":"28fc2603-f0bc-4ed7-b72d-f504cc2ba0e6","identityId":{"type":"Buffer","data":"VjquMXTSvERMklUPGp4EitmOedk="},"registered":true,"backupToken":{"type":"Buffer","data":"wdApwICQ889sTiQYqG6b1SOn490="},"registration":{},"pairingCode":"PC9QV3F3","me":{"id":"923136180115:1@s.whatsapp.net","name":"h"},"account":{"details":"COTtwtcBEM6Cza8GGAEgACgA","accountSignatureKey":"d4+JdLrUselGSVVmHfJQ35lmObskFJYbkGN5pUQeBlM=","accountSignature":"PHDhd83mvovjbiu5Vrtw44dbJGmg1y7HTuwOYEMACKc3eAHzdEnERkdZJRs+KIFQgb1nYscqYPIQG7DHg6mJCQ==","deviceSignature":"t0F5ZcmaQiashwMReBuOUwic14Dd5vF5IUmrJudehckchZDKxCL4a03aExz7/JEsok/4+qui/jvUx9/RW08MjQ=="},"signalIdentities":[{"identifier":{"name":"923136180115:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BXePiXS61LHpRklVZh3yUN+ZZjm7JBSWG5BjeaVEHgZT"}}],"platform":"android","lastAccountSyncTimestamp":1710440786} => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
