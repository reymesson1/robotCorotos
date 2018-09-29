var MailListener = require("mail-listener-next");
var mongoose = require('mongoose');
var express = require('express');
var app = express(); 

var Post = require('./models/post.js');

var mailListener = new MailListener({
  username: "reymesson",
  password: "@ltagracia113",
  host: "imap.gmail.com",
  port: 993, // imap port
  tls: true,
  connTimeout: 10000, // Default by node-imap
  authTimeout: 5000, // Default by node-imap,
  debug: console.log, // Or your custom function with only one incoming argument. Default: null
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX", // mailbox to monitor
  searchFilter: ["UNSEEN",["FROM","Corotos"]], // the search filter being used after an IDLE notification has been retrieved
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
  mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
  attachments: true, // download attachments as they are encountered to the project directory
  attachmentOptions: { directory: "attachments/" }, // specify a download directory for attachments
  // to make server respond to other requests you may want
  // to pause for 'fetchingPauseTime' fetching of the email, because it 'hangs' your app
  fetchingPauseThreshold: null, // amount bytes
  fetchingPauseTime: 5000 // ms to pause fetching and process other requests
});
 
mailListener.start(); // start listening
 
// stop listening
//mailListener.stop();
 
mailListener.on("server:connected", function(){
  console.log("imapConnected");
});
 
mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});
 
mailListener.on("error", function(err){
  console.log(err);
});

const simpleParser = require('mailparser').simpleParser;

mailListener.on("mail", async (mail, seqno, attributes)=>{

  var code;
  console.log("==============================================================")
  code = mail.text[-8+mail.text.indexOf("Por")]+mail.text[-7+mail.text.indexOf("Por")]+mail.text[-6+mail.text.indexOf("Por")]+mail.text[-5+mail.text.indexOf("Por")]+mail.text[-4+mail.text.indexOf("Por")]+mail.text[-3+mail.text.indexOf("Por")]
  console.log(code);
  console.log("==============================================================")

  var posts = new Post({"code":code})
  posts.save(function(err){
    if(!err){
      console.log('User saved!');
    }
  })

});
 
mailListener.on("attachment", function(attachment, email){
  console.log(attachment.path);
}); 

mongoose.connect('mongodb://localhost:27017/project2',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})
