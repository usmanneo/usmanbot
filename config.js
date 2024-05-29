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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923034088220";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_48_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWtzR0dGYitKeDA2QmNybWRnNTZqYlU1VEh5cEhyTkJ3QmxFd3p1NHFlST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMjM4NzYyMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgzNjM2Nzc2QkU3QjA4RjNENTExNDhFNTEwMTY3NDZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjk4MzI4N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEyMzg3NjIzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUM5MTdBNjU3MTIwNjUwREE4NzJCNDUwRkRGMjZGODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTgzMjg3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTIzODc2MjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTBGNUQxNzdCM0E5MDhFMDRGNjg2NjJBQUVEQ0NFNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5ODMyOTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMjM4NzYyMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQxNzQzRDZEOEVBQzEzRkUzNTY1QkQ4MTY3M0MyMjE0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjk4MzI5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5VWJyamp2NVNTS3RUNnBBNVNWUDhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRhZWQyZjU3LWQxY2UtNDc3NC1hODY4LWY4ZWM3NTJjNWVjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAxMjIsXG4gICAgICAyMzQsXG4gICAgICAxLFxuICAgICAgMjAwLFxuICAgICAgMjEsXG4gICAgICAyNTAsXG4gICAgICAxNTgsXG4gICAgICAyMSxcbiAgICAgIDE0MyxcbiAgICAgIDEwNyxcbiAgICAgIDI0NSxcbiAgICAgIDIzMSxcbiAgICAgIDI0NCxcbiAgICAgIDk2LFxuICAgICAgMjksXG4gICAgICAxMjAsXG4gICAgICA0MyxcbiAgICAgIDI0OSxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDIwNSxcbiAgICAgIDI0NCxcbiAgICAgIDI3LFxuICAgICAgMTc5LFxuICAgICAgMTM1LFxuICAgICAgMjA1LFxuICAgICAgMCxcbiAgICAgIDEyNixcbiAgICAgIDE0NyxcbiAgICAgIDczLFxuICAgICAgMTgxLFxuICAgICAgMTksXG4gICAgICAxMyxcbiAgICAgIDI0OCxcbiAgICAgIDEzNSxcbiAgICAgIDI1MCxcbiAgICAgIDIzOSxcbiAgICAgIDIxLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRBVzJROE02XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMjM4NzYyMzg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTI3MzMyMDk1MjA1Mjo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkZhbW9mY1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lRjMrTUhFUEdyM0xJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVQ3aHJtT1BQSFU3S2NQYXdvRFQ4dVRraktsZmI2dVdicGoxcmNoakdWVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5M3doZ2VFMUtiUWEvZWlQclJYd0MzdzhpOVF6clZjWmFjbDNabC9OV3ppeTBFcEN1ZmtvS3Z0ZzZ1QjR2Z3cvYkx4RUw5T0k1WWhFdGU5VE5DODNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVTUlYdFkxZ25qcHA2cno1SmtRT0xCeXVHeEZkSXUvM2psUW5CODVMSWVJNzgyRG1kSlNvWS9yYUcvNkJnUHFXeExvWUU3cVVubVFtV0s0ZGlHZmhEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMjM4NzYyMzg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTgzMjg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEFBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMQUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKMTJRZ2ZQRVFKUTIzc3ordHRPRlV6dUpVdUVTTzFXTzJOZXlmWjR0bTB3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODgyMjM0MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjk4MzI4NTgwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
