module.exports = {
    name:"resume",
    aliases:["tt"],
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
            queue.resume()
          const rep = await msg.channel.send(`⏯️ Tiếp tục phát bài hát!`)
        }
    }
}