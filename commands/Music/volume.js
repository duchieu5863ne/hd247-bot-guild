module.exports = {
    name:"volume",
    aliases:["vol"],
async run(msg,client,args) {
    const vol = args[0]
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
           if(!vol) return msg.reply(`Âm lượng hiện tại: ${queue.volume}%`)
            if(vol > 125||vol=== NaN) return msg.reply(`Vui lòng chỉnh số âm lượng xuống dưới 125%!`)
            else {
                queue.setVolume(Number(vol))
                msg.reply(`Âm lượng đã chỉnh thành:${vol}%`)
            }
        }
    }
}