
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true

global.saluran = 'https://whatsapp.com/channel/0029VajkWCHA2pL8HbI48k1g'
global.idsal = "0029VajkWCHA2pL8HbI48k1g@newsletter" // opsional ID saluran
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ALFA OFFC' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['62895393694197'] // ubah aja pake nomor lu

// bot
global.botname = 'ALFA OFFC' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝘼𝙇𝙁𝘼𝙃𝙊𝙎𝙏𝙄𝙉𝙂' // ubah aja ini nama sticker
global.author = `At ${hariini}\n${time}` // ubah aja ini nama sticker
global.hiasan = `	◦  `
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = '[SELAMAT BERGABUNG MEK]'
global.wlcmm = []
global.gris = '`'
global.wm = `A L F A O F F C`
global.namaStore = 'ALFA STOREE'
global.ownerStore = 'ALFA STOREE'
global.autobio = true // AutoBio
global.autoread = false //autoread

// apikey panel
global.footer2 = Styles('simple whatsapp bot made by alfa')
global.domain = '-' // Isi Domain Lu
global.apikey2 = '-' // Isi Apikey Plta Lu
global.capikey2 = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''

// system
global.Func = Fichan
global.systemN = `*[ System Notice ]*`
global.mess = {
    ban: Styles('*[ System Access Failed ]* you are banned by the owner'),
    badm: Styles('*[ System Notice ]* please add bot *admin*'),
    regis: Styles(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur*`),
    premium: Styles('*[ System Notice ]* this only premium user'),
    search: Styles('🔍 *Search for server. . .*'),
    done: Styles('Done Ga Bang?? Done...'),
    success: Styles('*[ Loaded Success ]*'),
    admin: Styles('*[ System Notice ]* for *admin!* not *npc*'),
    owner: Styles('*[ System Access Failed ]* Access Denied'),
    group: Styles('*[ System Notice ]* Use this in group chat!'),
    private: Styles('*[ System Notice ]* Use this in private chat!'),
    bot: Styles('*[ System Notice ]* Only Bot user'),
    wait: Styles('*[ Loading ]* Tunggu bentar mek🗿🚬'),
    getdata: Styles('Scraping metadata . . .'),
    fail: Styles('Can\'t get metadata!'),
    error: Styles('*[ System Failed ]* Error, please contact the owner'),
    errorF: Styles('*[ System Failed ]* Sorry this feature is in error.'),
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})