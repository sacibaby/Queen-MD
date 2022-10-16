require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
let { covid } = require('./lib/covid.js')
const hariini = moment.tz('Asia/Colombo').format('dddd, DD MMMM YYYY')
const west = moment.tz('Asia/Colombo').format('HH:mm:ss')
const tengah = moment.tz('Asia/Colombo').format('HH:mm:ss')
const timur = moment.tz('Asia/Colombo').format('HH:mm:ss')
const ripo = ('© 𝗤𝘂𝗲𝗲𝗻 𝗠𝗗\nGithub :\nhttps://github.com/DarkWinzo/Queen-MD')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
const pepek =  `*ᴏꜰꜰɪᴄɪᴀʟ ʙᴏᴛ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ* 
 *ᴅᴇᴠᴇʟᴏᴘ ʙʏ @${'𝗗ᴀʀᴋ𝗪ɪɴᴢᴏ'.split('@')[0]}*`
const wm = `𝗤𝘂𝗲𝗲𝗻 𝗠𝗗 𝗕𝘆 𝗗𝗮𝗿𝗸𝗪𝗶𝗻𝘇𝗼 © 2022`
const from = m.chat
const dripsanti = JSON.parse(fs.readFileSync('./lib/badword.json'))
let bad = JSON.parse(fs.readFileSync('./lib/badword.json'))
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(TIME)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//  

const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var GreetingTime = 'සුබ රාත්‍රියක් 🌌'
 }
 if(time2 < "19:00:00"){
var GreetingTime = 'සුබ සන්ධ්‍යාවක් 🌃'
 }
 if(time2 < "18:00:00"){
var GreetingTime = 'සුබ සන්ධ්‍යාවක් 🌅'
 }
 if(time2 < "15:00:00"){
var GreetingTime = 'සුබ සන්ධ්‍යාවක් 🏙'
 }
 if(time2 < "13:01:01"){
var GreetingTime = 'සුබ දහවලක් 🏙'
}
 if(time2 < "12:01:01"){
var GreetingTime = 'සුබ දහවලක් 🏙'
 }
 if(time2 < "11:00:00"){
var GreetingTime = 'සුභ උදෑසනක්  🌄'
 }
 if(time2 < "05:00:00"){
var GreetingTime = 'සුභ උදෑසනක්  🌉'
 } 
 if(time2 < "00:01:01"){
var GreetingTime = 'සුභ උදෑසනක්  🌉'
 } 
 
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Read Database)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//  

let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Queen = async (Queen, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Queen.decodeJid(Queen.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Group)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//    
        const antiToxic = m.isGroup ? dripsanti.includes(from) : false
        const groupMetadata = m.isGroup ? await Queen.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const wizbotv1 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    
    try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
        
        let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
        if (setting) {
        if (!isNumber(setting.status)) setting.status = 0
        if (!('autobio' in setting)) setting.autobio = true
        if (!('templateImage' in setting)) setting.templateImage = true
        if (!('templateVideo' in setting)) setting.templateVideo = false
        if (!('templateGif' in setting)) setting.templateGif = false
        if (!('templateMsg' in setting)) setting.templateMsg = false    
        } else global.db.data.settings[botNumber] = {
        status: 0,
        autobio: true,
        templateImage: true,
        templateVideo: false,
        templateGif: false,
        templateMsg: false,
        }
        
        } catch (err) {
            console.error(err)
        }
        
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Public & Self)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//        
        
        if (!Queen.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            Queen.readMessages([m.key])
        }
//|⬡══════════════════════════════════════|❝ ⒸDarkWinzo--(reset limit every 12 hours)-->>>Queen MD™ ❞|════════════════════════════════════════⬡|// 

        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Colombo"
        })
       
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(auto set bio)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//  
        if (db.data.settings[botNumber].autobio) {
        let setting = global.db.data.settings[botNumber]
        if (new Date() * 1 - setting.status > 1000) {
        let uptime = await runtime(process.uptime())
        await Queen.setStatus(`${wm} | Queen-MD ධාවන කාලය : ${runtime(uptime)}`)
        setting.status = new Date() * 1
        }
    }
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Anti Link)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//         
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`《 ANTI LINK 》\n\nඔබ කණ්ඩායම් සබැඳියක් යැවූ බව හඳුනාගෙන ඇත, සමාවෙන්න..මට ඔබව ඉවත් කිරීමට සිදුවේ.`)
        if (!isBotAdmins) return m.reply(`මම ඇඩ්මින් ඉන්නවා`)
        let gclink = (`https://chat.whatsapp.com/`+await Queen.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`මට සමාවෙන්න, මම ඔයාව අයින් නොකලෙ ඔයා මේ ගෲප් එකේ ලින්ක් එක එවපු නිසා`)
        if (isAdmins) return m.reply(`මට සමාවෙන්න,ඔයා ඇඩ්මින් කෙනෙක් නිසා කිසිම පියවරක් ගන්නෙ නෑ`)
        if (isCreator) return m.reply(`මට සමාවෙන්න,ඔයා මගේ Owner නිසා කිසිදු පියවරක් ගන්නේ නෑ`)
        Queen.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Mute Chat)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//         
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Respon Cmd with media)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//   

         if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Queen.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Queen.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Queen.ev.emit('messages.upsert', msg)
        }

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Game)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|// 
	    if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
පහත ප්‍රශ්නවලට පිළිතුරු දෙන්න :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(සමහර උත්තර වලට හිස්තැන් ඇත)` : ''}
${isWin ? `සියලුම පිළිතුරු වලට පිළිතුරු සපයන ලදී` : isSurender ? 'අතහරින්න!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `පරිපූර්ණ ක්‍රීඩකයෙක්`}`.trim()
            Queen.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'ගීතය අනුමාන කරන්න', buttonText: { displayText: 'ගීතය අනුමාන කරන්න' }, type: 1 }], `🎮 ගීතය අනුමාන කරන්න 🎮\n\nනිවැරදි පිළිතුර 🎉\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 ගණිත ප්‍රශ්නාවලිය  🎮\n\nනිවැරදි පිළිතුර 🎉\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද?එසේනම් මෙසේ ටයිප් කරන්න ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'පින්තූරය අනුමාන කරන්න', buttonText: { displayText: 'පින්තූරය අනුමාන කරන්න' }, type: 1 }], `🎮 පින්තූරය අනුමාන කරන්න 🎮\n\nනිවැරදි පිළිතුර 🎉\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'වචනය අනුමාන කරන්න', buttonText: { displayText: 'වචනය අනුමාන කරන්න' }, type: 1 }], `🎮 වචනය අනුමාන කරන්න 🎮\n\nනිවැරදි පිළිතුර 🎉\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'සහල් කේක් අනුමාන කරන්න', buttonText: { displayText: 'සහල් කේක් අනුමාන කරන්න' }, type: 1 }], `🎮 සහල් කේක් අනුමාන කරන් 🎮\n\nනිවැරදි පිළිතුර 🎉\n*${deskripsi}*\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'වාක්‍යය අනුමාන කරන්න', buttonText: { displayText: 'වාක්‍යය අනුමාන කරන්න' }, type: 1 }], `🎮 වාක්‍යය අනුමාන කරන්න🎮\n\nනිවැරදි පිළිතුර 🎉\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'ගී පද අනුමාන කරන්න', buttonText: { displayText: 'ගී පද අනුමාන කරන්න' }, type: 1 }], `🎮 ගී පද අනුමාන කරන්න 🎮\n\nනිවැරදි පිළිතුර 🎉\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'ප්‍රහේලිකා', buttonText: { displayText: 'ප්‍රහේලිකා' }, type: 1 }], `🎮 ප්‍රහේලිකා 🎮\n\nනිවැරදි පිළිතුර 🎉\n\nනැවත ක්‍රීඩා කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*වැරදි පිළිතුරක්!*')
        }

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Group)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//         
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) {
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'ක්‍රීඩාව අවසන් විය',
	    '-2': 'වලංගු නැත',
	    '-1': 'වලංගු නොවන ස්ථානය',
	    0: 'වලංගු නොවන ස්ථානය',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} ජය!` : isTie ? `ක්‍රීඩාව අවසන්` : `හැරෙනවා ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

යටත් වීමට සහ පරාජය පිළිගැනීමට *අත්හැරීම*`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Queen.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Queen.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Suit PvP)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//

	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    Queen.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} ඇඳුම ප්‍රතික්ෂේප කරයි, ඇඳුම අවලංගු වේ`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Queen.sendText(m.chat, `සූට් චැට් කිරීමට යවා ඇත

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

