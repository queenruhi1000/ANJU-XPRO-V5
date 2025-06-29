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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01ja3hPUnVsaGttVEhtano0SXlITjFOWTlxQTdrNldGL2FmQk5iYndGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWZOeEdWSFlxVE5rTHJEaGNIYVFHWXhYZ2FvOUpaa3VKR3pDYUVhNEVDUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTmJ0bW0xOUFoR21lL0x2QlZrMjBBbGI4T09aeVV0bWxxYkt0UTV1d0dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqYWc4MDZtbm80MFFGZ2xtQ2dHa3o4VjV1cmM0aE5IYWI1bzVZbVpOV2xnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLNkd6NnlZc1JUTGwva0hMeTdqMm5qcTFsOXJkVVVFVE1CRzlvUFVRMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV6T0ZaV0xUQy9PdmV1RDg0VjdRMWVNRUxIdHJhODF6WFJsdEV5WHlnVDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05sZW5sbUo3bi9rWDI4Y2xYVFJsSUJVNjJZb0h2d1JwdWNMbVJBcDdsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGJWK0p4c1VONGRLMjlRd0pVRnZXbWdoK1NIaUk4OTI4TnlxbXoyUjNIUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpLYVpaN0VxRFNOaUxiS3Y1NnFPY0JIK3B5Z240NHp0Ly9GWDQzQ1BtNnVNdGtKRXZMakozMCtVYVZkejcxN01vN1F4NElvbUxRdTI1VXh3TTYweGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiJ1MDV5TWdMeituRkFSS0N0cS9Ra0VNS2QydVNzdGpuVlZ1ek16dFc2TVdzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSQlFIcC01ZVRGMklyVkxKcW5zakZRIiwicGhvbmVJZCI6IjRlZTRiNzk4LTliZTEtNDg2Yi1iYzk3LTMzNTkwNDZhMzI4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNNmlFeWNZcTVVb3MzZkF6N1FCVW9hajVxSlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNC9ZTGRzNjFDcU9hWDIvMHJiaHNJZTFZdmZZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMzMTFYWktXIiwibWUiOnsiaWQiOiI5NDc1NzY2MjYzNDo0NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3NTU1NzAzMTkyNzg5ODo0NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BlTnM1RURFSy9paGNNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KR2xXdHh3MVI2VzR5SThCdmRJdGxkUlFYYTk0TUNraTZPSklrWi9hdzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhuZ0w4MkJwU2s2OC83MnpjdnIzZW0zejFhYXFQUVJ5Qk5XR3ZITzRrYitPUlVFOVMrcTFVa3VQd1BWVlFHcGI1eW9KdnFER2FJUzBwaTYySzhCQ0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnN2JPTlpGRlcvUHFCbm9oR3VrT0JPRTlmejFsbmNWdTVUa3M3WlFLSzlGZ3U3STJFVXpaZ3hzdW0wWXMvQ2tydUlncGg3UGM1QTZZa2k4NUlEakRqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU3NjYyNjM0OjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRpUnBWcmNjTlVlbHVNaVBBYjNTTFpYVVVGMnZlREFwSXVqaVNKR2Yyc08ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTIxNjQ0NCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBEeCJ9",
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
