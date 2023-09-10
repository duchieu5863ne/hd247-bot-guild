const { EmbedBuilder } = require("discord.js");

module.exports= {
    name:"queue",
    aliases:["ds","list"],
async run(msg,client,args) {
    const queue = client.distube.getQueue(msg);
		if (!queue) {
			msg.channel.send('Hiện tại không có bài hát nào đang phát');
		} else {
            const embed = new EmbedBuilder()
            .setTitle("Danh sách phát hiện tại")
            .setDescription(`${queue.songs
                .map(
                    (song, id) =>
                        `**${id ? id : 'Đang phát'}**. [${
                            song.name
                        }](<${song.url}>) - \`${song.formattedDuration}\``,
                )
                .slice(0, 10)
                .join('\n')}`)
msg.channel.send({embeds:[embed]})
		}
}
}