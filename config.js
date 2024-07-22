const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50944227630";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_41_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICA2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjE0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9YcENHbCt5cEpJbEpETUtZRllTMEQvakN0RU45VXR3aFBDdG9OZDJnZTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5NDQyMjc2MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgwMkRFRTkzM0M1REY3RDg3OEE2RkVCMTdCMjYxMEQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY3NzMxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTQ0MjI3NjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOTk4MjgxNEEyNDdCNkU5RUREMUEwRjY0Qjk4M0QzQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2NzczMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODk0Z1h5OU9RcE9VeXp1aFVNamVVd1wiLFxuICBcInBob25lSWRcIjogXCI3OWJiMWFjMS1mYjQ3LTQ1ODYtODkzNi03NTgyOTdlZTcxNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTcsXG4gICAgICAyMDEsXG4gICAgICA2LFxuICAgICAgODIsXG4gICAgICAyMzQsXG4gICAgICAzMSxcbiAgICAgIDQ1LFxuICAgICAgMTUzLFxuICAgICAgMTMzLFxuICAgICAgMzMsXG4gICAgICAxNDMsXG4gICAgICAxMjIsXG4gICAgICAxLFxuICAgICAgMjI1LFxuICAgICAgMTY1LFxuICAgICAgMTg0LFxuICAgICAgNzYsXG4gICAgICAxMzAsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDEwNSxcbiAgICAgIDMyLFxuICAgICAgMjQyLFxuICAgICAgNSxcbiAgICAgIDEyNSxcbiAgICAgIDYyLFxuICAgICAgMTM4LFxuICAgICAgMTUsXG4gICAgICAxMDMsXG4gICAgICAyMDUsXG4gICAgICAxMjEsXG4gICAgICA3NCxcbiAgICAgIDI4LFxuICAgICAgMTc5LFxuICAgICAgODgsXG4gICAgICAyNTEsXG4gICAgICAzMSxcbiAgICAgIDE0MixcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0NDlMNERWUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDQyMjc2MzA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNDEzMzM0NjE2MDgyMzoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCZWxsYWJlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdxMEdZUSt1djZ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRQmY2Y0hQLzZEUVM2NHc1ejc1RXJEZi9hb1JqTi8wSHA1Yy82cEEzMXo0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlB4eFN2ZWVLV0FISHM3eTVoUHN1L25rWGYyR1VJMlY3QlZaVXVYc3JmcW8yYjI0NlRUNFE5ZkZPZXBrNUNqYWxYdi9EQjhmVXFBS3RhcE1PTWRWVUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjR4aGtoSVA5cW83NUdLYmx0bFhwL0kxc3RSSE1GVnlpaldqQ1BGTktxM3QxOGZMK3ZRRzZYd3dKMC9pbSt2SG5lSmtST3hjOGxXNU5TdjJEamhBUmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQ0MjI3NjMwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY3NzMxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpmS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmZLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZEk3WDhmOUdEOURDcm8vYTRXclVQMGhEZHU5TENUSjhQd3EvNmF2Zlpzbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTUyMjU2MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY3NzMxMjMyOVwifSIKfQ==" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Carly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
