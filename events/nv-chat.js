const config = require('../config');
const { Permissions, PermissionsBitField,Client,EmbedBuilder, ChannelType, Collection, Message } = require('discord.js');
 const d2 = require("pro.db")
 const {chat} = require("../data")
 const ms = require("ms")
const moment = require("moment")
const db = require("best.db")
const ChatFilter = require("../chat-filter")
 module.exports = {
  name: "messageCreate",
     /**
  * @param {Client} client
  * @param {Message} msg
  */
  async code(client, msg) {
    const ft = new ChatFilter(msg.content)
    if (msg.author.bot) return;
    const prefix = "hd";
    if (!msg.content.startsWith(prefix)) {
     if(!msg.guild) return; 
     if(ft.filterWord(["fuck","djt","shit","dell"])) {
      msg.delete()
      msg.channel.send(`Vui lòng không viết bậy`)
     }
     if(ft.filterCaps(msg.content)) {
      msg.delete()
      msg.channel.send("Không viết hoa quá nhiều")
     }

    else {
      chat(client,msg)
    } }
if(msg.content.toLowerCase().startsWith(prefix)) {
  if(!msg.guild) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const probably = args.shift()?.toLowerCase();
    if (!probably) return;
    
    const command = client.commands.message.get(probably) || 
                    client.commands.message.find(cmd => cmd.aliases && cmd.aliases.includes(probably));
    if (!command) return;
    
    
    if (command.permissions && !msg.guild.members.cache.get(msg.author.id).permissions.has(command.permissions))
    return msg.channel.send('Bạn cần quyền: `' + [].concat(new Permissions(command.permissions)).join(', ') + "` để sử dụng lệnh này!");

    
    if (command.botPermissions && !msg.guild.members.cache.get(client.user.id).permissions.has(command.botPermissions))
    return msg.channel.send('Bot thiếu quyền để thực hiện lệnh này: `' + [].concat(command.botPermissions).join(', ') + "`");

    try { 
      command.run(msg,client,args)
    } catch (e) {
      console.log(e);
    }
  }
 }} 