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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347070726976";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_34_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzLFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRGQzcTVTVXFxVzJVRzk4N0lwNE1HKzVpQU1wc01nZW83emUzczEycHBibz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDcwNzI2OTc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUVEMTU0QjU2RTQ3NkJCOTBBRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5MTkyNTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDcwNzI2OTc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTU4MkM1NEYwQzU2MjE2MEJEMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5MTkyNTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1FCZVo4bnlSUVM4aEZIcXdab2RWZ1wiLFxuICBcInBob25lSWRcIjogXCI3OTViOTVmMi01NTc0LTQ3YjctYWQwMi1hYmE4MjRmZDgzYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMzEsXG4gICAgICAxMDAsXG4gICAgICAxMjgsXG4gICAgICAzMixcbiAgICAgIDE0NSxcbiAgICAgIDE4LFxuICAgICAgMTUzLFxuICAgICAgMjM1LFxuICAgICAgMjA0LFxuICAgICAgMTc0LFxuICAgICAgMTM3LFxuICAgICAgODUsXG4gICAgICAxOTYsXG4gICAgICAxMTMsXG4gICAgICA5NyxcbiAgICAgIDI0OSxcbiAgICAgIDIyNixcbiAgICAgIDE0NSxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMjIwLFxuICAgICAgMjQsXG4gICAgICAxMjYsXG4gICAgICAxMDYsXG4gICAgICAyMTcsXG4gICAgICAxOTgsXG4gICAgICAxMjEsXG4gICAgICAyMCxcbiAgICAgIDE2NCxcbiAgICAgIDI1NSxcbiAgICAgIDIwMixcbiAgICAgIDc0LFxuICAgICAgMzEsXG4gICAgICAxOCxcbiAgICAgIDY0LFxuICAgICAgMjI3LFxuICAgICAgMjYsXG4gICAgICAyNDcsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0hUTFFGOERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzA3MjY5NzY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDA0Mzc1ODY4NTQwNTU6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJERyBURUNIIEJPVFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xL3VNOFBFTkRBMHJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOUdoWTZIbHpNOWhrZTZBeDRYTi93Ty9ybEZ4TUtlZjRTNHpKYmQ1TER4az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJINVhmQktyKzJBN2FBb3RaOXEyNDRyaCtIdHVNd2pQckxwdzVEb3Z5Y2ErRitMNkJURlJ2cHRxUXpDT0dNTG9CRWZ5Nlk2WS9JVm0xeE5FUVNRVS9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxdS9CbEhBd1J4M204a0pRNmNnVzlWak1xb1dsd0VOMHZ0MHJwMDNVcCtpV2k2NHpHWUN2cDcrZjFad2ZUdzZPR0xXejkrNHI3bXBBanQrb3FoNGNBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDcwNzI2OTc2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4OTE5MjUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVNBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFU0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSWkVxOUFnYVAxbHRJeFVDVXlZRDEvVzhLQXBpRkhTcGJSa2cydjZQdkNBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxOTMxMzI0OTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODkxOTI1MjU4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
