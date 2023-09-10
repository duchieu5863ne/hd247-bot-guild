const {EmbedBuilder} = require("discord.js")
module.exports= {
    name:"help",
    aliases:["giup","what"],
async run(msg,client,args) {
const lenh = args[0]
const embed = new EmbedBuilder()
.setAuthor({name:client.user.username,iconURL:client.user.displayAvatarURL()})
.setThumbnail(`https://cdn.discordapp.com/emojis/993321136555302942.webp?size=96&quality=lossless`)
.setColor("Random")
if(!lenh) {
    embed.setDescription(`Đây là bot đã được thực hiện bởi <@821618876545761294>!`)
    embed.addFields({
name:"Lệnh Chung",
value:`>>> * \`hdping\` : Check độ trễ của bot
* \`hdhelp\`(hdhelp + tên lệnh || Bỏ trống) - Xem tất cả lệnh
` },{
name:"Lệnh Sự kiện",
value:`>>> * \`hdstart\` - Bắt đầu tham gia 
* \`hdstats\` [hdme, hdxp, hdcheck] - Check thông tin chỉ số của mình
* \`hdquest\` [hdnv, hdq, hdclan] - Nhận nhiệm vụ và check tiến độ nhiệm vụ
* \`hdleaderboard\` [hdld, hdxh] - Xem bảng xếp hạng
* \`hdshop\` - Xem shop `,
},{
name:"Lệnh Cobac",
value:`>>> * \`hdcf\` (hdcf + mặt + số xu cược) - Đặt cược tiền tung xu
* \`hdslot\` [hdsl] (hdslot + số xu cược) - Chơi xèng
* \`hdluck\` (hdluck + số xu cược) - Chơi số với bot 
* \`hdgive\` (hdgive + ping người nhận + số xu) - Gửi tiền ai đó
`
},
{
name:"Lệnh phát nhạc(Hỗ trợ danh sách phát của Spotify và Youtube nhưng sẽ hơi lâu)",
value:`>>> * \`hdplay\` [hdp] (hdplay + tên bài hát,link nhạc) - Phát nhạc từ Youtube - Spotify
* \`hdstop\` [hdend] - Dừng phát và thoát kênh
* \`hdskip\` [hdboqua, hds] - Bỏ qua bài hát đang phát và phát bài hát tiếp theo
* \`hdpause\` [hdtd] - Tạm dừng bài hát
* \`hdresume\` [hdtt] - Tiếp tục phát bài hát
* \`hdplaying\` [hdnp] - Xem bài hát đang phát
* \`hdqueue\` [hdhc] - Xem danh sách chờ
* \`hdvolume\` [hdvol, hdv] (hdvolume + số < 125) - Chỉnh âm lượng
* \`hdseek\` [hdtua] (hdseek + thời gian |giây|) - Tua đến đoạn trong bài hát
* \`hdback\` - Quay lại bài hát trước
* \`hdloop\` - Lặp lại bài hát / Danh sách phát
`
})
embed.setFooter({text:"Lưu ý: Tất cả các lệnh chỉ hoạt động khi bạn viết hd + tên lệnh"})
}
msg.channel.send({embeds:[embed]})
}
}