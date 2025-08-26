const { cmd } = require("../command");

// ⚡ Ping Command
cmd({
    pattern: "ping",
    alias: ["speed", "pong"],
    use: ".ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const start = Date.now();

        // 🎯 Emoji sets
        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // 🚫 Make sure both emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = Date.now();
        const responseTime = end - start;

        const text = `> *⚡ ANAYAT_AI SPEED: ${responseTime}ms ${reactionEmoji}*`;

        // Send final speed message
        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363420933039839@newsletter",
                    newsletterName: "ANAYAT_AI",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});


// 🍂 Ping2 Command
cmd({
    pattern: "ping2",
    desc: "Check bot's response time (simple).",
    category: "main",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const startTime = Date.now();

        // First message
        const message = await conn.sendMessage(from, { text: "*⏳ PINGING...*" });

        const endTime = Date.now();
        const ping = endTime - startTime;

        // Final response
        await conn.sendMessage(from, { text: `*🔥 ANAYAT_AI SPEED : ${ping}ms*` }, { quoted: message });

    } catch (e) {
        console.error("Error in ping2 command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
