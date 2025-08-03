const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu1",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `╭━━━〔 *${config.BOT_NAME} Main Menu* 〕━━━╮
┃ ✨ *Owner:* ${config.OWNER_NAME}
┃ ⚙️ *Mode:* ${config.MODE}
┃ 📡 *Platform:* Heroku
┃ 🧠 *Type:* NodeJs (Multi Device)
┃ ⌨️ *Prefix:* ${config.PREFIX}
┃ 🧾 *Version:* 3.0.0 Beta
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

🔥 _"Anayat-Ai is not just a bot, it's an experience."_  
✨ _Designed with 💙 by Anayat_
🔍 _Use the commands below to explore the magic🪄._

━━━━━━━━━━━━━━━
> 📌*COMMAND MENU*
━━━━━━━━━━━━━━━

╭─🌐 *GENERAL ZONE*
│ 🌐 .help  
│ 📡 .ping  
│ ⚡ .alive  
│ 🗣️ .tts  
│ 👑 .owner  
│ 😂 .joke  
│ 📜 .quote  
│ 📚 .fact  
│ 🌤️ .weather  
│ 📰 .news  
│ 🖍️ .attp  
│ 🎶 .lyrics  
│ 🎱 .8ball  
│ 👥 .groupinfo  
│ 🛡️ .staff  
│ 📎 .vv  
│ 🌍 .trt  
│ 🖼️ .ss  
│ 🆔 .jid  
╰──────────────

╭─🛡️ *GROUP GUARD*
│ 🚫 .ban  
│ 🔺 .promote  
│ 🔻 .demote  
│ 🔇 .mute  
│ 🔊 .unmute  
│ 🗑️ .delete  
│ 🥾 .kick  
│ ⚠️ .warnings  
│ ⚡ .warn  
│ 🛑 .antilink  
│ 🤬 .antibadword  
│ 🧹 .clear  
│ 📢 .tag  
│ 📣 .tagall  
│ 🤖 .chatbot  
│ 🔁 .resetlink  
│ 👋 .welcome  
│ 🥀 .goodbye  
╰──────────────

╭─🔒 *OWNER PANEL*
│ 🛠️ .mode  
│ 📶 .autostatus  
│ 🧼 .clearsession  
│ 👁‍🗨 .antidelete  
│ 🗑 .cleartmp  
│ 🖼 .setpp  
│ ❤️ .autoreact  
╰──────────────

╭─🎨 *STICKER TOOLS*
│ 🌀 .blur  
│ 🖼️ .simage  
│ 🪄 .sticker  
│ 🔗 .tgsticker  
│ 😂 .meme  
│ 🏷️ .take  
│ 😎 .emojimix  
╰──────────────

╭─🎮 *GAME ROOM*
│ ❌⭕ .tictactoe  
│ 💀 .hangman  
│ 🔤 .guess  
│ ❓ .trivia  
│ ✅ .answer  
│ 🔍 .truth  
│ 🔥 .dare  
╰──────────────

╭─🧠 *AI POWER*
│ 🤖 .gpt  
│ 🧠 .gemini  
│ 🎨 .imagine  
│ 🌌 .flux  
╰──────────────

╭─🎉 *FUN ZONE*
│ 💘 .compliment  
│ 🤬 .insult  
│ 😎 .flirt  
│ 🎭 .shayari  
│ 🌙 .goodnight  
│ 🌹 .roseday  
│ 🎭 .character  
│ ☠️ .wasted  
│ 🚢 .ship  
│ 🤤 .simp  
│ 🤡 .stupid  
╰──────────────

╭─✍️ *TEXT MAKER*
│ 💎 .metallic  
│ 🧊 .ice  
│ ❄️ .snow  
│ ✨ .impressive  
│ 🌌 .matrix  
│ 💡 .light  
│ 🎇 .neon  
│ 👿 .devil  
│ 💜 .purple  
│ ⚡ .thunder  
│ 🌿 .leaves  
│ 🎬 .1917  
│ 🛡️ .arena  
│ 💀 .hacker  
│ 🏖️ .sand  
│ 🩷 .blackpink  
│ 💥 .glitch  
│ 🔥 .fire  
╰──────────────

╭─📥 *MEDIA ZONE*
│ 🎧 .play  
│ 🎵 .song  
│ 📹 .video  
│ ▶️ .ytmp4  
│ 📸 .instagram  
│ 📘 .facebook  
│ 🎞️ .tiktok  
╰──────────────

╭─💻 *GITHUB CORNER*
│ 🖥️ .git  
│ 📂 .github  
│ 🧠 .sc  
│ 🧾 .script  
│ 📦 .repo  
╰──────────────

📢 *Join our channel*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/szymtd.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363420933039839@newsletter',
                        newsletterName: 'Anayat-Ai',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
