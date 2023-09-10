const { Collection } = require("discord.js");

const col = new Collection
module.exports = {
    name: 'loop',
    aliases: ['repeat', 'rp'],
async run(msg,client,args) {
    const queue = client.distube.getQueue(msg)
    if(!msg.member.voice.channel) {
        msg.reply(`Bạn cần ở trong một kênh voice để sử dụng lệnh này`)
    }
    const clientVC = msg.guild.members.me.voice.channel;
    if (clientVC && clientVC !== msg.member.voice.channel){
        msg.reply(`Bot hiện tại đang được sử dụng tại ${clientVC}!\nVui lòng chuyển qua kênh đó hoặc có thể sử dụng bot khác ^^`)
    }

        if(!queue) {
            msg.reply(`Hiện tại không có bài hát nào đang phát`)
        } if(queue) {
    if(queue.repeatMode === 0) {
        await client.distube.setRepeatMode(msg, 1)
        msg.reply(`🔁 Đã bật chế độ lặp lại bài hát`)
    } 
    else  {
        await client.distube.setRepeatMode(msg, 0)
        msg.reply(`🔁 Đã tắt chế độ lặp lại bài hát`)
    }
        }
    }
  }