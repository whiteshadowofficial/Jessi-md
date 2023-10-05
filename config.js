/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░██░░███████░░███████░░███████░░██░
░░░░██░░███████░░███████░░███████░░██░
░░░░██░░██╝░░░░░░██╝░╚██░░██╝░╚██░░░░░
░░░░██░░██╗░░░░░░██╗░░░░░░██╗░░░░░░██░
░░░░██░░███████░░███████░░███████░░██░
░░░░██░░███████░░███████░░███████░░██░
░░░░██░░██╝░░░░░░░░░░╚██░░░░░░╚██░░██░
░░░░██░░██╗░░░░░░██╗░╔██░░██╗░╔██░░██░
██╗╔██░░███████░░███████░░███████░░██░
░╚██╝░░░███████░░███████░░███████░░██░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
███░░░░░░░░███░░░░░░████╗░░░░░░░░░░░░░
███╗░░░░░░╔███░░░░░░██╝╚██╗░░░░░░░░░░░
██╚██╗░░╔██╝██░░░░░░██░░╚██░░░░░░░░░░░
██░╚██╗╔██╝░██░░░░░░██░░░██░░░░░░░░░░░
██░░░╚██╝░░░██░░░░░░██░░░██░░░░░░░░░░░
██░░░░░░░░░░██░░░░░░██░░╔██░░░░░░░░░░░
██░░░░░░░░░░██░░░░░░██╗╔██╝░░░░░░░░░░░
██░░░░░░░░░░██░░░░░░████╝░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

Copyright (C) 2021 Mr.White Shadow.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = false;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //This is the new variable for controlling status seen.


//
global.Owner = ["94779529221","94757534153"];         //If you want singal number so global.Owner = ['94779529221'] Change into your number.
global.OwnerNumber = ["94757534153","94779529221"];   //If you want singal number so global.Owner = ['94779529221'] Change into your number.
global.ownertag = ["94779529221"];
global.OwnerName = "Mr.White Shadow";
global.BotName = "Jessi-Md";
global.packname = "Jessi-md bot";                             //Do not change.
global.author = "By: Mr.White Shadow";                               //Do not change.
global.BotSourceCode = "https://github.com/whiteshadowofficial/Jessi-md"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/I1uZccqxoqx5sOPrYHsbyc"; 


//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["."];                                    //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Dhaka, Bangladesh";                   
global.reactmoji = "✅";
global.themeemoji = "💖";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/whiteshadowofficial";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Kick*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Kick!',
    grouponly: 'This command is only made for *Groups*, Kick!',
    privateonly: 'This command is only made for *Private Chat*, Kick!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Just Wait...',
    nolink: 'Please provide me *link*, Kick!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert Kick! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
