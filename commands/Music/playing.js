const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'playing',
    aliases: ['np'],
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
            const part = Math.floor((queue.currentTime / queue.songs[0].duration) * 15);
            const embed = new EmbedBuilder()
            .setAuthor({ name:'Đang phát...'})
            .setDescription(`**[${queue.songs[0].name}](${queue.songs[0].url})**`)
            .setThumbnail(`${queue.songs[0].thumbnail}`)
            .addFields({ name: 'Yêu cầu bởi:', value: `${queue.songs[0].user}`, inline: true })
            .addFields({ name: 'Âm lượng:', value: `${queue.volume}%`, inline: true })
            .addFields({ name: 'Chế độ lặp lại:', value: queue.repeatMode ? 'Bật' : "Tắt", inline: true })
            .addFields({ name:`\n`, value: `\`[${queue.formattedCurrentTime} / ${queue.songs[0].formattedDuration}]\`  \`${'-'.repeat(part) + '●' + '-'.repeat(15 - part)}\``, inline: false })
            .setTimestamp()
            msg.reply({embeds:[embed]})
        }
    }
    }
  