කරුණාකර අදාළ කතාබස් තුළ ඇඳුමක් තෝරා ගන්න"
ක්ලික් කරන්න  https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Queen.sendText(roof.p, `කරුණාකර තෝරා ගන්න \n\nrock🗿\npaper📄\nscissors✂️`, m)
	    if (!roof.pilih2) Queen.sendText(roof.p2, `කරුණාකර තෝරා ගන්න \n\nrock🗿\npaper📄\nscissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Queen.sendText(m.chat, `ක්‍රීඩකයන් දෙදෙනාටම ක්‍රීඩා කිරීමට අදහසක් නැත,\nSuit අවලංගු වේ`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Queen.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} ඇඳුම තෝරන්න එපා, ක්‍රීඩාව අවසන් කරන්න`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`ඔබ තෝරාගෙන ඇත ${m.text} ${!roof.pilih2 ? `\n\nප්‍රතිවාදියා තෝරා ගන්නා තෙක් බලා සිටීම` : ''}`)
	    if (!roof.pilih2) Queen.sendText(roof.p2, '_ප්‍රතිවාදියා තෝරාගෙන ඇත_\nදැන් ඔබේ වාරය', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`ඔබ තෝරාගෙන ඇත ${m.text} ${!roof.pilih ? `\n\nප්‍රතිවාදියා තෝරා ගන්නා තෙක් බලා සිටීම` : ''}`)
	    if (!roof.pilih) Queen.sendText(roof.p, '_ප්‍රතිවාදියා තෝරාගෙන ඇත_\nදැන් ඔබේ වාරය', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Queen.sendText(roof.asal, `_*ඇඳුමේ ප්‍රතිඵල*_${tie ? '\nමාලාවක්' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` ජය \n` : ` පරාජය \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` ජය \n` : ` පරාජය \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
ඔහුව ටැග් කරන්න එපා!
එයා ඉන්නේ AFK එකේ  ${reason ? 'හේතුවක් ඇතුව' + reason : 'හේතුවක් නෑ'}
තුළ  ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Queen.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} AFK නතර කරන්න${user.afkReason ? 'පසුව' + user.afkReason : ''}
තුළ ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
	 
	let isBan = ""
         switch(command) {
           
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(afk)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
           case 'afk': {
                let user = global.db.data.users[m.sender]
                await Queen.sendMessage(m.chat, { react: { text: `☣️`, key: m.key }})
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} දැනටමත් Afk ${text ? ': ' + text : ''}`)
                }
            break	
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(ttc)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            
        case 'ttc': case 'ttt': case 'tictactoe': {
        await Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'ඔබ තවමත් ක්‍රීඩාවේ සිටී'   
            await Queen.sendMessage(m.chat, { react: { text: `👻️`, key: m.key }})
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('හවුල්කරුවන් හමු විය!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

රැඳී සිටින්න @${room.game.currentTurn.split('@')[0]}

යටත් වීමට සහ පරාජය පිළිගැනීමට *අත්හැරීම*`
            if (room.x !== room.o) await Queen.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Queen.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('සහකරු එනතුරු බලා සිටීම' + (text ? `පහත විධානය ටයිප් කරන්න ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(delttc)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            
            case 'delttc': case 'delttt': {
            await Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `ඔබ tictactoe කාමරයේ නොවේ !`
            delete this.game[roomnya.id]
            m.reply(`සැසි කාමරයේ tictactoe සාර්ථකව මකන්න !`)
            await Queen.sendMessage(m.chat, { react: { text: `🗑️`, key: m.key }})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(suitpvp)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`ඔබේ කලින් ඇඳුම සම්පූර්ණ කරන්න`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`මාත් එක්ක සෙල්ලම් කරන්න බැහැ!`)
            if (!m.mentionedJid[0]) return m.reply(`_ඔබ අභියෝග කිරීමට කැමති කාටද?_\nඔහුව ටැග් කරන්න..\n\nඋදාහරණයක් ලෙස : ${prefix}ඇඳුම @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `ඔබ අභියෝග කරන පුද්ගලයා වෙනත් කෙනෙකු සමඟ සෙල්ලම් කරයි`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} අභියෝගය @${m.mentionedJid[0].split`@`[0]} suit සෙල්ලම් කිරීමට

කරුණාකර @${m.mentionedJid[0].split`@`[0]} පිළිගන්න/ප්‍රතික්ෂේප කරන්න ටයිප් කරන්න`
            this.suit[id] = {
            chat: await Queen.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Queen.sendText(m.chat, `_suit කාලය ඉවරයි_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            
 //|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Donate)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            
	    case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
            await Queen.sendMessage(m.chat, { react: { text: `🙏️`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const help = `*🙏️ ආයුබෝවන්...${m.pushName} ,කොහොමද ඉතින් ඔයාට?*\n\n ඔයාලා දන්නවනෙ ඉතින් මන් ගැන..\n මම තමයි DarkWinzo \nමට බොට්ව තවදුරටත් වැඩි දියුණු කරන්න ඔයාලටත් පුලුවන් උදව් කරන්න.\nhttps://wa.me/+94775200935 (Queen-MD Developer)\n\nDonate For Me : \n<===< 𝗕𝗮𝗻𝗸 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 >===>\n*NSB BANK*\n⤑Branch  =  Imaduwa\n⤑Account No:  =  107578013551\n⤑Name  =  K.K.Isuru Lakshan `
     
         let butRun = [
                {buttonId: `.simplemenu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `.speed`, buttonText: {displayText: 'Speed'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Donate.png'),ImagePlayback:true,
                    caption: help,
                    footer: `\n*පසුවදන :*\nමන් මේක Develop කලේ කිසිම Donate කිරීමක් බලාපොරොත්තු නොවී..මේක Open Source Project එකක්..ඒ නිසා ඔයාලට පුලුවන් නම් විතරක් Donate කරන්න.....❤️\nපරිස්සමින් ඉන්න හැමෝම, තෙරුවන් සරණයි\n\nQᴜᴇᴇɴ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `🎁️`, key: m.key }})
                }
            break
            
 //|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(antibadword)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
            case 'antibadword': {		
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('*Already activated*')
dripsanti.push(from)
m.reply('*Success turning on antibadword in this group*')
var group = await Queen.groupMetadata(from)
var members = group['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Queen.sendMessage(from, {text: `*ANTILINK BADWORD*\n\n*no hate speech anymore, watch space im going to kick dumps*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('*Already deactivated*')
let off = dripsanti.indexOf(from)
dripsanti.splice(off, 1)
m.reply('*Success in turning off antirude in this group happy now*')
} else {
 let buttons = [
 { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
 { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await Queen.sendButtonText(m.chat, buttons, `*ANTI BADWORDS*\n\n.`, `${global.botname}`, m)
 }
 }
 
break
 //|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(sc)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
             case 'sc': case 'script': case 'Script': {
            await Queen.sendMessage(m.chat, { react: { text: `🔓️`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const scc = `┏━━━ꕥ〔 📮 *𝗤𝘂𝗲𝗲𝗻 𝗠𝗗 𝗕𝗼𝘁 𝗦𝗰𝗿𝗶𝗽𝘁* 📮〕ꕥ━⬣
┃
┃🍁️ *@DarkWinzo* (Main Developer)
┃   
┃🖥️Github : https://github.com/DarkWinzo
┃🎬️Youtube : https://youtube.com/c/DarkWinzo
┃
┃🔐️ *මූලකේතය (Bot Script) :* 
┃    https://github.com/DarkWinzo/Queen-MD
┗━━━━━━ꕥ

┏━━━ꕥ 〔🫂️ *𝗧𝗵𝗮𝗻𝗸 𝗧𝗼* 🫂️〕ꕥ━⬣
┃
┃🏷️ *@Alien Alfa*
┃🖥️Github : https://github.com/Alien-Alfa
┃
┃ *🤍️වචනයකින් හෝ උදව් කල සෑම අයෙක්ටම* 
┃             *ස්තූතිය පුද කරමි.* 
┃             
┗━━━━━━ꕥ
`
     
         let butRun = [
                {buttonId: `ok`, buttonText: {displayText: 'Ok'}, type: 1} ,
                {buttonId: `speed`, buttonText: {displayText: 'Speed'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Script.png'),ImagePlayback:true,
                    caption: scc,
                    footer: `Qᴜᴇᴇɴ-ᴍᴅ ʙᴏᴛ`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `🔐️`, key: m.key }})
                }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mdonate)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
          case 'mdonate': {
            await Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${GreetingTime}*
┏━━━━━━━━━━━━━━━━━━━━━━━⬣
┃       *🎀 𝗗𝗼𝗻𝗮𝘁𝗲 𝗠𝗲𝗻𝘂 🎀* 
┗━━━━━━━━━━━━━━━━━━━━━━━⬣

┏━━━ꕥ〔 පරිශීලක විස්තර 〕ꕥ━⬣
┃✾ *පරිශීලක නාමය* : ${pushname}
┃✾ *පරිශීලක අංකය* : @${me.split('@')[0]}
┗━ꕥ

┏━━━ꕥ〔 බොට් පිළිබදව 〕ꕥ━⬣
┃✾ *බොට්ගේ නාමය* : ${pushname}
┃✾ *හිමිකරු* : @${ownernya.split('@')[0]}
┃✾ *මාදිලිය* : ${Queen.public ? 'Public' : `Self`}
┗━ꕥ

┏━ꕥ〔 දිනය සහ වේලාව 〕ꕥ━⬣
┃✾ *දිනය* : ${hariini}
┃✾ *වේලාව* : ${tengah}
┗━━━━━━ꕥ`
                let sections = [
                {
                title: "<<<--------------------------<<<𝗤𝘂𝗲𝗲𝗻 𝗠𝗗 𝗗𝗼𝗻𝗮𝘁𝗲 𝗠𝗲𝗻𝘂>>>-------------------------->>>",
                rows: [
                {title: " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗠𝗲 ", rowId: `mcontact`, description: `මාව සම්බන්ද කරගන්න..`},
                {title: " 𝗦𝗰𝗿𝗶𝗽𝘁 ", rowId: `sc`, description: `මූලකේතය..`},
                {title: " 𝗗𝗼𝗻𝗮𝘁𝗲 𝗠𝗲 ", rowId: `donate`, description: `ව්‍යාපෘතිය වැඩිදියුණු කිරීම සදහා Donate කරන්න..`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, kukiw, ripo, `*Hello ${pushname}*!`, `𝗗𝗼𝗻𝗮𝘁𝗲 𝗠𝗲𝗻𝘂`, sections, m)
                await Queen.sendMessage(m.chat, { react: { text: `🇱🇰️`, key: m.key }})
                }
                break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(afk)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//

            case 'chat': {
                await Queen.sendMessage(m.chat, { react: { text: `📋️`, key: m.key }}) 
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Queen.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Queen.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Queen.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Queen.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Queen.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Queen.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Queen.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(family100)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            
        case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('තවමත් අවසන් නොවූ සැසි තිබේ!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*පහත ප්‍රශ්න වලට පිළිතුරු සපයන්න :*\n${random.soal}\n\nඅර තියෙන්නේ *${random.jawaban.length}* පිළිතුර ${random.jawaban.find(v => v.includes(' ')) ? `(සමහර පිළිතුරු වලට හිස්තැන් ඇත)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Queen.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
                                   
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Caption එක සහිත text එක යවන්න ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': case 'guess': {
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "තවමත් අවසන් නොවූ සැසි තිබේ!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Queen.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Queen.sendText(m.chat, `ගීතයක්ද?\n\nකලාකරු : ${result.artist}\nකාලය : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("පිළිතුර: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'ගීතය අනුමාන කරන්න', buttonText: { displayText: 'ගීතය අනුමාන කරන්න' }, type: 1 }], `කාලය ඉවරයි\nපිළිතුර:  ${tebaklagu[m.sender.split('@')[0]]}\n\nPlay කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "තවමත් අවසන් නොකළ සැසි තිබේ!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendImage(m.chat, result.img, `කරුණාකර ඉහත ප්‍රශ්නයට පිළිතුරු දෙන්න\n\nවිස්තරය : ${result.deskripsi}\nකාලය : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("පිළිතුර: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'පින්තූරය අනුමාන කරන්න', buttonText: { displayText: 'පින්තූරය අනුමාන කරන්න' }, type: 1 }], `කාලය ඉවරයි\nපිළිතුර:  ${tebakgambar[m.sender.split('@')[0]]}\nPlay කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "තවමත් අවසන් නොකළ සැසි තිබේ!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `කරුණාකර පහත ප්‍රශ්නවලට පිළිතුරු සපයන්න\n\n${result.soal}\nකාලය : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("පිළිතුර: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'වචනය අනුමාන කරන්න', buttonText: { displayText: 'වචනය අනුමාන කරන්න' }, type: 1 }], `කාලය ඉවරයි\nපිළිතුර:  ${tebakkata[m.sender.split('@')[0]]}\n\nPlay කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "තවමත් අවසන් නොකළ සැසි තිබේ!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `කරුණාකර පහත ප්‍රශ්නවලට පිළිතුරු සපයන්න\n\n${result.soal}\nකාලය : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("පිළිතුර: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'වාක්‍යය අනුමාන කරන්න', buttonText: { displayText: 'වාක්‍යය අනුමාන කරන්න' }, type: 1 }], `කාලය ඉවරයි\nපිළිතුර:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nPlay කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "තවමත් අවසන් නොකළ සැසි තිබේ!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `මේ ගීතයේ පද රචනයද? : *${result.soal}*?\nකාලය : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("පිළිතුර: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'පද රචනය අනුමාන කරන්න', buttonText: { displayText: 'පද රචනය අනුමාන කරන්න' }, type: 1 }], `කාලය ඉවරයි\nපිළිතුර:  ${tebaklirik[m.sender.split('@')[0]]}\n\nPlay කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "තවමත් අවසන් නොකළ සැසි තිබේ!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `*පහත ප්‍රශ්න වලට පිළිතුරු සපයන්න :*\n${result.soal}*\nකාලය : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("පිළිතුර: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'සහල් කේක් අනුමාන කරන්න', buttonText: { displayText: 'සහල් කේක් අනුමාන කරන්න' }, type: 1 }], `කාලය ඉවරයි\nපිළිතුර:  ${caklontong[m.sender.split('@')[0]]}\nවිස්තර : ${caklontong_desk[m.sender.split('@')[0]]}\n\nPlay කිරීමට අවශ්‍යද? පහත බොත්තම ඔබන්න`, Queen.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(math)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "තවමත් අවසන් නොකළ සැසි තිබේ!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `මාදිලිය: ${Object.keys(modes).join(' | ')}\nභාවිතය පිළිබඳ උදාහරණ: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Queen.sendText(m.chat, `*එහි ප්‍රතිඵලය කුමක්ද?: ${result.soal.toLowerCase()}*?\n\nකාලය: ${(result.waktu / 1000).toFixed(2)} දෙවනුව ඉක්මණින් සුලු කර පිළිතුර ලබා දෙන්න.`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("පිළිතුර: " + result.jawaban)
                    m.reply("කාලය ඉවරයි\nපිළිතුර: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(couplematch)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'couplematch': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫 ඔබේ ගැලපීමයි

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'මගේ ආත්ම සහකරු', buttonText: { displayText: 'මගේ ආත්ම සහකරු' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, jawab, Queen.user.name, m, {mentions: ments})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(React)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
           case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
            }
            break  
            
//|⬡════════════════════════════════|❝ ⒸDarkWinzo--(join/leave/setexif/kick/add)-->>>Queen MD™ ❞|═══════════════════════════════⬡|//             
            case 'join': {
                await Queen.sendMessage(m.chat, { react: { text: `🕛️`, key: m.key }}) 
                if (!isCreator) throw mess.owner
                if (!text) throw 'කණ්ඩායම් සබැදියක් ඇතුලත් කරන්න.!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'ලින්ක් එක වලංගු නැත!'
                m.reply(mess.wait)
                await Queen.sendMessage(m.chat, { react: { text: `🕑️`, key: m.key }}) 
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Queen.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                await Queen.sendMessage(m.chat, { react: { text: `✅️`, key: m.key }}) 
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await Queen.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                await Queen.sendMessage(m.chat, { react: { text: `✅️`, key: m.key }}) 
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} ඇසුරුම් නාමය|කර්තෘ`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif සාර්ථකව වෙනස් කර ඇත\n\n⤑ ඇසුරුම් නාමය : ${global.packname}\n⤑ කර්තෘ : ${global.author}`)
           }
            break
    case 'kick': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break
    case 'add': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
    break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(promote/demote)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//     
    case 'promote': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
    case 'demote': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
    
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(block/unblock)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//     
        case 'block': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Queen.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Queen.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
    
//|⬡═══════════════════════════════════|❝ ⒸDarkWinzo--(setsubject/setdesc/setppbot/setppgroup)-->>>Queen MD™ ❞═══════════════════════════════════════⬡|//     
        case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text එක කෝ?'
                await Queen.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text එක කෝ?'
                await Queen.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Caption එක සමඟ රූපය යවන්න/පිළිතුරු දෙන්න  ${prefix + command}`
                if (/webp/.test(mime)) throw `Caption එක සමඟ රූපය යවන්න/පිළිතුරු දෙන්න  ${prefix + command}`
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                await Queen.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Caption එක සමඟ රූපය යවන්න/පිළිතුරු දෙන්න  ${prefix + command}`
                if (/webp/.test(mime)) throw `Caption එක සමඟ රූපය යවන්න/පිළිතුරු දෙන්න  ${prefix + command}`
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                await Queen.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tagall/hidetag/totag)-->>>Queen MD™ ❞═══════════════════════════════════════════⬡|//                 
            case 'tagall': case 'tag': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let teks = ` 
 ┏━━━━━━━━━━━┑
 ┃𝗧𝗔𝗚𝗔𝗟𝗟
 ┃┄┄┄┄┄┄┄┄┄┄┄
 ┃*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'නැත'}*
 ┗━━━━━━━━ \n\n
`
 for (let mem of participants) {
   teks += `🎪 @${mem.id.split('@')[0]}\n`
   }
   Queen.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
   }
   break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            Queen.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Caption එක සමගින් පණිවිඩයට පිළිතුරු දෙන්න  ${prefix + command}`
               Queen.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
               
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(styletext)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//                
        case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) //සීමාව අවසන් වූ විට ප්‍රතිචාර දැක්වීම
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'විමසුම් පෙළ ඇතුළත් කරන්න!'
                let anu = await styletext(text)
                let teks = `මෝස්තර පෙළ වෙතින් ${text}\n\n`
                for (let i of anu) {
                    teks += `⤑ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
	    
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(vote)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|// 	    
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_මෙම කතාබහේ තවමත් ඡන්ද(vote) ඇත!_\n\n*${prefix}deletevote* - ඡන්ද මකා දැමීමට`
            if (!text) throw `ඡන්දය ප්‍රකාශ කිරීමට හේතුව ඇතුළත් කරන්න, උදාහරණයක් ලෙස: *${prefix + command} Queen Bot හිමිකරු*`
            m.reply(`ඡන්ද විමසීම ආරම්භ වේ!\n\n*${prefix}upvote* - මනාපයි.\n*${prefix}devote* - මනාප නැත.\n*${prefix}checkvote* - ඡන්දය පරීක්ෂා කිරීමට\n*${prefix}deletevote* - ඡන්ද මකා දැමීමට`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*《 VOTE 》*

*හේතුව:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ සමස්ත: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ සමස්ත: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* - ඡන්ද මකා දැමීමට`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Queen.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Queen.sendMessage(m.chat, buttonMessageVote)
	    }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(upvote)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*මෙම කණ්ඩායමේ ඡන්දය නැත!*_\n\n*${prefix}vote* - ඡන්දය ආරම්භ කිරීමට`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'ඔබ ඡන්දය ප්‍රකාශ කර ඇත'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*《 VOTE 》*

*හේතුව:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ සමස්ත: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ සමස්ත: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - ඡන්ද මකා දැමීමට`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Queen.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Queen.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
             
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(devote)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//              
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*මෙම කණ්ඩායමේ ඡන්දය නැත!*_\n\n*${prefix}vote* - ඡන්දය ආරම්භ කිරීමට`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'ඔබ ඡන්දය ප්‍රකාශ කර ඇත'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*《 VOTE 》*

*හේතුව:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ සමස්ත: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ සමස්ත: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - ඡන්ද මකා දැමීමට`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Queen.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Queen.sendMessage(m.chat, buttonMessageDevote)
	}
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(checkvote)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*මෙම කණ්ඩායමේ ඡන්දය නැත!*_\n\n*${prefix}vote* - ඡන්දය ආරම්භ කිරීමට`
teks_vote = `*《 VOTE 》*

*හේතුව:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│
└────

*${prefix}deletevote* - ඡන්ද මකා දැමීමට


©${Queen.user.id}
`
Queen.sendTextWithMentions(m.chat, teks_vote, m)
break

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(deletevote)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|// 
        case 'deletevote': case'delvote': case 'deletevote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*මෙම කණ්ඩායමේ ඡන්දය නැත!*_\n\n*${prefix}vote* - ඡන්දය ආරම්භ කිරීමට`
            delete vote[m.chat]
            m.reply('මෙම කණ්ඩායමේ ඡන්ද සැසිය සාර්ථකව මකන්න')
	    }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(group)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
               case 'group': case 'grup': case 'Group': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Queen.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`කණ්ඩායම සාර්ථකව වසා දමයි`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Queen.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`කණ්ඩායම සාර්ථකව විවෘත කිරීම`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'විවෘතයි' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'වසන්න' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `කණ්ඩායම් මාදිලිය`, Queen.user.name, m)

             }
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(editinfo)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Queen.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`කණ්ඩායම් තොරතුරු සංස්කරණය කිරීම සාර්ථකව විවෘත කරන ලදී`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Queen.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`කණ්ඩායම් තොරතුරු සංස්කරණය කිරීම සාර්ථකව වසන ලදී`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'විවෘතයි' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'වසන්න' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `තොරතුරු සංස්කරණය කරන්න`, Queen.user.name, m)

            }
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(antilink)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`කලින්ම සක්‍රීය කර ඇත.`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink සක්‍රීය කරන ලදි !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`කලින්ම අක්‍රිය කර ඇත.`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink අක්‍රීය කරන ලදි. !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'ක්‍රියාත්මකයි' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'අක්‍රීයයි' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `Antilink ආරක්ශන මාදිලිය`, Queen.user.name, m)
                }
             }
             break
             
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mute)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//              
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`කලින්ම සක්‍රීය කර ඇත.`)
                db.data.chats[m.chat].mute = true
                m.reply(`${Queen.user.name} මෙම කණ්ඩායම තුළ නිහඬ කර ඇත !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`කලින්ම අක්‍රිය කර ඇත.`)
                db.data.chats[m.chat].mute = false
                m.reply(`${Queen.user.name} මෙම සමූහය තුළ නිහඬ කිරීම ඉවත් කර ඇත !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'ක්‍රියාත්මකයි' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'අක්‍රීයයි' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `බොට් නිශ්ශබ්ද කරන්න`, Queen.user.name, m)
                }
             }
             break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(linkgroup)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//              
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await Queen.groupInviteCode(m.chat)
                Queen.sendText(m.chat, `*ඔයාට මේ Group එකේ ලින්ක් එක ඕනද?*\nමෙන්න Group ලින්ක් එක =\n\nhttps://chat.whatsapp.com/${response}\n\n ${groupMetadata.subject} : කණ්ඩායම් සබැඳිය`, m, { detectLink: true })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(disappear)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'ephemeral': case 'disappear': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await Queen.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await Queen.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await Queen.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await Queen.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "Disappearing Massage විකල්පය වෙනස් කරන්න",
                rows: [
                {title: "Disappearing Massage 1 Day", rowId: `ephemeral 1`, description: `දින 1 ක් සඳහා කණ්ඩායමේ Disappearing Massage සක්‍රීය කරන්න`},
                {title: "Disappearing Massage 7 Days", rowId: `ephemeral 7`, description: `දින 7 ක් සඳහා කණ්ඩායමේ Disappearing Massage සක්‍රීය කරන්න`},
                {title: "Disappearing Massage 90 Days", rowId: `ephemeral 90`, description: `දින 90 ක් සඳහා කණ්ඩායමේ Disappearing Massage සක්‍රීය කරන්න`},
                {title: "Disappearing Massage Off", rowId: `ephemeral off`, description: `මෙම කණ්ඩායමේ Disappearing Massage අක්‍රීය කරන්න`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, `කරුණාකර පහත Disappearing Massage විකල්ප ලැයිස්තුව තෝරන්න !`, Queen.user.name, `ආයුබෝවන් පරිපාලක  ${groupMetadata.subject}`, `මෙතන ක්ලික් කරන්න`, sections, m)
                }
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(setbotname)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'setbotname': {
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} Queen MD ✅`
            let name = await Queen.updateProfileName(text)
            m.reply(`${name} ලෙස සාර්ථකව නැවත නම් කරන ලදී`)
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(setbotbio)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!text) throw `මම Queen-MD වට්ස්ඇප් රොබෝ කෙනෙක්..`
            let name = await Queen.updateProfileStatus(text)
            m.reply(`${name} ලෙස සාර්ථකව වෙනස් කරන ලදී`)
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(anticall)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`කලින්ම සක්‍රීය කර ඇත.`)
                ciko = true
                m.reply(`AntiCall සක්‍රීය කරන ලදි !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`කලින්ම අක්‍රිය කර ඇත.`)
                ciko = false
                m.reply(`අක්‍රිය කරන ලදි !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'ක්‍රියාත්මකයි' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'ක්‍රියාවිරහිතයි' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `AntiCall මාදිලිය`, Queen.user.name, m)
                }
             }
             break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(del/delete)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'පණිවිඩය එව්වේ බොට් නොවේ!'
                Queen.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(report)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'report': {
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} දෝෂ විශේෂාංගයක් වාර්තා කරන්න`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `පණිවිඩය : @${me.split('@')[0]} \nසදහා : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏දෝශය වාර්තා කලාට ස්තුතියි' }, type: 1 }]
            await Queen.sendButtonText('94775200935@s.whatsapp.net', buttons, pjtxt, ripo, m, {mentions: ments})
            let akhji = `වාර්තාව යවන ලදි\nමම අයිතිකරු @${ownernya.split('@')[0]}\n*🙏දෝශය වාර්තා කලාට ස්තුතියි🙏*\n_ඔබගේ අංකය අවහිර කරනු ලැබේ_\n_වාර්තාව නිර්මාණය කරන්නේ නම් පමණි_`
            await Queen.sendButtonText(m.chat, buttons, akhji, ripo, m, {mentions: ments})
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Reaction emojy line)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'ok': {
                reactionMessage = {
                    react: {
                        text: '👍🏻️',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
                Queen.sendMessage(m.chat, { react: { text: `🥺️`, key: m.key }})
            }
            break  
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(covid)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'covid':
    const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Queen.sendMessage(m.chat, { react: { text: `🌍️`, key: m.key }})
m.reply(`Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`)
break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(React)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//    
    case 'react': {
                if (!isCreator) throw mess.owner
                    reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
            }
            break  
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(bcgc/bcgroup)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text එක කෝ?\n\nඋදාහරණයක් ලෙස : ${prefix + command} Queen-MD Support`
                let getGroups = await Queen.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`${anu.length} Group Chat වෙත විකාශනය යවන්න, කාලය අවසන් ${anu.length * 1.5} තත්පර`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Queen Bot Source Code',
                                    url: 'https://github.com/DarkWinzo/Queen-MD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Phone Number',
                                    phoneNumber: '+94775200935'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Queen Bot Status',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `《 Broadcast Bot 》\n\n${text}`
                      Queen.send5ButImg(i, txt, Queen.user.name, global.thumb, btn)
                    }
                m.reply(`${anu.length} Group එක වෙත සාර්ථකව විකාශනය යැවීම`)
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(broadcast)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text එක කෝ?\n\nඋදාහරණයක් ලෙස : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`${anu.length} Chat එක වෙත විකාශනය යවන්න\nකාලය අවසන් ${anu.length * 1.5} තත්පර`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Queen Bot Source Code',
                                    url: 'https://github.com/DarkWinzo/Queen-MD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Phone Number',
                                    phoneNumber: '+94775200935'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Queen Bot Status',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `《 Broadcast Bot 》\n\n${text}`
                      Queen.send5ButImg(yoi, txt, Queen.user.name, global.thumb, btn)
		}
		m.reply('විකාශනය සාර්ථකයි')
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(infochat)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
              case 'chatinfo': {
   if (!m.quoted) m.reply('*Reply to mesaage👀*')
   let msg = await m.getQuotedObj()
   if (!m.quoted.isBaileys) throw '*පණිවිඩය යැව්වේ Queen බොට් නොවේ💥*'
   let teks = ''
   for (let i of msg.userReceipt) {
  let read = i.readTimestamp
  let unread = i.receiptTimestamp
  let waktu = read ? read : unread
  teks += `🎪 @${i.userJid.split('@')[0]}\n`
  teks += `🎪 *𝗧𝗜𝗠𝗘 :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🎪 *𝗦𝗧𝗔𝗧𝗨𝗦 :* ${read ? 'Read' : 'Unread'}\n\n`
   }
   Queen.sendTextWithMentions(m.chat, teks, m)
 }
 break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tools menu)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//     
