//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0o5anN0ZFNuOGlwUnlmbTFUaWo5RWlIdjcxNGQwNlgxSUlUSnZ1cUVIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGttNEpQa2pESVZsR3RnOTFTQjM0cWNFNUlwcWs2aHd3dnUwckF3M1RYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQkNaSVZOQnp3Y21WNE9ld01qRVNDMW1wL0htRXhPdXRIRGxKUFZtMUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzay9rc0Rpck1ZRDh6WnF3UWE1UURhcVN4Q21FSEJKL0doUnBzSjdCWVhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMZU1EUTZJa0IxRnRwNmFiZG1BVVZKdlNveDgwUWVsSnRzVm5lTFZuVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitjOEhBam9YSkREUXRiOTNORDgxb0RnNVBhMDRjOXo5U3h6T01RTHQrRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0p5OUk3MmMvaGNiQkNhOEkveit1TGs1Vi9sRzZqbTllM2pRRE1id3JIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnZHeWVjU21CTlBqYTZQQWdIeUdwbDJMcHVvdFp2ZzVmdEdSazZ3UjBrND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkwNFprSVorWWlXNS9tdk92SFc4VlJQNU1seFRsNktqRDZVNDRwc0ZuVDNxTkViUmxSWGVML2psMElvQUVTRTljR1Ixemc2V3Z3M1lSMFI3cjhHOENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJpVWVWd3R0THJqOUw0YS9BVWZCYzZnQ2RjTVhkeHY5VyttZ20vQ3puR2UwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWaTMtcFlHNlJKR2MxZFk0S09XWXZBIiwicGhvbmVJZCI6ImE4MDY2ZmRmLTM4YzctNGI1Ny05MzE5LTRiOWY4ODI0ZjQ5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZkpSQkFQRUxSSzI0Rk9UakJRNVovYXNoMGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU052M0g1cERDTDEwSlB1UjFISkNobnlydFhnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJZWkVOUFRSIiwibWUiOnsiaWQiOiI5NDc1NzY2MjYzNDo0MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3NTU1NzAzMTkyNzg5ODo0MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhTnM1RURFUGplaGNNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KR2xXdHh3MVI2VzR5SThCdmRJdGxkUlFYYTk0TUNraTZPSklrWi9hdzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZJYWFWTHNmbDFGWUswbjZtK0xZTzIxdktCUHk4cG1VR3BLcklCUy9lc2FVeFFSZU1sZFJKRlZleXZMVmhkQXFXdEo5aTZmRis4UVFibU1JTjVuQ0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtQWhNS3ZWREd0bndERXI5bmVIZXZxcHp3elI0eFFRT1A2Y3JoeXUxWWdBK3puNm5MbGVzL0MvR25KRURSNkdEUWk5VHVLUm5BcXVHRmdhejdJQlBBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU3NjYyNjM0OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRpUnBWcmNjTlVlbHVNaVBBYjNTTFpYVVVGMnZlREFwSXVqaVNKR2Yyc08ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTIxNjAwNSwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "1",
  PASSWORD: 
    process.env.PASSWORD || "rasanjana-54233",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
