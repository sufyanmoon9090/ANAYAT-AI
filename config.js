const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUl1TTNXVkladWc1SlIza2luRUtPQjE4UTIyNGthdnpDRk5zWnYrNVFVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHNwakUzeUhJSmw4OWRGK1Nkei93K21YeHhqbk1xeGdiUVRET3lKbVRVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRitCb2NPUTYrc2JkdDRHZndDT3pPZzdwQ1hzaERyS0NsencwWm96Zm5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXZ2t5bm1ZdnlaYitBMUJPeVJBL1lqM083RlBUUXo5eGRaNytqR2ZVUUdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNQQjR1T1lEVjNSYkJRNkVuVzhIRGRUUVFBZDZoSk1BcHFwMGNBZXcxWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJsTmxsSnVMSytmZzc4R0ZGbVVZcnNyT3pab1BUQjVDYWVUMEZQQVROVGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0M1N0V2K0dCVTBTUjZYTmtpWXloT2dXSzA2Mk5WbWhzeS9FSHVaYWczRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlVRMGpTQjlpVS9GcW1USUcwaVNaV2h2UXRTeHZNdzcwVEUwS1FiOFN5RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlxL2c1M3Y4RmJzcU0xbU9qVXhKYzJMd0RnUnJEQ0dBSVFGdDFaSXdPMEpYc2VKUnNUMXNEZ2pmTm1jNVRnRHBXRU4rNkxXdGF1YVRodlJReFh5bmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6InNyUllIeTNvVDM3VXd5MTdZcW9PM3Y4R0xNN1RPYUhJWnltNUJIaGlFR289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjc2MjU0Mzc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1Mjk5QjE4RUQ0MjU3NjI3Rjg0NjFDMEQzMTdGMTU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk4Mzc5NjV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3NjI1NDM3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUM2Q0VGMDAxMzQzRDFCQjUyRDlGRTJFOTI2MUQ5MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5ODM3OTY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQSjNIQTZHMyIsIm1lIjp7ImlkIjoiOTIzMjc2MjU0Mzc3Ojg1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngVNVRlnwnZmW4aqzTuqngiDwk4apzZtcbvCThqnwk4KN8JOGqvCThqrNmyBcbvCSgLEgXG7wkoCxIFxu8JKAsSBcbvCSgLEgXG7wkoCxIFxu8JKAsSBcbvCSgLEgXG7wkoCxIFxu8JKAsSIsImxpZCI6IjI1NTczOTk2ODkyNTcxNDo4NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2bXBOd0ZFSWYrazhjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkduUUw5QlhQcTNCSmNEaHVzVTZCNSsyVkJKNExFYU1UMy9OSXBDT21MUzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhzVlcwOHdLdVNyWlhwekF2QVhiWUJxVEVnMzlMQTV5MjFvenhMMzNIeTFVOWNhWE91b0Z6YjN5QWU3cnRYSFoyOGNKM1p0bUlYaFlwU1k0WWM4bUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxdTBzR056bFduOTdVUGlpV3lTdGdiU2FUdmpIOXBVOWZiVS9ZMzZrNUlQMm5FbFZNUzgxWHZxanFGcHlGZlRmdmJGZXI2anFmTWZxOVVocDlGV2xpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI3NjI1NDM3Nzo4NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScDBDL1FWejZ0d1NYQTRickZPZ2VmdGxRU2VDeEdqRTkvelNLUWpwaTB2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk4Mzc5NjIsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3hpIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
