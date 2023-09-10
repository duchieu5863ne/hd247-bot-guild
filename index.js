const { GatewayIntentBits, Client, Collection, Partials, EmbedBuilder,ChannelType, SlashCommandBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle} = require('discord.js')
const fs = require('fs')
const path = require('path')
const express = require("express")
const app = express()
const config = require("./config")
const ms = require("ms-convert")
const {DisTube} = require("distube")
const {SpotifyPlugin} = require("@distube/spotify")
const {SoundCloudPlugin} = require("@distube/soundcloud")
const { loadEvents, LoadCommands } = require('./handlers/functions')
const {newq} = require("./handlers/newquest")
const d3 = require("best.db")
const sqlite3 = require("sqlite3").verbose()
const db =new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
    if(e) return console.log(e.message)
  })
let sql;
const client = new Client({
    shards:"auto",
    intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.AutoModerationConfiguration,GatewayIntentBits.GuildMessageTyping,GatewayIntentBits.GuildIntegrations],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember,Partials.Reaction]
})
client.commands = {
    message: new Collection
}

client.cd = new Collection
client.time = new Collection()
client.distube = new DisTube(client,{
    leaveOnStop:true,
    leaveOnEmpty:true,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    nsfw:false,
    plugins:[
        new SpotifyPlugin(),
        new SoundCloudPlugin()
    ]
})
loadEvents(client, "./events")
LoadCommands(client, './commands')
client.login(config.token)
newq(client)
process.on("unhandledRejection",(e)=>{
    if(e) return console.log(`[Unhandled Rejection] : ${e}`)
})
process.on("uncaughtException",(e)=>{
    if(e) return console.log(`[Uncaught Exception] : ${e}`)
})
client.on("interactionCreate",async (i)=>{
if(i.isChatInputCommand()) {
    if(i.commandId === "1148501932273582110") {
        if(!i.memberPermissions.has("MentionEveryone")) return i.reply({ephemeral:true,content:"Bạn không thể thực hiện lệnh này vì không có quyền!"});
        else {
            const modal =  new ModalBuilder()
        .setTitle("Tạo embed").setCustomId("eb")
        const sp = new ActionRowBuilder()
        .addComponents(
            new TextInputBuilder().setCustomId("td").setRequired(true).setLabel("Tiêu đề").setPlaceholder("Nhập tiêu đề").setStyle(TextInputStyle.Short),)
        const sp2 = new ActionRowBuilder()
        .addComponents(
            new TextInputBuilder().setCustomId("nd").setRequired(true).setLabel("Nội dung").setPlaceholder("Nhập nội dung").setStyle(TextInputStyle.Paragraph)
        ) 
        const sp3 = new ActionRowBuilder()
        .addComponents(new TextInputBuilder().setCustomId("a").setRequired(false).setLabel("Link ảnh").setPlaceholder("Nhập link hoặc bỏ trống").setStyle(TextInputStyle.Short))
        modal.addComponents(sp,sp2,sp3)
       i.showModal(modal)
        }
    }
}
if(i.isModalSubmit()) {
    if(i.customId === "eb") {
        const td = i.fields.getTextInputValue("td") ?? "Không có tiêu đề"
        const nd = i.fields.getTextInputValue("nd")
        const a = i.fields.getTextInputValue("a") || i.guild.iconURL()
const embed= new EmbedBuilder()
.setTitle(td.toString())
.setDescription(nd.toString())
.setThumbnail(a)
.setFooter({text:`Embed đã được tạo bởi ${i.user.username}`})
.setColor("Random")
.setTimestamp()
const ms = await i.channel.send({embeds:[embed]})
i.reply({ephemeral:true,content:`Đã tạo xong, ID là \`${ms.id}\`!`})
    }
}
})
client.on("voiceStateUpdate",async (o,n)=>{
    const mem = o.member || n.member
if(!mem) return;
else {
    if(!n.channel && n.channel) {
        // Rời khỏi kênh
if(mem.roles.cache.has("1146791716549042228") || mem.roles.cache.has("1144508554632495164")) {
sql = `SELECT h FROM voice`
}
    }
}
})