case 'ipdomain':
    m.reply(mess.wait)
    const driphacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(driphacker, function (error, response, body) {
      if (error) throw new Error(error);
       m.reply(body);
      console.log(body);
    });
    break
    case 'ip':
      m.reply(mess.wait)
      const dripsba = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
        headers: {
          'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
          useQueryString: true
        }
      };
      let bhudhi = require('request')
      bhudhi(dripsba, function (error, response, body) {
        if (error) throw new Error(error);
        m.reply(body);
        console.log(body);
      });
break
case 'checknumber':
  m.reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    m.reply(body);
    console.log(body);
  });
break
case 'veriphone':
  m.reply(mess.wait)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    m.reply(body);
    console.log(body);
  });
  break    
  
  case 'shortlink': {
 m.reply(mess.wait)
 try {
 anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
 m.reply(`${anu.data}`)
 } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
 emror = String(e)
 m.reply(`${e}`)
 }
}
break
case 'shortlinkcuttly': {
  m.reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result.title
  bhoo = anu.result.hasil

  m.reply(`*TITLE:* ${hoo}\n*RESULT:* ${bhoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  m.reply(`${e}`)
  }
 }
break
case 'shortlinkisgd': {
  m.reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result

  m.reply(`*RESULT:* ${hoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  m.reply(`${e}`)
  }
 }
break

case 'brainly': {
m.reply(mess.wait)
if (!text) throw `Example : ${prefix + command} What is Love`           
x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=beta&query=${text}`)                       
ini_txt = '*BRAINLY SEARCH*\n\n'
for (let i of x.result) {       
ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
ini_txt += `*ANSWER* : ${i.jawaban}\n`                     
}   
m.reply(`${ini_txt}`)
}
break

case 'ssweb-hp': {
  if(args.length < 1) return m.reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( HP )* `,
                  footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                  buttons: buttons,
                  headerType: 4
              }
              Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
break
case 'ssweb-pc': {
  if(args.length < 1) return m.reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-pc?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( PC )* `,
                  footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                  buttons: buttons,
                  headerType: 4
              }
              Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
              }             
break       
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(q/quoted)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('පිළිතුරු පණිවිඩය!!')
		let wokwol = await Queen.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('ඔබ පිළිතුරු දුන් පණිවිඩයේ පිළිතුරක් අඩංගු නොවේ')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(listpc)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//	  
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *නම :* ${nama}\n⬡ *පරිශීලකයා :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n\n`
                 }
                 Queen.sendTextWithMentions(m.chat, teks, m)
             }
             break
 //|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(listgc)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Queen.groupMetadata(i)
                     teks += `⬡ *නම :* ${metadata.subject}\n⬡ *හිමිකරු :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'නොදනී'}\n⬡ *ID :* ${metadata.id}\n⬡ *සාදන ලද්දේ :* ${moment(metadata.creation * 1000).tz('Asia/Colombo').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *සාමාජිකයන් :* ${metadata.participants.length}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n\n`
                 }
                 Queen.sendTextWithMentions(m.chat, teks, m)
             }
             break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(listonline)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Queen.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⤑ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(s/sticker)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           m.reply(mess.wait)
                let media = await quoted.download()
                let encmedia = await Queen.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('උපරිම තත්පර 10 යි!')
                let media = await Queen.downloadMediaMessage(qmsg)
                let encmedia = await Queen.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Caption එක සමඟ රූපය/වීඩියෝව/gif යවන්න හෝ පිළිතුරු දෙන්න ${prefix + command}\n(වීඩියෝ/Gif කාලය තත්පර 1-9)`)
                }
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(stickerwm)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Caption එක සමඟ රූපය/වීඩියෝව යවන්න හෝ පිළිතුරු දෙන්න  ${prefix + command} text 1|text 2`
                if (!teks2) throw `Caption එක සමඟ රූපය/වීඩියෝව යවන්න හෝ පිළිතුරු දෙන්න  ${prefix + command} text 1|text 2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await Queen.downloadMediaMessage(qmsg)
                    let encmedia = await Queen.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('උපරිම තත්පර 10ක් පමණයි!')
                    let media = await Queen.downloadMediaMessage(qmsg)
                    let encmedia = await Queen.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Caption එක සමඟ රූපය/වීඩියෝව යවන්න ${prefix + command}\nවීඩියෝ කාල සීමාව තත්පර 1-9`
                }
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(ebinary)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'ebinary': {
            await Queen.sendMessage(m.chat, { react: { text: `🧮️`, key: m.key }})
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
            }
        break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(dbinary)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//        
            case 'dbinary': {
            await Queen.sendMessage(m.chat, { react: { text: `🧮️`, key: m.key }})
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
            }
        break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(emojimix)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//        
            case 'emojimix': {
                await Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `උදාහරණයක් ලෙස : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `උදාහරණයක් ලෙස : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Queen.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		    await Queen.sendMessage(m.chat, { react: { text: `😌️`, key: m.key }})
		}
	    }
	    break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(emojimix2)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//	    
	    case 'emojimix2': {
	    if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await Queen.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(attp)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//	    
           case 'attp': case 'ttp': {
           if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} text`
           await Queen.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Queen', 'DarkWinzo', m, {asSticker: true})

         }
         break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(stickermeme)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//         
           case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Caption එක සමඟ රූපය/stiker එක යවන්න  ${prefix + command} text 1|text 2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await Queen.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await Queen.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break    
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(simisimi)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//	        
	        case 'simih': case 'simisimi': {
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
   
    case 'alive': case 'Alive': {
            await Queen.sendMessage(m.chat, { react: { text: `🥺️`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const scc = `හායි..👋️ ඔයා මාව හෙව්වද?🥰️ මන් ඔන්ලයින් ඉන්නවා අනේ 🤭️'
`
     
         let butRun = [
                {buttonId: `ok`, buttonText: {displayText: 'Ok'}, type: 1} ,
                {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Alive.png'),ImagePlayback:true,
                    caption: scc,
                    footer: `Qᴜᴇᴇɴ-ᴍᴅ ʙᴏᴛ`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `🤭️`, key: m.key }})
                }
            break       
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(toimage)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Caption එක සමඟ Reply stiker එක යවන්න *${prefix + command}*`
                m.reply(mess.wait)
                let media = await Queen.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Queen.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tomp4/tovideo)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Caption එක සමඟ Reply stiker එක යවන්න *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Queen.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Queen.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '♻️Webp වීඩියෝ බවට පරිවර්තනය♻️' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(toaudio)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `ඔබට ශ්‍රව්‍ය(Audio) ලෙස භාවිතා කිරීමට අවශ්‍ය Video/Audio යවන්න/පිළිතුරු දෙන්න. ${prefix + command}`
            m.reply(mess.wait)
            let media = await Queen.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Queen.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tomp3)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `ඔබට MP3 බවට පරිවර්තනය කිරීමට අවශ්‍ය වීඩියෝ/ශ්‍රව්‍ය(Audio) යවන්න/පිළිතුරු දෙන්න. ${prefix + command}`
            m.reply(mess.wait)
            let media = await Queen.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Queen.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Queen.user.name}.mp3`}, { quoted : m })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tovn)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `ඔබට VN බවට පරිවර්තනය කිරීමට අවශ්‍ය වීඩියෝව/Audio එක Caption එක සමඟ පිළිතුරු දෙන්න. ${prefix + command}`
            m.reply(mess.wait)
            let media = await Queen.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Queen.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(togif)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
            case 'togif': {
                if (!/webp/.test(mime)) throw `Caption සහිත පිළිතුරු ස්ටිකරය *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Queen.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Queen.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '♻️Webp වීඩියෝ බවට පරිවර්තනය♻️' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                await Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tourl)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'tourl': {
                m.reply(mess.wait)
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
 //|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(removebg)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Caption එක රූපය යවන්න/පිළිතුරු දෙන්න. ${prefix + command}`
	    if (/webp/.test(mime)) throw `Caption එක රූපය යවන්න/පිළිතුරු දෙන්න. ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Queen.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Queen.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(ytsearch)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//	    
        case 'yts': case 'ytsearch': {
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} DarkWinzo`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⤑ No : ${no++}\n⤑ Type : ${i.type}\n⤑ Video ID : ${i.videoId}\n⤑ Title : ${i.title}\n⤑ Views : ${i.views}\n⤑ Duration : ${i.timestamp}\n⤑ Upload At : ${i.ago}\n⤑ Author : ${i.author.name}\n⤑ Url : ${i.url}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷─\n\n`
                }
                Queen.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(weather)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'weather':
   await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})         
  if (!args[0]) throw " කරුණාකර ස්ථානයක හෝ ස්ථානයේ නම ලබා දෙන්න"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `*📍PLACE:* ${name}\n*COUNTRY:* ${Country}\n*WEATHER:* ${Weather}\n*TEMPERATURE:* ${Temperature}\nMINIMUM TEMPERATURE: ${Minimum_Temperature}\n*📛MAX TEMPERATURE:* ${Maximum_Temperature}\n*HUMIDITY:* ${Humidity}\n*WIND:* ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "දෝෂයක් හට ගැනුණි..ඒ නිසා ස්ථානය හමු නොවීය!!!"
  }
  await Queen.sendMessage(m.chat, { react: { text: `🌡️`, key: m.key }})
