const { Client, Message, ModalSubmitFields } = require("discord.js")
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
module.exports = {
    name:"give",
    aliases:[""],
/**
 * 
 * @param {Message} msg 
 * @param {Client} client 
 */
async run(msg , client , args) {
    const user = msg.mentions.members.first()
    const tien = parseInt(args[1]) 
    if(!tien && !user.id) return;
    if(!tien || tien > 500 ||tien === NaN || tien === 0) return msg.channel.send(`Vui lòng điền số xu muốn chuyển (Nhỏ hơn 500<:xu:1144503064930291772>)`)
    if(user.id === msg.author.id || user.user.bot) return msg.channel.send(`${msg.author.username} đã chuyển <:xu:1144503064930291772> ${tien} đến ${msg.author.username} và nhận được cái nịt :)`)
    else {
        sql = `SELECT xu,user FROM stats WHERE user = ?`
        db.all(sql,[msg.author.id],(e,rows)=>{
            if(e) return msg.reply("```" + e.message + "```")
            if(rows.length == 0) {
                msg.reply(`Bạn chưa tham gia Event!\n Nếu muốn hãy sử dụng lệnh \`hdstart\` để bắt đầu tham gia Event!`)
            }
        rows.forEach(r=>{
        if(user === client.user.bot) msg.channel.send(`Bot không thể nhận xu!`)
            if(tien > r.xu) msg.reply(`Bạn không có đủ xu!`)
            else {
        sql = `SELECT xu,user FROM stats WHERE user = ?`
        db.all(sql,[user.id],(e,rows)=>{
            if(e) return msg.reply("```" + e.message + "```")
            if(rows.length == 0) {
                msg.reply(`Hửm?? Người này chưa tham gia Event!`)
            }
            else {
        sql = `UPDATE stats SET xu = xu + ? WHERE user = ?`
        db.run(sql,[Math.ceil(tien-tien*5/100),user.id],(e)=>{
            if(e) return msg.reply("```" + e.message + "```")
            sql = `UPDATE stats SET xu = xu - ? WHERE user = ?`
        db.run(sql,[Number(tien),msg.author.id],(e)=>{
            if(e) return msg.reply("```" + e.message + "```")
            msg.reply(`${msg.author.username} đã chuyển <:xu:1144503064930291772> **${Math.ceil(tien-tien*5/100)}** đến ${client.users.cache.get(user.id).username}!`)
        })
        })
            }
        })
            }
        })
        })}
}
}
