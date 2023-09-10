const { Message, Client, EmbedBuilder } = require("discord.js");
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
const {addXu,truXu} = require("../../data")
module.exports = {
    name:"slot",
    aliases:["sl","xeng"],
    /**
     * @param {Message} msg 
     * @param {Client} client 
     */
async run(msg,client,args) {
const item = ["<a:paimon_cookie:1122850090097328178>","<:xu:1144503064930291772>","<:hd:1144852448385695755>","<:xp:1135120624537305170>","<:token:1135229317928980561>","🥴"]
let user = msg.author;
    let money = parseInt(args[0]);
    let win = false;

    if(!money || money > 250||money == NaN) return msg.reply(`Vui lòng điền số xu cược ≤ 250`)
sql= `SELECT xu FROM stats WHERE user = ?`
db.all(sql,[msg.author.id],(e,rows)=>{
  if(e) return msg.reply(`Đã xảy ra lỗi ! Vui lòng thử lại sau!`)
  else {
if(rows.length === 0 ) msg.reply(`Bạn chưa tham gia Event!`)
else {
  rows.forEach(row=>{
    if(money > row.xu) msg.reply(`Bạn không đủ xu!🤡`)
    else {
      let number = []
      for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * item.length); }
      if (number[0] == number[1] && number[1] == number[2])  { 
        money *= 5
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let s1 = new EmbedBuilder()
        .setTitle("KẾT QUẢ")
        .setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()})
        .setFooter({text:`Bạn đã thắng ${money} xu`})
            .setDescription(`꒰${item[number[0]]} ┊ ${item[number[1]]} ┊ ${item[number[2]]}꒱`)
            .setColor("Green")
            msg.channel.send({embeds:[s1]})
            addXu(msg.author.id,money-parseInt(args[0]))
    } else {
        let s2 = new EmbedBuilder()
        .setTitle("KẾT QUẢ")
        .setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()})
        .setFooter({text:`Bạn đã mất ${money} xu`})
            .setDescription(`꒰${item[number[0]]} ┊ ${item[number[1]]} ┊ ${item[number[2]]}꒱`)
            .setColor("Red")
       msg.channel.send({embeds:[s2]})
       truXu(msg.author.id,parseInt(args[0]))
    }
  }
  })
}}
})

}
}