break

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(update/update now)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
      case 'update':

  await git.fetch();
  var commits = await git.log(['main' + '..origin/' + 'main']);
  if (commits.total === 0) return m.reply("You have already installed the latest version ")
  let update = ""
  commits["all"].map((commit) => {
    update += `${' • '}*${
      commit.message
    }* by ${commit.author_name} *[${commit.date.substring(0, 10)}]* \n`
  })
  var changelog = "*New updates:*\n\n" + update;
 
 let buttonsUpdate = [
  {buttonId: `${prefix}updatenow`, buttonText: {displayText: 'Start Updating🚀'}, type: 1}
]

 let buttonMessageUpdate = {
   text: changelog,
   footer: `Updates Available`,
   buttons: buttonsUpdate,
   headerType: 1
 }
 Queen.sendMessage(m.chat, buttonMessageUpdate)
   
break
case 'updatenow':
  
    const heroku = new Heroku({ token: process.env.HEROKU_API_KEY })
  await git.fetch();
      var commits = await git.log(['main' + '..origin/' + 'main'])
  if (commits.total === 0) { Queen.sendMessage(m.chat, { text:"_Latest version has been already installed_"})  } else {

        await Queen.sendMessage(m.chat, {text: "_Started Updating_"})
       if (true) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU_APP_NAME)
            } catch (e) {
		await Queen.sendMessage(m.chat, { text : `${e}` }) 
                await Queen.sendMessage(m.chat, { text:"*Heroku app name/api key wrong*"})
                await new Promise(r => setTimeout(r, 1000));
                return await Queen.sendMessage(m.chat, { text:"*Heroku app name/api key wrong*"})
            }

        
            git.fetch('upstream', 'main');
            git.reset('hard', ['FETCH_HEAD']);
            
            var git_url = app.git_url.replace(
                "https://", "https://api:" + global.herokuapi + "@"
            )

            try {
                await git.addRemote('heroku', git_url);
            } catch { 
              console.log('heroku remote ekli');
                     git.push('heroku', 'main')

                    }
            await git.push('heroku', 'main');

                await Queen.sendMessage(m.chat, {text:"_සාර්ථකව යාවත්කාලීන කරන ලදී ✅_"})

        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await Queen.sendMessage(m.chat, {text:"_Finished build! Restarting.._"})
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await console.log('*❌ යාවත්කාලීන කිරීම අසාර්ථක විය!*\n*Even:* ```' + err + '```')
                }
            }));
                                                                          }
     }

break

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(google)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
        case 'google': {
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} Queen-MD`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⤑ *Title* : ${g.title}\n`
                teks += `⤑ *Description* : ${g.snippet}\n`
                teks += `⤑ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
                
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(image/Googleimage)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//                
                 case 'image':case 'gimage': case 'googleimage': {
                 await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
                 m.reply(mess.wait)
                 if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} Flower`
                 let gis = require('g-i-s')
                 gis(text, async (error, result) => {
                 n = result
                 images = n[Math.floor(Math.random() * n.length)].url
                 let buttons = [
                 {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                  ]
                 let buttonMessage = {
                 image: { url: images },
                 caption: `❰ 𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘 ❱
                 *𝗤𝗨𝗘𝗥𝗬* : ${text}
                 *𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
                 footer: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ",
                 buttons: buttons,
                 headerType: 4
                 }
                 Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                 })
                 await Queen.sendMessage(m.chat, { react: { text: `📸️`, key: m.key }})
                 }
                 break

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Qr)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
case 'qr': case 'qrcode':
                await Queen.sendMessage(m.chat, { react: { text: `⚠️`, key: m.key }})
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                m.reply(`Repl ධාවනය කරමින්....ප්‍රතිචාර දක්වන තෙක් කරුණාකර රැඳී සිටින්න...`)						
                var replqr =  await getBuffer(`https://queen-md-qr--darkwinzo.repl.co/`)
                               var qrbutton = [
                                   {buttonId: `.qr`, buttonText: {displayText: `Repl නැවත ධාවනය කරන්න`}, type: 1}
            ]
               let bmffg = {
                   image: replqr,
                   caption:  `තත්පර 10-15ක් ඇතුළත qr එක ස්කෑන් කරන්න...`,
                   footer: `${global.BotName}`,
                   buttons: qrbutton,
                   headerType: 4
          }     
                await Queen.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    await Queen.sendMessage(m.chat, { react: { text: `📱️`, key: m.key }})
    break
    
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Play)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//    
        case 'play': case 'ytplay': {
        await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} Mandaram Kathawe Song`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎧️ Audio 🎧️'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '🎬️ Video 🎬️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⤑ Title : ${anu.title}
⤑ Ext : Search
⤑ ID : ${anu.videoId}
⤑ Duration : ${anu.timestamp}
⤑ Viewers : ${anu.views}
⤑ Upload At : ${anu.ago}
⤑ Author : ${anu.author.name}
⤑ Channel : ${anu.author.url}
⤑ Description : ${anu.description}
⤑ Url : ${anu.url}`,
                    footer: Queen.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `🎧️`, key: m.key }})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(ytmp3/ytaudio)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
        case 'ytmp3': case 'ytaudio': {
                await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
                let { yta } = require('./lib/y2mate')
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} https://youtube.com 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                Queen.sendImage(m.chat, media.thumb, `⤑ Title : ${media.title}\n⤑ File Size : ${media.filesizeF}\n⤑ Url : ${isUrl(text)}\n⤑ Ext : MP3\n⤑ Resolusi : ${args[1] || '128kbps'}`, m)
                Queen.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `🎧️`, key: m.key }})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(ytmp4/ytvideo)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} https://youtube.com 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('සීමාවට වඩා ගොනු කරන්න '+util.format(media))
                Queen.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⤑ Title : ${media.title}\n⤑ File Size : ${media.filesizeF}\n⤑ Url : ${isUrl(text)}\n⤑ Ext : MP3\n⤑ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(getmusic)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
        case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} 1`
                if (!m.quoted) return m.reply('පිළිතුරු පණිවිඩය')
                if (!m.quoted.isBaileys) throw `බොට් වෙතින් ලැබෙන පණිවිඩ වලට පමණක් පිළිතුරු දිය හැක`
        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `සමහර විට ඔබ පිළිතුරු දුන් පණිවිඩයේ ytsearch ප්‍රතිඵලය අඩංගු නොවිය හැකිය`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('සීමාවට වඩා ගොනු කරන්න '+util.format(media))
                Queen.sendImage(m.chat, media.thumb, `⤑ Title : ${media.title}\n⤑ File Size : ${media.filesizeF}\n⤑ Url : ${urls[text - 1]}\n⤑ Ext : MP3\n⤑ Resolusi : ${args[1] || '128kbps'}`, m)
                Queen.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(getvideo)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} 1`
                if (!m.quoted) return m.reply('පිළිතුරු පණිවිඩය')
                if (!m.quoted.isBaileys) throw `බොට්  වෙතින් ලැබෙන පණිවිඩ වලට පමණක් පිළිතුරු දිය හැක`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `සමහර විට ඔබ පිළිතුරු දුන් පණිවිඩයේ ytsearch ප්‍රතිඵලය අඩංගු නොවිය හැකිය`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('සීමාවට වඩා ගොනු කරන්න '+util.format(media))
                Queen.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⤑ Title : ${media.title}\n⤑ File Size : ${media.filesizeF}\n⤑ Url : ${urls[text - 1]}\n⤑ Ext : MP3\n⤑ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(pinterest)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
            case 'pinterest': {
                m.reply(mess.wait)
        if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} text`
            hm = await fetchJson(`https://saipulanuar.herokuapp.com/api/pinterest?query=${text}&apikey=${bear}`)
              pepe = hm.url_download
                Queen.sendMessage(m.chat, { image: { url: pepe }, caption: '⤑ Media Url : '+pepe }, { quoted: m })
            }
            break
            case 'waifu': {
                m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: 'Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: pepek,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(apk)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'apk':
   await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})         
  m.reply(mess.wait)
if (args.length == 0) return m.reply(`උදාහරණයක් ලෙස : ${prefix + command} Whatsapp`)
query = args.join(' ')
get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
kontol = get_result.result
ini_txt = '❰ *APPLICATIONS* ❱\n\n'
for (var x of kontol) {
  ini_txt += `Name : ${x.apps_name}\n`
  ini_txt += `Link :${x.apps_linkdl}\n`
  ini_txt += `Tag : ${x.apps_tag}\n`
  ini_txt += `\n`
}
m.reply(ini_txt)
await Queen.sendMessage(m.chat, { react: { text: `🧮️`, key: m.key }})
break 

