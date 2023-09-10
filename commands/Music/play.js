const djs = require("discord.js")
module.exports = {
    name: "play",
    aliases: ['p',"pn"],
    async run(msg,client,args) {
const music = args.join(" ")
if(!msg.member.voice.channel) {
    msg.reply(`Bạn cần ở trong một kênh voice để sử dụng lệnh này`)
}
const clientVC = msg.guild.members.me.voice.channel;
if (clientVC && clientVC !== msg.member.voice.channel){
    msg.reply(`Bot hiện tại đang được sử dụng tại ${clientVC}!\nVui lòng chuyển qua kênh đó hoặc có thể sử dụng bot khác ^^`)
}

if(music) {
   const rep = await msg.reply(`Đang tìm kiếm \`${music}\``)   
    try {
        client.distube.play(msg.member.voice.channel,`${music}`,{
            member:msg.member,
            textChannel:msg.channel
                })
       } catch(e){
        console.log(e)
       }
setTimeout(() => {
    rep.delete()
}, 5000);     
}
if(!music) {
            msg.reply(`Vui lòng nhập tên hoặc link bài hát trên Youtube hoặc Spotify vào!`)
         }
} 
    }
