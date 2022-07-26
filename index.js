// import the package
const Chat = require("chatbot-discord");
const Discord = require('discord.js');
const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => res.send('Created By CodeWhiteWeb  , Check Out Chatari :  https://dsc.gg/chatari       ,   all Possible parameters for chatbot settings :-    https://gist.github.com/CodeWhiteWeb/af80da4c1942f6a5df7118a3f64ea363 '))

app.listen(port, () =>
  console.log(`Your app is listening to http://localhost:${port}`)
)

const client = new Discord.Client();
client.login(process.env.token);
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

client.on("message", async message => {
  if (message.channel.name == "chatbot") {
    if (message.author.bot) return;
    // var assign
    let uid = message.author.id
    let msg = message.content
    
    
    
    //new chat
    const chat = new Chat({
      user: uid,
      name: "Chatari"//name of bot
      // all Possible parameters :-    https://gist.github.com/CodeWhiteWeb/af80da4c1942f6a5df7118a3f64ea363
    });



    
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
      return message.channel.send(`**:x: Please dont mention anyone**`);
    }
    message.channel.startTyping();
    if (!message.content) return message.channel.send("Please say something.");
    chat.chat(msg).then(reply => {
      message.channel.send(reply, ' \n <@${message.author.id}>')
    })
    message.channel.stopTyping();
  }
});

/* Created By CodeWhiteWeb
My profile : https://github.com/CodeWhiteWeb
NPM Package link : https://codewhiteweb.cf/Chatbot-discord
 better version :- https://dsc.gg/chatari */


//bot login
client.login(process.env.token);