//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(couple)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
        case 'couple': {
                await Queen.sendMessage(m.chat, { react: { text: `👩‍❤️‍👨️`, key: m.key }})
                m.reply(mess.wait)
                let anu = await fetchJson(`https://saipulanuar.herokuapp.com/api/random/couple?apikey=${bear}`)
                auh = anu.result
                Queen.sendMessage(m.chat, { image: { url: auh.ppcwo }, caption: `Couple Male` }, { quoted: m })
                Queen.sendMessage(m.chat, { image: { url: auh.ppcwe }, caption: `Couple Female` }, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `💖️`, key: m.key }})
            }
        break
        
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(coffe)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//         
            case 'coffe': case 'kopi': {
            await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'ඊළඟ රූපය'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe ☕`,
                    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `☕️`, key: m.key }})
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Spamshell)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//                
      case 'bug1': {            
if (!isCreator && !isBan) return
await Queen.sendMessage(m.chat, { react: { text: `☠️`, key: m.key }})
if (args.length == 0) return m.reply(`ප්‍රමාණය ?`)
await Queen.sendMessage(m.chat, { react: { text: `👿️`, key: m.key }})
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄██Qᴜᴇᴇɴ-ᴍᴅ
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                            "jpegThumbnail": "Bug"
                        } 
                    } 
                }
await Queen.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
}
m.reply(`Bug1 ${jumlah} සාර්ථකව යවන ලදි.`)
}
            break
            
            
  case 'bug2': {            
if (!isCreator && !isBan) return
await Queen.sendMessage(m.chat, { react: { text: `☠️`, key: m.key }})
if (args.length == 0) return m.reply(`ප්‍රමාණය ?`)
await Queen.sendMessage(m.chat, { react: { text: `👿️`, key: m.key }})
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
┈┈╱▔▔▔▔▔╲┈┈HM┈HM
┈╱┈┈╱▔╲╲╲▏┈┈┈HMM
╱┈┈╱━╱▔▔▔▔▔╲━╮┈┈
▏┈▕┃▕╱▔╲╱▔╲▕╮┃┈┈
▏┈▕╰━▏▊▕▕▋▕▕━╯┈┈
╲┈┈╲╱▔╭╮▔▔┳╲╲┈┈┈
┈╲┈┈▏╭━━━━╯▕▕┈┈┈
┈┈╲┈╲▂▂▂▂▂▂╱╱┈┈┈
┈┈┈┈▏┊┈┈┈┈┊┈┈┈╲┈
┈┈┈┈▏┊┈┈┈┈┊▕╲┈┈╲
┈╱▔╲▏┊┈┈┈┈┊▕╱▔╲▕
┈▏ ┈┈┈╰┈┈┈┈╯┈┈┈▕▕
┈╲┈┈┈╲┈┈┈┈╱┈┈┈╱┈╲
┈┈╲┈┈▕▔▔▔▔▏┈┈╱╲╲╲▏
┈╱▔┈┈▕┈┈┈┈▏┈┈▔╲▔▔
┈╲▂▂▂╱┈┈┈┈╲▂▂▂╱┈Qᴜᴇᴇɴ-ᴍᴅ
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                            "jpegThumbnail": "Bug"
                        } 
                    } 
                }
await Queen.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
}
m.reply(`Bug2 ${jumlah} සාර්ථකව යවන ලදි.`)
}
            break
            
 case 'bug3': {            
          if (!isCreator && !isBan) return
await Queen.sendMessage(m.chat, { react: { text: `☠️`, key: m.key }})          
if (args.length == 0) return m.reply(`ප්‍රමාණය ?`)
await Queen.sendMessage(m.chat, { react: { text: `👿️`, key: m.key }})
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈Qᴜᴇᴇɴ-ᴍᴅ
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                            "jpegThumbnail": "BUG"
                        } 
                    } 
                }
await Queen.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
}
m.reply(`Bug3 ${jumlah} සාර්ථකව යවන ලදි.`)
}
            break   
            
               case 'bugnumber1': {            
          if (!isCreator && !isBan) return
          await Queen.sendMessage(m.chat, { react: { text: `👿️`, key: m.key }})
          if (!text) throw `නම්බර් එක කෝ ? (94)`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄██Qᴜᴇᴇɴ-ᴍᴅ
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                            "jpegThumbnail": "BUG"
                        } 
                    } 
                }
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await m.reply(`Bugnumber1 සාර්ථකව ${text} නම්බර් එක වෙත යවන ලදි.`)
}
            break          
            
   case 'bugnumber2': { 
          if (!isCreator && !isBan) return
          await Queen.sendMessage(m.chat, { react: { text: `👿️`, key: m.key }})
          if (!text) throw `නම්බර් එක කෝ ? (94)`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                            "jpegThumbnail": "BUG"
                        } 
                    } 
                }
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"😈️ 𝗤𝘂𝗲𝗲𝗻-𝗠𝗗 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 😈️"},{quoted:asukonyol11})
            await sleep(30000)
            await m.reply(`Bugnumber2 සාර්ථකව ${text} නම්බර් එක වෙත යවන ලදි.`)
            }
            break          
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(wallpaper)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
           case 'wallpaper': {
                await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
                if (!text) throw 'විමසුම් මාතෘකාව ඇතුළත් කරන්න'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'ඊළඟ රූපය'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⤑ Title : ${result.title}\n⤑ Category : ${result.type}\n⤑ Detail : ${result.source}\n⤑ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `📸️`, key: m.key }})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(coffe)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'gcsearch': {
                await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
                if (!text) throw 'විමසුම් මාතෘකාව ඇතුළත් කරන්න'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Name : ${result.nama}\n*Link : ${result.link}*`
        let buttons = [{ buttonId: 'menu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendButtonText(m.chat, buttons, jwbn, ripo, m)
            await Queen.sendMessage(m.chat, { react: { text: `📲️`, key: m.key }})
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(wikimedia)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//                
            case 'wikimedia': {
                await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
                if (!text) throw 'විමසුම් මාතෘකාව ඇතුළත් කරන්න'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'ඊළඟ රූපය'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⤑ Title : ${result.title}\n⤑ Source : ${result.source}\n⤑ Media Url : ${result.image}`,
                    footer: Queen.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `📲️`, key: m.key }})
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(quoteanime)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'quotesanime': case 'quoteanime': {
                await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
		let { quotesAnime } = require('./lib/scraper123')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next 📝️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'පහත බොත්තම ඔබන්න\nᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴹᴰ',
                    buttons: buttons,
                    headerType: 2
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `📜️`, key: m.key }})
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo---->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|// 	        
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                Queen.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
        }
            break
        case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                Queen.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                Queen.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(quoteanime)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//          
        case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`උදාහරණයක් ලෙස : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `විමසුම් id නැත, උදාහරණයක් ලෙස ${prefix + command} ff 0000000`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `විමසුම් id නැත, උදාහරණයක් ලෙස : ${prefix + command} ml 00000000`
                    if (!zone) throw `විමසුම් id නැත, උදාහරණයක් ලෙස : ${prefix + command} ml 00000000`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `විමසුම් id නැත, උදාහරණයක් ලෙස ${prefix + command} aov 00000000`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `විමසුම් id නැත, උදාහරණයක් ලෙස ${prefix + command} cod 000000000`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `විමසුම් id නැත, උදාහරණයක් ලෙස ${prefix + command} pb 000000000`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `විමසුම් පරිශීලක නාමයක් නොමැත, උදාහරණයක් ලෙස : ${prefix + command} ig 000000000`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    Queen.sendMedia(m.chat, anu.caption.profile_hd, '', `⤑ සම්පූර්ණ නම : ${anu.caption.full_name}\n⤑ පරිශීලක නාමය : ${anu.caption.user_name}\n⤑ ID ${anu.caption.user_id}\n⤑ Followers : ${anu.caption.followers}\n⤑ Following : ${anu.caption.following}\n⤑ ව්‍යාපාරය : ${anu.caption.bussines}\n⤑ වෘත්තිය : ${anu.caption.profesional}\n⤑ Verified : ${anu.caption.verified}\n⤑ Private : ${anu.caption.private}\n⤑ Bio : ${anu.caption.biography}\n⤑ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `විමසුම් පරිශීලක නාමයක් නොමැත, උදාහරණයක් ලෙස : ${prefix + command} npm DarkWinzo`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⤑ Name : ${anu.name}\n⤑ Version : ${Object.keys(anu.versions)}\n⤑ Created : ${tanggal(anu.time.created)}\n⤑ Modified : ${tanggal(anu.time.modified)}\n⤑ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⤑ Description : ${anu.description}\n⤑ Homepage : ${anu.homepage}\n⤑ Keywords : ${anu.keywords}\n⤑ Author : ${anu.author.name}\n⤑ License : ${anu.license}\n⤑ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`උදාහරණයක් ලෙස : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tiktok)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//              
            case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🧩️ With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎧️ Audio 🎧️'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'පහත බොත්තම ඔබන්න\nᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴹᴰ',
                    buttons: buttons,
                    headerType: 5
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tiktokwatermark)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//              
          case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🎁️ No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎧️ Audio 🎧️'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'පහත බොත්තම ඔබන්න\nᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴹᴰ',
                    buttons: buttons,
                    headerType: 5
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(tiktokmp3)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🎁️ No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🧩️ With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'පහත බොත්තම ඔබන්න\nᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴹᴰ',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                Queen.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(instagrame)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) Queen.sendFileUrl(m.chat, media, `📥️ Download Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    Queen.sendFileUrl(m.chat, anu.media[0].url, `📥️ Download Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(apkmod)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            
            case 'apkdl': case 'apkmod': case 'apkd': {      
  
  if (!text) return m.reply(`Use${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2.js')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Queen.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
       title: "*APK DOWNLOAD*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
            break
 
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Soundcloud)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'විමසුම් මාතෘකාවක් නැත'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Queen.sendImage(m.chat, anu.result.thumb, `⤑ Title : ${anu.result.title}\n⤑ Url : ${isUrl(text)[0]}`)
                Queen.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(Twitter)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '🎧️ Audio 🎧️'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'පහත බොත්තම ඔබන්න\nᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴹᴰ',
                    buttons: buttons,
                    headerType: 5
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(twitteraudio)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '🎬️ Video 🎬️'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'පහත බොත්තම ඔබන්න\nᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴹᴰ',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                Queen.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(supportgroup)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
             case "supportgroup" : {
             await Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
                 if (m.isGroup)
            Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpeg'
             
           const supportgroup = `*ඔයාට Queen-MD බොට් පිළිබදව ගැටලු තියෙද?*\nඒනම් අපේ Queen Bot Support එකට ජොයින් වෙන්න.\n\nමෙන්න ලින්ක් එක🤗️ = \n https://chat.whatsapp.com/IWvaZWObbJK0Dr64WQdGqO \n\n_(මේ Queen-MD Support Group එකෙන් ඔයාට බොට්ගේ අලුත්ම ගැන දැනගන්නත් පුලුවන් වෙයි)_`
     
         let butRun = [
                {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `speed`, buttonText: {displayText: 'Speed'}, type: 1},
                {buttonId: `darkwinzocontact`, buttonText: {displayText: 'Contact Developer'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/support.jpeg'),imagePlayback:true,
                    caption: supportgroup,
                    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `🔗️`, key: m.key }})
                }
            break
            
            case 'darkwinzocontact': {
            await Queen.sendMessage(m.chat, { react: { text: `🌐️`, key: m.key }})
                 if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpeg'
    
        
           const needhelpmenu = `👋️ හායි... ${pushname}\n*මන් DarkWinzo.ඔයාට පුලුවන් පහත ක්‍රම වලින් මාව Contact කරගන්න.*\n\n🌐️ Whatsapp -> Wa.me/94775200935\n🌐️ Email -> darkwinzo440@gmail.com\n🌐️ Telegrame -> https://t.me/DarkWinzo\n🌐️ Instagram -> https://msng.link/o/?darkwinzo=ig\n🌐️ Youtube -> https://youtube.com/c/DarkWinzo`
     
         let butRun = [
                {buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `.owner`, buttonText: {displayText: 'Contact Owner'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/contact.jpeg'),imagePlayback:true,
                    caption: needhelpmenu,
                    footer: `Qᵘᵉᵉⁿ⁻ᴹᴰ ᴮᵒᵗ ᴮʸ ᴰᵃʳᵏᵂⁱⁿᶻᵒ`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `🇱🇰️`, key: m.key }})
                }
            break  
      
      
      case 'grupinfo': case 'groupinfo':
try{
 var pic = await Queen.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*\n\n*𝗡𝗔𝗠𝗘 :* ${groupName}\n*𝗜𝗗 𝗚𝗥𝗢𝗨𝗣:* ${m.chat}\n*𝗠𝗔𝗗𝗘 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*𝗚𝗥𝗢𝗨𝗣 𝗢𝗪𝗡𝗘𝗥:* @${groupMetadata.owner.split('@')[0]}\n*𝗔𝗗𝗠𝗜𝗡𝗦 :* ${groupAdmins.length}\n*𝗠𝗘𝗠𝗕𝗘𝗥𝗦 :* ${participants.length}\n*𝗗𝗘𝗦𝗖 :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Queen.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break      
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(facebook)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
	        
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                Queen.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(pinterestdl)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'විමසුම් සබැඳිය ඇතුළු කරන්න!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Queen.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'ummadl': {
	        if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎧️ Audio 🎧️'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎬️ Video 🎬️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⤑ Title : ${anu.title}
⤑ Author : ${anu.author.name}
⤑ Like : ${anu.like}
⤑ Caption : ${anu.caption}
⤑ Url : ${anu.media[0]}
මාධ්‍ය බාගත කිරීම සඳහා, කරුණාකර පහත බොත්තම් වලින් එකක් ක්ලික් කරන්න හෝ ඉහත url සමඟ ytmp3/ytmp4 විධානය ඇතුළු කරන්න
`,
			 footer: 'ᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴹᴰ',
			buttons,
			headerType: 4
		    }
		    Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Queen.sendMessage(m.chat, { image: { url }, caption: `⤑ Title : ${anu.title}\n⤑ Author : ${anu.author.name}\n⤑ Like : ${anu.like}\n⤑ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
	case 'song': {
	await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
        m.reply(mess.wait)
  if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} Mandaram Kathawe Song`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO MP4⬤: ${search.all[0].title}`,`SONG MP3⬤: ${search.all[1].title}`,`VIDEO MP4⬤: ${search.all[2].title}`,`SONG MP3⬤: ${search.all[3].title}`,`VIDEO MP4⬤: ${search.all[4].title}`,`SONG MP3⬤: ${search.all[5].title}`,`VIDEO MP4⬤: ${search.all[6].title}`,`SONG MP3⬤: ${search.all[7].title}`,`VIDEO MP4⬤: ${search.all[8].title}`,`SONG MP3⬤: ${search.all[9].title}`,`VIDEO MP4⬤: ${search.all[10].title}`,`SONG MP3⬤: ${search.all[11].title}`,`VIDEO MP4⬤: ${search.all[12].title}`,`SONG MP3⬤: ${search.all[13].title}`,`VIDEO MP4⬤: ${search.all[14].title}`,`SONG MP3⬤: ${search.all[15].title}`,`VIDEO MP4⬤: ${search.all[16].title}`,`SONG MP3⬤: ${search.all[17].title}`,`VIDEO MP4⬤: ${search.all[18].title}`,`SONG MP3⬤: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let nombor = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'RESULT NUMBER ' + nombor++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
await Queen.sendMessage(m.chat, { react: { text: `📥️`, key: m.key }})
const sendm =  Queen.sendMessage(
m.chat, 
{
text: "\n*දත්ත සැකසීම සිදු විය..⚙️*\n",
footer: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ",
title: `*${text}*...මෙන්න ඔබේ ප්‍රතිඵලය\n_🔍️පහතින් ඔබට අවශ්‍ය ගීතය හෝ වීඩියෝව තෝරන්න🔍️_ \n`,
buttonText: "CLICK HERE",
sections
}, { quoted : m })
}
break    
	    case 'ringtone': {
	    await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
		if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Queen.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
		await Queen.sendMessage(m.chat, { react: { text: `🎶️`, key: m.key }})
	    }
	    break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Queen.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`ඔබට වෙනස් කිරීමට අවශ්‍ය Audio එක සමඟ පිළිතුරු දෙන්න *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'පිළිතුරු පණිවිඩය!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash අතුරුදහන්'
                if (!text) throw `කුමන විධානය සඳහාද?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'ඔබට මෙම ස්ටිකර් විධානය වෙනස් කිරීමට අවසර නැත'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`✅ කළා`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Hash එකක් නෑ`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'ඔබට මෙම ස්ටිකර් විධානය මකා දැමීමට අවසර නැත'              
                delete global.db.data.sticker[hash]
                m.reply(`✅ කළා`)
            }
            break
            case 'listcmd': {
                let teks = `
*𝗛𝗮𝘀𝗵 𝗟𝗶𝘀𝘁*
විස්තර‍ය: *bold* hash අගුළු දමා ඇත.
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Queen.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'පිළිතුරු පණිවිඩය!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash අතුරුදහන්'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'දත්ත සමුදාය තුළ Hash සොයා ගත නොහැකි විය.'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('✅ කළා')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'ඔබට දත්ත ගබඩාවේ සුරැකීමට අවශ්‍ය පණිවිඩයට පිළිතුරු දෙන්න'
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} file Name`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' පණිවිඩ ලැයිස්තුවේ ලියාපදිංචි කර ඇත`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`'${text}'ලෙස පණිවිඩ ලැයිස්තුවේ පණිවිඩය සාර්ථකව එක් කරන ලදී.
    
 ${prefix}getmsg ${text} සමඟ ප්‍රවේශ වන්න.

 ${prefix}listmsg සමඟ පණිවිඩ ලැයිස්තුව බලන්න`)
            }
            break
            case 'getmsg': {
                if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} file name\n\n${prefix}listmsg සමඟ පණිවිඩ ලැයිස්තුව බලන්න.`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' පණිවිඩ ලැයිස්තුවේ ලැයිස්තුගත කර නැත.`
                Queen.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '《 දත්ත ගබඩා ලැයිස්තුව  》\n\n'
		for (let i of seplit) {
		    teks += `⬡ *නම :* ${i.nama}\n⬡ *වර්ගය :* ${getContentType(i.message).replace(/Message/i, '')}\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
                let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' පණිවිඩ ලැයිස්තුවේ ලැයිස්තුගත කර නැත`)
		delete msgs[text.toLowerCase()]
		m.reply(`පණිවිඩ ලැයිස්තුවෙන් '${text}' සාර්ථකව මකා ඇත`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('කණ්ඩායම් සඳහා විශේෂාංග භාවිතා කළ නොහැක!')
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                Queen.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Queen.getName(m.sender)} නිර්නාමික කතාබහට සාදරයෙන් පිළිගනිමු\n\nහවුල්කරුවෙකු සෙවීමට පහත බොත්තම ක්ලික් කරන්න.\`\`\``, Queen.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('කණ්ඩායම් සඳහා මෙම  විශේෂාංග භාවිතා කළ නොහැක!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`ඔබ නිර්නාමික සැසියක(Anonymous chat) නොවේ, හවුල්කරුවෙකු සොයා ගැනීමට බොත්තම ඔබන්න \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await Queen.sendText(other, `\`\`\`හවුල්කරු නිර්නාමික සැසියෙන් ඉවත් වී ඇත.\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('කණ්ඩායම් සඳහා විශේෂාංග භාවිතා කළ නොහැක!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`ඔබ තවමත් සිටින්නේ නිර්නාමික සැසියක ය, ඔබගේ නිර්නාමික සැසිය අවසන් කිරීමට පහත බොත්තම ඔබන්න\`\`\``, Queen.user.name, m)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'මඟ හරින්න' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'නවත්වන්න' }, type: 1 }
                    ]
                    await Queen.sendButtonText(room.a, buttons, `\`\`\`සාර්ථක ලෙස හවුල්කරු සොයා ගන්නා ලදී, දැන් ඔබට පණිවිඩයක් යැවිය හැක\`\`\``, Queen.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Queen.sendButtonText(room.b, buttons, `\`\`\`සාර්ථක ලෙස හවුල්කරු සොයා ගන්නා ලදී, දැන් ඔබට පණිවිඩයක් යැවිය හැක\`\`\``, Queen.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`කරුණාකර රැඳී සිටින්න, සහකරුවෙකු සොයමින්...\`\`\``, Queen.user.name, m)
                }
                break
            }
            
          case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('කණ්ඩායම් සඳහා විශේෂාංග භාවිතා කළ නොහැක!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`ඔබ නිර්නාමික සැසියක නොවේ, හවුල්කරුවෙකු සොයා ගැනීමට බොත්තම ඔබන්න\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Queen.sendText(other, `\`\`\`හවුල්කරු නිර්නාමික සැසියෙන් ඉවත් වී ඇත\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(room.a, buttons, `\`\`\`සාර්ථක ලෙස හවුල්කරු සොයා ගන්නා ලදී, දැන් ඔබට පණිවිඩයක් යැවිය හැක\`\`\``, Queen.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Queen.sendButtonText(room.b, buttons, `\`\`\`සාර්ථක ලෙස හවුල්කරු සොයා ගන්නා ලදී, දැන් ඔබට පණිවිඩයක් යැවිය හැක\`\`\``, Queen.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`කරුණාකර රැඳී සිටින්න, සහකරුවෙකු සොයමින්...\`\`\``, Queen.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
               await Queen.sendMessage(m.chat, { react: { text: `⚜️`, key: m.key }})
                Queen.public = true
                m.reply('*Qᴜᴇᴇɴ ʙᴏᴛ ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ*\n♻️Queen Bot පොදු භාවිතයට වෙනස් කරන ලදි.දැන් සියලුම දෙනාට බොට් භාවිතා කල හැක.♻️')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                await Queen.sendMessage(m.chat, { react: { text: `⚜️`, key: m.key }})
                Queen.public = false
                m.reply('*Qᴜᴇᴇɴ ʙᴏᴛ ᴘʀɪᴠᴀᴛᴇ ᴍᴏᴅᴇ*\n♻️Queen Bot ස්වයං භාවිතයට වෙනස් කරන ලදි.දැන් බොට් භාවිතා කල හැක්කේ බොට් අයිතිකරුට පමණි.♻️')
                 }
            break
            case 'ping': case 'speed': case 'botstatus': case 'statusbot': {
   await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})        
   const used = process.memoryUsage()
   const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
   }, {
  speed: 0,
  total: 0,
  times: {
 user: 0,
 nice: 0,
 sys: 0,
 idle: 0,
 irq: 0
   }
   })
   let timestamp = speed()
   let latensi = speed() - timestamp
   neww = performance.now()
   oldd = performance.now()
   respon = `*<<--Response In ${latensi.toFixed(4)}*-->>`.trim()
   m.reply(respon)
   await Queen.sendMessage(m.chat, { react: { text: `🎯️`, key: m.key }})
 }
            break
            
          case 'speedtest': {
            Queen.sendMessage(m.chat, { react: { text: `🚀️`, key: m.key }})
            m.reply('වේගය පරීක්ෂා කිරීම...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
        break
            
          case 'runtime': case 'uptime':{
          Queen.sendMessage(m.chat, { react: { text: `🥵️`, key: m.key }})
          let siapp = `*┏━ꕥ〔 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 〕ꕥ━⬣*
┃⏲️ කාලය: ${hariini} WIB
┃💌 සක්‍රීය කාලය: ${runtime(process.uptime())}
┃🌹 Tag : ${pushname}
┗━━━━━━ꕥ`
           Queen.sendMessage(m.chat, { image: { url: 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=400&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=Runtime' }, caption: siapp }, { quoted: m })
          }
            break
            
           case 'rules': case 'rulesbot':{
           Queen.sendMessage(m.chat, { react: { text: `💬️`, key: m.key }})    
               
           let ohh = `*𝗕𝗼𝘁 𝗥𝘂𝗹𝗲𝘀* :\n
1. බොට් වෙත දුරකතන ඇමතුම් ලබා නොගන්න.
2. කරුණාකර බොට් භාවිතා කරන විට විරාමයක් තබන්න (ස්පෑම් නොකරන්න)
3. බොට් අන්තර්ගතය සූරා නොගන්න
4. මෙම බොට් භාවිතා කිරීමට ඇතිතාක් නිදහස ඇති බැවින් (බොට් කණ්ඩායමකට එකතු කිරීම හැර) විකිණීම සහ වෙළඳාම් කිරීම තහනම්ය.
5. Bot මගින් පරිශීලක දත්ත සුරැකෙන්නේ නැත.මිනිසුන් මෙන් සර්ව සම්පූර්ණ යැයි සිතා නොහැසිරෙන්න.
6. පරිශීලකයන්,බොට්ගේ අන්තර්ගතය හෝ ලබාගන්නා මාධයය සහ කිසිම ආකාරයේ ප්‍රචණ්ඩ කියාවකට අප වග නොකියනු ඇත.
7. අසභ්‍ය අන්තර්ගතයෙන් වළකින්න (පින්තූර, ලේඛන, වීඩියෝ සහ ස්ටිකර් ආකාරයෙන්)

*රහස්‍යතා ප්‍රතිපත්තිය:*
  1. බොට් විසින් පරිශීලකයාගේ කතාබස් ඉතිහාස දත්ත වාර්තා නොකරනු ඇත.
  2. බොට් විසින් පරිශීලක අංක බෙදා නොගනී.
  3. පරිශීලකයන් විසින් ඉදිරිපත් කරන ලද මාධ්‍ය බොට් විසින් සුරකිනු නොලැබේ.
  4. බොට් පරිශීලක දත්ත අවභාවිත නොකරනු ඇත.
  5. පරිශීලකයන්ගේ කතාබස් ඉතිහාස දත්ත බැලීමට බොට්හි හිමිකරුට අයිතිය ඇත.
  6. බොට්හි හිමිකරුට පරිශීලකයින්ගේ තත්ත්වය බැලීමට අයිතිය ඇත.
  7. බොට් හිමිකරුහට කතාබස් ඉතිහාසය සහ පරිශීලකයන් විසින් එවන ලද මාධ්‍ය නැරඹිය හැක.
 
*බොට්ගේ නියමයන් සහ කොන්දේසි*
  1. පිටත් වීමට කාලය පැමිණි විට බොට් කණ්ඩායමෙන් ඉවත් වනු ඇත.
  2. පරිශීලකයන් වැරදිද නැද්ද යන්න නොසලකා ඒකපාර්ශ්විකව පරිශීලකයන් තහනම් කිරීමට bots හට හැකිය.
  3. බොට් *භාවිත කරන්නන් බොට් විශේෂාංගයට කරන කිසිම දෙයකට අප වගකියනු නොලැබේ.*
  4. බොට් විසින් දඬුවම් නියම කරනු ඇත : නීති උල්ලංඝනය කරන පරිශීලකයින් අවහිර කිරීම හෝ තහනම් කිරීම.
  5. ක්‍රමලේඛනයේ සහ හිමිකරුගේ දෝෂ සඳහා බොට් වගකිව යුතුය.
 
_මෙම බොට් භාවිතා කිරීමට ඔබට කිසිදු මුදල් ගෙවීමක් අවශ්‍ය නැති නිසා එයට කෘතවේදී වන්න, බොට් ඥානවන්තව භාවිතා කරන්න, කිසිදුවිටක එය ඉක්මවා නොයන්න._

දක්ෂ පරිශීලකයෙකු වන්න.. \ngood luck!

🛡️ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ᴍᴅ🛡️`
              Queen.sendMessage(m.chat, { image: { url: 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=400&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=Bot Rules ' }, caption: ohh }, { quoted: m })
              }
            break
            
            case 'mcontact': {
                Queen.sendContact(m.chat, `94775200935@s.whatsapp.net`, m)
                Queen.sendMessage(m.chat, { react: { text: `👤️`, key: m.key }})
            }
            break
            
            
            case 'owner': case 'creator': {
                Queen.sendContact(m.chat, global.owner, m)
                Queen.sendMessage(m.chat, { react: { text: `👤️`, key: m.key }})
            }
            break
            case 'playstore': {
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⤑ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⤑ Name : ${i.name}\n`
            teks += `⤑ Link : ${i.link}\n`
            teks += `⤑ Developer : ${i.developer}\n`
            teks += `⤑ Link Developer : ${i.link_dev}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n`
            }
            m.reply(teks)
            }
            break
            case 'phones': {
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⤑  මාතෘකාව: ${judul}
⤑  Realease වූ දිනය: ${rilis}
⤑   විශාලත්වය: ${ukuran}
⤑   වර්ගය: ${type}
⤑   මතක ගබඩාව: ${storage}
⤑   සංදර්ශකය: ${display}
⤑   ප්‍රමාණය: ${inchi}
⤑ Pixel: ${pixel}
⤑ Video Pixel: ${videoPixel}
⤑ Ram එක: ${ram}
⤑   චිප් කට්ටලය: ${chipset}
⤑   ප්‍රමාණය: ${batrai}
⤑   බැටරි සන්නාමය: ${merek_batre}
⤑   විස්තර: ${detail}`
            Queen.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'cinemaschedule': {
            if (!text) throw `උදාහරණයක් ලෙස: ${prefix + command} Colombo`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `${text} : සිනමා කාලසටහන වෙතින්\n\n`
            for (let i of res.result){
            capt += `⤑ මාතෘකාව: ${i.title}\n`
            capt += `⤑ පෙර දසුන: ${i.thumb}\n`
            capt += `⤑ Url සබැදිය: ${i.url}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n`
            }
            Queen.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `දැන් Bioskop Play කරනවා.\n\n`
            for (let i of res.result){
            capt += `⤑ මාතෘකාව: ${i.title}\n`
            capt += `⤑ Url සබැදිය: ${i.url}\n`
            capt += `⤑ Image Url: ${i.img}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n`
            }
            Queen.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'community': {
            if (!text) throw `උදාහරණයක් ලෙස: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `community Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⤑ Community: ${i.community}\n`
            capt += `⤑ Community Link: ${i.community_link}\n`
            capt += `⤑ Thumbnail: ${i.community_thumb}\n`
            capt += `⤑ Description: ${i.community_desc}\n`
            capt += `⤑ Member Count: ${i.member_count}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n`
            }
            Queen.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⤑ මාතෘකාව: ${judul}\n`
            capt += `⤑ කියවූ ගණන: ${dibaca}\n`
            capt += `⤑ අකමැති අය ගණන: ${divote}\n`
            capt += `⤑ Bab: ${bab}\n`
            capt += `⤑ කාලය: ${waktu}\n`
            capt += `⤑ Url: ${url}\n`
            capt += `⤑ විස්තරය: ${description}`
            Queen.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⤑ මාතෘකාව: ${i.judul}\n`
            capt += `⤑ කැමති: ${i.like}\n`
            capt += `⤑ නිර්මාතෘ: ${i.creator}\n`
            capt += `⤑ වර්ගය: ${i.genre}\n`
            capt += `⤑ Url: ${i.url}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n`
            }
            m.reply(capt)
            }
            break
            case '': {
            Queen.sendMessage(m.chat, { react: { text: `❇️`, key: m.key }})
            }
            break
            case 'drakor': {
            if (!text) throw `උදාහරණයක් ලෙස : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⤑ මාතෘකාව: ${i.judul}\n`
            capt += `⤑ වසර: ${i.years}\n`
            capt += `⤑ වර්ගය: ${i.genre}\n`
            capt += `⤑ Url: ${i.url}\n`
            capt += `⤑ Thumbnail Url: ${i.thumbnail}\n\n⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷⟷\n`
            }
            Queen.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'help': case 'Help': {
            await Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const help = `*${pushname} ඔබට උදව්වක් අවශ්‍යද?*\n\nමගේ සම්පූර්ණ විධාන ලැයිස්තුව ලබා ගැනීමට මෙනු බොත්තම ඔබන්න.`
     
         let butRun = [
                {buttonId: `.simplemenu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `.speed`, buttonText: {displayText: 'Speed'}, type: 1},
                {buttonId: `.owner`, buttonText: {displayText: 'Contact Owner'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Queen.jpg'),videoPlayback:true,
                    caption: help,
                    footer: `\nQueen-MD\n\n         ↓↓ පහත බොත්තම් භාවිතා කරන්න ↓↓`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `🧑‍🔧️`, key: m.key }})
                }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(setmenu)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'setmenu': {
            await Queen.sendMessage(m.chat, { react: { text: `🔧️`, key: m.key }})
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, `කරුණාකර ඔබට වෙනස් කිරීමට අවශ්‍ය මෙනුව තෝරන්න!`, Queen.user.name, `ආයුබෝවන් ඔබට!`, `මෙතන ක්ලික් කරන්න`, sections, m)
                }
            }
            break
          
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(sponsor)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'sponsor': {
            Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
            if (!m.isGroup) throw mess.group
            let qontak = `94775200935@s.whatsapp.net`
let whatsapp = `94775200935@s.whatsapp.net`

            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab =`    *Ｑｕｅｅｎ－ＭＤ  Ｓｐｏｎｓｏｒ*\n\n 
-හිමිකරු :  @${ownernya.split('@')[0]}\n-බොට් අංකය : @${me.split('@')[0]}\n-Powered  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${whatsapp.split('@')[0]}`
            let ments = [ownernya, me, ini_mark, qontak, whatsapp]
            let buttons = [
                        { buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 }
                    ]
                    await Queen.sendMessage(m.chat, { react: { text: `🎁️`, key: m.key }})
                    await Queen.sendButtonText(m.chat, buttons, jawab, wm, m, {mentions: ments})
                     }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(menu)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'menu': {
            Queen.sendMessage(m.chat, { react: { text: `⚙️`, key: m.key }})
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            hm = await fetchJson(`https://saipulanuar.herokuapp.com/api/quotes?apikey=${bear}`)
              sami = hm.result
            let jawab = `*${GreetingTime}*
┏━━━ꕥ〔 පරිශීලක විස්තර 〕ꕥ━⬣
┃✾ *පරිශීලක නාමය* : ${pushname}
┃✾ *පරිශීලක අංකය* : @${me.split('@')[0]}
┃✾ *Premium තත්වය* : ${isPremium ? '✅' : `❌`}
┃✾ *සීමාව* : ${isPremium ? '♾අසීමිතයි.' : `〽️${db.data.users[m.sender].limit}`}
┗━ꕥ

┏━━━ꕥ〔 බොට් පිළිබදව 〕ꕥ━⬣
┃✾ *බොට්ගේ නාමය* : ${pushname}
┃✾ *බොට්ගේ අංකය* : @${ini_mark.split('@')[0]}
┃✾ *හිමිකරු* : @${ownernya.split('@')[0]}
┃✾ *මාදිලිය* : ${Queen.public ? 'Public' : `Self`}
┃✾ *උපසර්ගය* :「 MULTI-PREFIX 」
┗━ꕥ

┏━ꕥ〔 දිනය සහ වේලාව 〕ꕥ━⬣
┃✾ *දිනය* : ${hariini}
┃✾ *වේලාව* : ${tengah}
┗━━━━━━ꕥ
┏━ꕥ
┃📖 මෙම ඕනෑම විධානයක් භාවිතා කිරීමට 
┃          මෙසේ ටයිප් කරන්න
┃      " *${prefix}විධානය* ".
┃ 
┃📖 Support කණ්ඩායම් සබැඳිය ලබා 
┃ ගැනීමට "*${prefix}support* ටයිප් කරන්න".
┃
┃📖 සම්පූර්ණ විධාන ලැයිස්තුව ලබා
┃  ගැනීමට" *${prefix}allmenu* "ටයිප් කරන්න .
┗━━━━━━ꕥ`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '📖 Menu 📖' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
             await Queen.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, jawab, pepek, m, {mentions: ments})
            }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(simplemenu)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'simplemenu': case 'list': {
            await Queen.sendMessage(m.chat, { react: { text: `🤖️`, key: m.key }})
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${GreetingTime}*
┏━━━ꕥ〔 පරිශීලක විස්තර 〕ꕥ━⬣
┃✾ *පරිශීලක නාමය* : ${pushname}
┃✾ *පරිශීලක අංකය* : @${me.split('@')[0]}
┃✾ *Premium තත්වය* : ${isPremium ? '✅' : `❌`}
┃✾ *සීමාව* : ${isPremium ? '♾අසීමිතයි.' : `〽️${db.data.users[m.sender].limit}`}
┗━ꕥ

┏━━━ꕥ〔 බොට් පිළිබදව 〕ꕥ━⬣
┃✾ *බොට්ගේ නාමය* : ${pushname}
┃✾ *බොට්ගේ අංකය* : @${ini_mark.split('@')[0]}
┃✾ *හිමිකරු* : @${ownernya.split('@')[0]}
┃✾ *මාදිලිය* : ${Queen.public ? 'Public' : `Self`}
┃✾ *උපසර්ගය* :「 MULTI-PREFIX 」
┗━ꕥ

┏━ꕥ〔 දිනය සහ වේලාව 〕ꕥ━⬣
┃✾ *දිනය* : ${hariini}
┃✾ *වේලාව* : ${tengah}
┗━━━━━━ꕥ
┏━ꕥ
┃✾📖 මෙම ඕනෑම විධානයක් භාවිතා කිරීමට 
┃          මෙසේ ටයිප් කරන්න
┃       " *${prefix}විධානය* ".
┃ 
┃📖 Support කණ්ඩායම් සබැඳිය ලබා 
┃ ගැනීමට "*${prefix}supportgroup* 
┃                 ටයිප් කරන්න".
┃📖 සම්පූර්ණ විධාන ලැයිස්තුව ලබා
┃  ගැනීමට" *${prefix}allmenu* "ටයිප් කරන්න .
┗━━━━━━ꕥ`
                let sections = [
                {
                title: "<<<--------------------------<<<𝗤𝘂𝗲𝗲𝗻 𝗠𝗗 𝗕𝗼𝘁 𝗠𝗲𝗻𝘂>>>-------------------------->>>",
                rows: [
                {title: " 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 ", rowId: `mgroup`, description: `(<<<----👥 Group පරිපාලනය හා සම්බන්ධ සියලුම විධාන 👥---->>>)`},
                {title: " 𝗪𝗲𝗯𝘇𝗼𝗻𝗲 𝗠𝗲𝗻𝘂 ", rowId: `mwebzone`, description: `(<<<----📹 Webzone හා සම්බන්ධ සියලුම විධාන 📹---->>>)`},
                {title: " 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 ", rowId: `mdownloader`, description: `(<<<----📥 Download හා සම්බන්ධ සියලුම විධාන 📥---->>>)`},
                {title: " 𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂 ", rowId: `msearch`, description: `(<<<----🔍Search හා සම්බන්ධ සියලුම විධාන 🔍---->>>)`},
                {title: " 𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂 ", rowId: `mrandom`, description: `(<<<----❔ Random හා සම්බන්ධ සියලුම විධාන ❔---->>>)`},
                {title: " 𝗧𝗲𝘅𝘁 𝗣𝗿𝗼 𝗠𝗲𝗻𝘂 ", rowId: `mtextpro`, description: `(<<<----❇ Text Pro හා සම්බන්ධ සියලුම විධාන ❇---->>>)`},
                {title: " 𝗣𝗵𝗼𝘁𝗼 𝗼𝘅𝘆 𝗠𝗲𝗻𝘂 ", rowId: `mphotooxy`, description: `(<<<----🎑️ Photo Oxy හා සම්බන්ධ සියලුම විධාන 🎑️---->>>)`},
                {title: " 𝗘𝗽𝗵𝗼𝘁𝗼 𝗠𝗲𝗻𝘂 ", rowId: `mephoto`, description: `(<<<----🗳 Ephoto හා සම්බන්ධ සියලුම විධාන 🗳---->>>)`},
                {title: " 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂 ", rowId: `mfun`, description: `(<<<----🔫 සතුට/ක්‍රීඩා හා සම්බන්ධ සියලුම විධාන 🔫---->>>)`},
                {title: " 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂 ", rowId: `mconvert`, description: `(<<<----♻️ Convert හා සම්බන්ධ සියලුම විධාන ♻️---->>>)`},
                {title: " 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂 ", rowId: `mmain`, description: `(<<<----💾 ප්‍රධාන  විධාන 💾---->>>)`},
                {title: " 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗠𝗲𝗻𝘂 ", rowId: `mdatabase`, description: `(<<<----🗃️ Database හා සම්බන්ධ සියලුම විධාන  🗃️---->>>)`},
                {title: " 𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗠𝗲𝗻𝘂 ", rowId: `manonymous`, description: `(<<<----🎭 Anonymous Chat හා සම්බන්ධ සියලුම විධාන 🎭---->>>)`},
                {title: " 𝗩𝗼𝗶𝗰𝗲 𝗠𝗲𝗻𝘂 ", rowId: `mvoice`, description: `(<<<----🎶 Voice හා සම්බන්ධ සියලුම විධාන 🎶---->>>)`},
                {title: " 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ", rowId: `mowner`, description: `(<<<----🎟 හිමිකරු හා  සම්බන්ධ සියලුම විධාන 🎟---->>>)`},
                {title: " 𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 𝗠𝗲𝗻𝘂 ", rowId: `mbugmenu`, description: `(<<<----☠️ මෙම විධාන භාවිතා කල හැක්කේ බොට් හිමිකරු හට පමණි ☠️---->>>)`},
                {title: " 𝗧𝗼𝗼𝗹 𝗠𝗲𝗻𝘂 ", rowId: `mtools`, description: `(<<<----🔧️ Tools හා  සම්බන්ධ සියලුම විධාන 🔧️---->>>)`},
                {title: " 𝗕𝗼𝘁 𝗜𝗻𝗳𝗼 𝗠𝗲𝗻𝘂 ", rowId: `mbotinfomenu`, description: `(<<<----💉️ බොට් පිළිබදව සියලුම විධාන 💉️---->>>)`},
                {title: " 𝘿𝙤𝙣𝙖𝙩𝙚 ", rowId: `mdonate`, description: `(<<<----🥺️ Donate කර උපකාර කිරීම සදහා 🥺️---->>>)`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, kukiw, ripo, `*Hello ${pushname}*!`, `𝗤𝘂𝗲𝗲𝗻 𝗠𝗗 𝗠𝗲𝗻𝘂`, sections, m)
                await Queen.sendMessage(m.chat, { audio: { url: `https://github.com/DarkWinzo/Queen-MD-Module/raw/main/src/Menu.mp3` }})
                 }
                break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mgroup)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'mgroup': {
goup = `┏━━━ꕥ〔 *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}groupinfo
┃✾ ${prefix}linkgroup
┃✾ ${prefix}disappear [option]
┃✾ ${prefix}setppgroup [image]
┃✾ ${prefix}setsubject [text]
┃✾ ${prefix}setdesc [text]
┃✾ ${prefix}group [option]
┃✾ ${prefix}editinfo [option]
┃✾ ${prefix}add @user
┃✾ ${prefix}kick @user
┃✾ ${prefix}tagall [text]
┃✾ ${prefix}hidetag [text]
┃✾ ${prefix}totag [text]
┃✾ ${prefix}antilink [on/off]
┃✾ ${prefix}antibadword [on/off]
┃✾ ${prefix}mute [on/off]
┃✾ ${prefix}promote @user
┃✾ ${prefix}demote @user
┃✾ ${prefix}vote [text]
┃✾ ${prefix}devote
┃✾ ${prefix}upvote
┃✾ ${prefix}checkvote
┃✾ ${prefix}deletevote
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `📇️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, goup, ripo, m)
              }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mwebzone)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
      case 'mwebzone': {
wbzone = `┏━ꕥ〔 *𝗪𝗲𝗯𝘇𝗼𝗻𝗲 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}covid [Sri Lanka Only]
┃✾ ${prefix}weather [Location]
┃✾ ${prefix}playstore
┃✾ ${prefix}apk
┃✾ ${prefix}apkmod
┃✾ ${prefix}phones
┃✾ ${prefix}cinemashedule
┃✾ ${prefix}nowplayingbioskop
┃✾ ${prefix}community
┃✾ ${prefix}wattpad
┃✾ ${prefix}webtoons
┃✾ ${prefix}drakor
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `💹️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, wbzone, ripo, m)
             }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mdownloader)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            
            case 'mdownloader': {
dwnloader = `┏━ꕥ〔 *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}tiktoknowm [url]
┃✾ ${prefix}tiktokwm [url]
┃✾ ${prefix}tiktokmp3 [url]
┃✾ ${prefix}instagram [url]
┃✾ ${prefix}twitter [url]
┃✾ ${prefix}twittermp3 [url]
┃✾ ${prefix}facebook [url]
┃✾ ${prefix}pinterestdl [url]
┃✾ ${prefix}ytmp3 [url]
┃✾ ${prefix}ytmp4 [url]
┃✾ ${prefix}getmusic [query]
┃✾ ${prefix}getvideo [query]
┃✾ ${prefix}ummadl [url]
┃✾ ${prefix}soundcloud [url]
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `📥️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, dwnloader, ripo, m)
              }
            break
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(msearh)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'msearch': {
sarch = `┏━ꕥ〔 *𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}play [query]
┃✾ ${prefix}song [query]
┃✾ ${prefix}yts [query]
┃✾ ${prefix}google [query]
┃✾ ${prefix}googleimage [query]
┃✾ ${prefix}gcsearch [query]
┃✾ ${prefix}pinterest [query]
┃✾ ${prefix}wallpaper [query]
┃✾ ${prefix}wikimedia [query]
┃✾ ${prefix}ytsearch [query]
┃✾ ${prefix}ringtone [query]
┃✾ ${prefix}stalk [option] [query]
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🔍️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, sarch, ripo, m)
              }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mrandom)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
     case 'mrandom': {
rndom = `┏━ꕥ〔 *𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}coffe
┃✾ ${prefix}quotesanime
┃✾ ${prefix}couple
┃✾ ${prefix}couplematch
┃✾ ${prefix}anime
┃✾ ${prefix}waifu
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🧩️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, rndom, ripo, m)
              }
            break       
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mtextpro)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            case 'mtextpro': {
txtpro = `┏━ꕥ〔 *𝗧𝗲𝘅𝘁 𝗣𝗿𝗼 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}3dchristmas
┃✾ ${prefix}3ddeepsea
┃✾ ${prefix}americanflag
┃✾ ${prefix}3dscifi
┃✾ ${prefix}3drainbow
┃✾ ${prefix}3dwaterpipe
┃✾ ${prefix}halloweenskeleton
┃✾ ${prefix}sketch
┃✾ ${prefix}bluecircuit
┃✾ ${prefix}space
┃✾ ${prefix}metallic
┃✾ ${prefix}fiction
┃✾ ${prefix}greenhorror
┃✾ ${prefix}transformer
┃✾ ${prefix}berry
┃✾ ${prefix}thunder
┃✾ ${prefix}magma
┃✾ ${prefix}3dcrackedstone
┃✾ ${prefix}3dneonlight
┃✾ ${prefix}impressiveglitch
┃✾ ${prefix}naturalleaves
┃✾ ${prefix}fireworksparkle
┃✾ ${prefix}matrix
┃✾ ${prefix}dropwater
┃✾ ${prefix}harrypotter
┃✾ ${prefix}foggywindow
┃✾ ${prefix}neondevils
┃✾ ${prefix}christmasholiday
┃✾ ${prefix}3dgradient
┃✾ ${prefix}blackpink
┃✾ ${prefix}gluetext
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `⌨️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, txtpro, ripo, m)
             }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mphotooxy)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//                       
            case 'mphotooxy': {
potooxy = `┏━ꕥ〔 *𝗣𝗵𝗼𝘁𝗼 𝗢𝘅𝘆 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}shadow
┃✾ ${prefix}romantic
┃✾ ${prefix}smoke
┃✾ ${prefix}burnpapper
┃✾ ${prefix}naruto
┃✾ ${prefix}lovemsg
┃✾ ${prefix}grassmsg
┃✾ ${prefix}lovetext
┃✾ ${prefix}coffecup
┃✾ ${prefix}butterfly
┃✾ ${prefix}harrypotter
┃✾ ${prefix}retrolol
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🎑️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, potooxy, ripo, m)
              }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mephoto)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
             case 'mephoto': {
ehoto = `┏━ꕥ〔 *𝗘𝗽𝗵𝗼𝘁𝗼 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}ffcover
┃✾ ${prefix}crossfire
┃✾ ${prefix}galaxy
┃✾ ${prefix}glass
┃✾ ${prefix}neon
┃✾ ${prefix}beach
┃✾ ${prefix}blackpink
┃✾ ${prefix}igcertificate
┃✾ ${prefix}ytcertificate
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `📷️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, ehoto, ripo, m)
              }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mfun)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
           case 'mfun': {
mun = `┏━ꕥ〔 *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}afk
┃✾ ${prefix}simisimi
┃✾ ${prefix}halah
┃✾ ${prefix}hilih
┃✾ ${prefix}huluh
┃✾ ${prefix}heleh
┃✾ ${prefix}holoh
┃✾ ${prefix}jadian
┃✾ ${prefix}jodohku
┃✾ ${prefix}tictactoe
┃✾ ${prefix}delttc
┃✾ ${prefix}family100
┃✾ ${prefix}tebak [option]
┃✾ ${prefix}math [mode]
┃✾ ${prefix}suitpvp [@tag]
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🎲️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, mun, ripo, m)
             }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mconvert)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|// 
            case 'mconvert': {
cnvert = `┏━ꕥ〔 *𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}attp
┃✾ ${prefix}ttp
┃✾ ${prefix}removebg
┃✾ ${prefix}wm
┃✾ ${prefix}meme
┃✾ ${prefix}emojimix
┃✾ ${prefix}emojimix2
┃✾ ${prefix}toimage
┃✾ ${prefix}tovideo
┃✾ ${prefix}togif
┃✾ ${prefix}tourl
┃✾ ${prefix}tovn
┃✾ ${prefix}tomp3
┃✾ ${prefix}toaudio
┃✾ ${prefix}ebinary
┃✾ ${prefix}dbinary
┃✾ ${prefix}styletext
┃✾ ${prefix}smeme
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `♻️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, cnvert, ripo, m)
              }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mmain)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//
            case 'mmain': {
min = `┏━ꕥ〔 *𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}ping
┃✾ ${prefix}owner
┃✾ ${prefix}menu / ${prefix}?
┃✾ ${prefix}runtime/uptime
┃✾ ${prefix}delete
┃✾ ${prefix}chatinfo
┃✾ ${prefix}report
┃✾ ${prefix}quoted
┃✾ ${prefix}listpc
┃✾ ${prefix}listgc
┃✾ ${prefix}listonline
┃✾ ${prefix}speedtest
┃✾ ${prefix}qr
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🛡️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, min, ripo, m)     
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(database)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//            
            case 'mdatabase': {
dtbase = `┏━ꕥ〔 *𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}setcmd
┃✾ ${prefix}listcmd
┃✾ ${prefix}delcmd
┃✾ ${prefix}lockcmd
┃✾ ${prefix}addmsg
┃✾ ${prefix}listmsg
┃✾ ${prefix}getmsg
┃✾ ${prefix}delmsg
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `💻️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, dtbase, ripo, m)
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(manonymous)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|// 
            
            case 'manonymous': {
aonymous = `┏━ꕥ〔 *𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}anonymous
┃✾ ${prefix}start
┃✾ ${prefix}next
┃✾ ${prefix}leave
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🎭️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, aonymous, ripo, m)
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(mvoice)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
case 'mvoice': {
vice = `┏━ꕥ〔 *𝗩𝗼𝗶𝗰𝗲 𝗖𝗵𝗮𝗻𝗴𝗲𝗿* 〕ꕥ━⬣
┃✾ ${prefix}bass
┃✾ ${prefix}blown
┃✾ ${prefix}deep
┃✾ ${prefix}earrape
┃✾ ${prefix}fast
┃✾ ${prefix}fat
┃✾ ${prefix}nightcore
┃✾ ${prefix}reverse
┃✾ ${prefix}robot
┃✾ ${prefix}slow
┃✾ ${prefix}tupai
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🎤️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, vice, ripo, m)
             }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo----(owner)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//             
            case 'mowner': {
oner = `┏━ꕥ〔 *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}react [emoji]
┃✾ ${prefix}chat [option]
┃✾ ${prefix}join [link]
┃✾ ${prefix}leave
┃✾ ${prefix}block @user
┃✾ ${prefix}unblock @user
┃✾ ${prefix}bcgroup [text]
┃✾ ${prefix}bcall [text]
┃✾ ${prefix}setppbot [image]
┃✾ ${prefix}setexif
┃✾ ${prefix}setmenu [option]
┃✾ ${prefix}setbotname [text]
┃✾ ${prefix}setbotbio [text]
┃✾ ${prefix}anticall [text]
┃✾ ${prefix}self
┃✾ ${prefix}public
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🤴️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, oner, ripo, m)
              }
            break
            
            
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mbugmenu)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//           
           case 'mbugmenu': {
rbug = `┏━ꕥ〔 *𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}bug1
┃✾ ${prefix}bug2
┃✾ ${prefix}bug3
┃✾ ${prefix}bugnumber1 [number]
┃✾ ${prefix}bugnumber2 [number]
┗━━━━━━ꕥ

┏━ꕥ *⚠️ 𝚆𝚊𝚛𝚗𝚒𝚗𝚐 ⚠️* 
🔐️ මෙම Bug විධාන භාවිතාකිරීමේදී සුදුසු පරිදි Antivirus Option On කරගැනීම අනිවාර්‍ය වන අතර මේ සදහා කිසිදු වගකීමක් මෙම බොට් හෝ අප සතු නොවන අතර භාවිතය සහ වන හානිය පිළිබදව සම්පූර්ණ වගකීම භාවිතා කරන ඔබ සතුය...

🔐️ ඔබගේ ආරක්ශාවට පමනක් භාවිතා කරන්න..සෑමවිටම මෙම Bug Commands භාවිතයෙන් ඔබගේ වට්ස්ඇප් ගිණුම තහනමකට(Banned)  ලක්වීමට හැක.එමනිසා සීමිත ලෙස භාවිතා කරන්න.
┗━━━━━━ꕥ
`
let buttons = [{ buttonId: '.ok', buttonText: { displayText: 'Ok' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendButtonText(m.chat, buttons, rbug, ripo, m)
            await Queen.sendMessage(m.chat, { react: { text: `👹️`, key: m.key }})
            }
            break        
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mtools)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//                 
           case 'mtools': {
aonymous = `┏━ꕥ〔 *𝗧𝗼𝗼𝗹 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}ipdomain
┃✾ ${prefix}ip
┃✾ ${prefix}checknumber
┃✾ ${prefix}veriphone
┃✾ ${prefix}shortlink
┃✾ ${prefix}shortlinkcuttly
┃✾ ${prefix}shortlinkisgd
┃✾ ${prefix}ssweb-hp
┃✾ ${prefix}ssweb-pc
┃✾ ${prefix}brainly
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🔧️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, aonymous, ripo, m)
            }
            break 
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(All Menu)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|// 
           case 'allmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `*${GreetingTime}* හායි @${me.split('@')[0]}\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
┏━━━ꕥ〔 *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}groupinfo
┃✾ ${prefix}linkgroup
┃✾ ${prefix}disappear [option]
┃✾ ${prefix}setppgroup [image]
┃✾ ${prefix}setsubject [text]
┃✾ ${prefix}setdesc [text]
┃✾ ${prefix}group [option]
┃✾ ${prefix}editinfo [option]
┃✾ ${prefix}add @user
┃✾ ${prefix}kick @user
┃✾ ${prefix}tagall [text]
┃✾ ${prefix}hidetag [text]
┃✾ ${prefix}totag [text]
┃✾ ${prefix}antilink [on/off]
┃✾ ${prefix}antibadword [on/off]
┃✾ ${prefix}mute [on/off]
┃✾ ${prefix}promote @user
┃✾ ${prefix}demote @user
┃✾ ${prefix}vote [text]
┃✾ ${prefix}devote
┃✾ ${prefix}upvote
┃✾ ${prefix}checkvote
┃✾ ${prefix}deletevote
┗━ꕥ
┏━ꕥ〔 *𝗪𝗲𝗯𝘇𝗼𝗻𝗲 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}covid [Sri Lanka Only]
┃✾ ${prefix}weather [Location]
┃✾ ${prefix}playstore
┃✾ ${prefix}apk
┃✾ ${prefix}apkmod
┃✾ ${prefix}phones
┃✾ ${prefix}cinemashedule
┃✾ ${prefix}nowplayingbioskop
┃✾ ${prefix}community
┃✾ ${prefix}wattpad
┃✾ ${prefix}webtoons
┃✾ ${prefix}drakor
┗━ꕥ
┏━ꕥ〔 *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}tiktoknowm [url]
┃✾ ${prefix}tiktokwm [url]
┃✾ ${prefix}tiktokmp3 [url]
┃✾ ${prefix}instagram [url]
┃✾ ${prefix}twitter [url]
┃✾ ${prefix}twittermp3 [url]
┃✾ ${prefix}facebook [url]
┃✾ ${prefix}pinterestdl [url]
┃✾ ${prefix}ytmp3 [url]
┃✾ ${prefix}ytmp4 [url]
┃✾ ${prefix}getmusic [query]
┃✾ ${prefix}getvideo [query]
┃✾ ${prefix}ummadl [url]
┃✾ ${prefix}soundcloud [url]
┗━ꕥ
┏━ꕥ〔 *𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}play [query]
┃✾ ${prefix}song [query]
┃✾ ${prefix}yts [query]
┃✾ ${prefix}google [query]
┃✾ ${prefix}googleimage [query]
┃✾ ${prefix}gcsearch [query]
┃✾ ${prefix}pinterest [query]
┃✾ ${prefix}wallpaper [query]
┃✾ ${prefix}wikimedia [query]
┃✾ ${prefix}ytsearch [query]
┃✾ ${prefix}ringtone [query]
┃✾ ${prefix}stalk [option] [query]
┗━ꕥ
┏━ꕥ〔 *𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}coffe
┃✾ ${prefix}quotesanime
┃✾ ${prefix}couple
┃✾ ${prefix}anime
┃✾ ${prefix}waifu
┗━ꕥ
┏━ꕥ〔 *𝗧𝗲𝘅𝘁 𝗣𝗿𝗼 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}3dchristmas
┃✾ ${prefix}3ddeepsea
┃✾ ${prefix}americanflag
┃✾ ${prefix}3dscifi
┃✾ ${prefix}3drainbow
┃✾ ${prefix}3dwaterpipe
┃✾ ${prefix}halloweenskeleton
┃✾ ${prefix}sketch
┃✾ ${prefix}bluecircuit
┃✾ ${prefix}space
┃✾ ${prefix}metallic
┃✾ ${prefix}fiction
┃✾ ${prefix}greenhorror
┃✾ ${prefix}transformer
┃✾ ${prefix}berry
┃✾ ${prefix}thunder
┃✾ ${prefix}magma
┃✾ ${prefix}3dcrackedstone
┃✾ ${prefix}3dneonlight
┃✾ ${prefix}impressiveglitch
┃✾ ${prefix}naturalleaves
┃✾ ${prefix}fireworksparkle
┃✾ ${prefix}matrix
┃✾ ${prefix}dropwater
┃✾ ${prefix}harrypotter
┃✾ ${prefix}foggywindow
┃✾ ${prefix}neondevils
┃✾ ${prefix}christmasholiday
┃✾ ${prefix}3dgradient
┃✾ ${prefix}blackpink
┃✾ ${prefix}gluetext
┗━ꕥ
┏━ꕥ〔 *𝗣𝗵𝗼𝘁𝗼 𝗢𝘅𝘆 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}shadow
┃✾ ${prefix}romantic
┃✾ ${prefix}couplematch
┃✾ ${prefix}smoke
┃✾ ${prefix}burnpapper
┃✾ ${prefix}naruto
┃✾ ${prefix}lovemsg
┃✾ ${prefix}grassmsg
┃✾ ${prefix}lovetext
┃✾ ${prefix}coffecup
┃✾ ${prefix}butterfly
┃✾ ${prefix}harrypotter
┃✾ ${prefix}retrolol
┗━ꕥ
┏━ꕥ〔 *𝗘𝗽𝗵𝗼𝘁𝗼 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}ffcover
┃✾ ${prefix}crossfire
┃✾ ${prefix}galaxy
┃✾ ${prefix}glass
┃✾ ${prefix}neon
┃✾ ${prefix}beach
┃✾ ${prefix}blackpink
┃✾ ${prefix}igcertificate
┃✾ ${prefix}ytcertificate
┗━ꕥ
┏━ꕥ〔 *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}afk
┃✾ ${prefix}simisimi
┃✾ ${prefix}halah
┃✾ ${prefix}hilih
┃✾ ${prefix}huluh
┃✾ ${prefix}heleh
┃✾ ${prefix}holoh
┃✾ ${prefix}jadian
┃✾ ${prefix}jodohku
┃✾ ${prefix}tictactoe
┃✾ ${prefix}delttc
┃✾ ${prefix}family100
┃✾ ${prefix}tebak [option]
┃✾ ${prefix}math [mode]
┃✾ ${prefix}suitpvp [@tag]
┗━ꕥ
┏━ꕥ〔 *𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}attp
┃✾ ${prefix}ttp
┃✾ ${prefix}removebg
┃✾ ${prefix}wm
┃✾ ${prefix}meme
┃✾ ${prefix}emojimix
┃✾ ${prefix}emojimix2
┃✾ ${prefix}toimage
┃✾ ${prefix}tovideo
┃✾ ${prefix}togif
┃✾ ${prefix}tourl
┃✾ ${prefix}tovn
┃✾ ${prefix}tomp3
┃✾ ${prefix}toaudio
┃✾ ${prefix}ebinary
┃✾ ${prefix}dbinary
┃✾ ${prefix}styletext
┃✾ ${prefix}smeme
┗━ꕥ
┏━ꕥ〔 *𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}ping
┃✾ ${prefix}owner
┃✾ ${prefix}menu / ${prefix}?
┃✾ ${prefix}runtime/uptime
┃✾ ${prefix}delete
┃✾ ${prefix}chatinfo
┃✾ ${prefix}report
┃✾ ${prefix}quoted
┃✾ ${prefix}listpc
┃✾ ${prefix}listgc
┃✾ ${prefix}listonline
┃✾ ${prefix}speedtest
┃✾ ${prefix}qr
┗━ꕥ
┏━ꕥ〔 *𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}setcmd
┃✾ ${prefix}listcmd
┃✾ ${prefix}delcmd
┃✾ ${prefix}lockcmd
┃✾ ${prefix}addmsg
┃✾ ${prefix}listmsg
┃✾ ${prefix}getmsg
┃✾ ${prefix}delmsg
┗━ꕥ
┏━ꕥ〔 *𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}anonymous
┃✾ ${prefix}start
┃✾ ${prefix}next
┃✾ ${prefix}leave
┗━ꕥ
┏━ꕥ〔 *𝗩𝗼𝗶𝗰𝗲 𝗖𝗵𝗮𝗻𝗴𝗲𝗿* 〕ꕥ━⬣
┃✾ ${prefix}bass
┃✾ ${prefix}blown
┃✾ ${prefix}deep
┃✾ ${prefix}earrape
┃✾ ${prefix}fast
┃✾ ${prefix}fat
┃✾ ${prefix}nightcore
┃✾ ${prefix}reverse
┃✾ ${prefix}robot
┃✾ ${prefix}slow
┃✾ ${prefix}tupai
┗━ꕥ
┏━ꕥ〔 *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}react [emoji]
┃✾ ${prefix}chat [option]
┃✾ ${prefix}join [link]
┃✾ ${prefix}leave
┃✾ ${prefix}block @user
┃✾ ${prefix}unblock @user
┃✾ ${prefix}bcgroup [text]
┃✾ ${prefix}bcall [text]
┃✾ ${prefix}setppbot [image]
┃✾ ${prefix}setexif
┃✾ ${prefix}setmenu [option]
┃✾ ${prefix}setbotname [text]
┃✾ ${prefix}setbotbio [text]
┃✾ ${prefix}anticall [text]
┃✾ ${prefix}self
┃✾ ${prefix}public
┗━ꕥ
┏━ꕥ〔 *𝗕𝘂𝗴 𝗩𝗶𝗿𝘂𝘀 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}bug1
┃✾ ${prefix}bug2
┃✾ ${prefix}bug3
┃✾ ${prefix}bugnumber1
┃✾ ${prefix}bugnumber2
┗━ꕥ
┏━ꕥ〔 *𝗧𝗼𝗼𝗹 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}ipdomain
┃✾ ${prefix}ip
┃✾ ${prefix}checknumber
┃✾ ${prefix}veriphone
┃✾ ${prefix}shortlink
┃✾ ${prefix}shortlinkcuttly
┃✾ ${prefix}shortlinkisgd
┃✾ ${prefix}ssweb-hp
┃✾ ${prefix}ssweb-pc
┃✾ ${prefix}brainly
┗━ꕥ
┏━ꕥ〔 *𝗕𝗼𝘁 𝗜𝗻𝗳𝗼 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}help
┃✾ ${prefix}donate
┃✾ ${prefix}sc
┃✾ ${prefix}rules
┃✾ ${prefix}sponsor
┗━━━━━━ꕥ
              
                 ᴾᵒʷᵉʳᵉᵈ ᴮʸ Qᵘᵉᵉⁿ⁻ᴹᴰ`
                let buttons = [{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `🍁️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, anu, ripo, m, {mentions: ments})
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo--(mbotinfomenu)-->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//  
            case 'mbotinfomenu': {
aonymous = `┏━ꕥ〔 *𝗕𝗼𝘁 𝗜𝗻𝗳𝗼 𝗠𝗲𝗻𝘂* 〕ꕥ━⬣
┃✾ ${prefix}help
┃✾ ${prefix}donate
┃✾ ${prefix}sc
┃✾ ${prefix}rules
┃✾ ${prefix}sponsor
┗━━━━━━ꕥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `💉️`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, aonymous, ripo, m)
            }
            break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo---->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//                  
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Queen_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
Queen.sendMessage(m.chat, { react: { text: `🎧️`, key: m.key }})
break
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo---->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//      
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
            
        if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
   }
   if (antiToxic)
   if (bad.includes(wizbotv1)) {
   if (m.text) {
   wizv1 = `*ANTIBAD WORDS*\n\n*Lucky you, you are admin*`
   if (isAdmins) return m.reply(wizv1)
   if (m.key.fromMe) return m.reply(wizv1)
   if (isCreator) return m.reply(wizv1)
   kice = m.sender
   await Queen.groupParticipantsUpdate(m.chat, [kice], 'remove')
   Queen.sendMessage(from, {text:`*ANTIBAD WORDS*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
   }
if (isCmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith('broadcast')) return
            if (m.isBaileys) return
            let msgs = global.db.data.database
            if (!(budy.toLowerCase() in msgs)) return
            KingOfBear.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
        }
        }
//|⬡════════════════════════════════════════════|❝ ⒸDarkWinzo---->>>Queen MD™ ❞|═══════════════════════════════════════════⬡|//              

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
