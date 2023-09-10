const { ChannelType, EmbedBuilder, Client} = require("discord.js")
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
module.exports = {
    name:"threadCreate",
/**
 * 
 * @param {Client} client 
 */
async code(client,thread) {
    if(thread.parent.type === ChannelType.GuildForum) {
sql = `SELECT * FROM stats WHERE user = ?`
db.all(sql,[thread.ownerId],(e,rows)=>{
if(e) return console.log(e.message);
    if(rows.length == 0)return;
    rows.forEach(row=>{
        sql = `SELECT * FROM quest WHERE user = ?`
db.all(sql,[thread.ownerId],(e,rows)=>{
    if(e) return;
if(rows.length === 0 ) {
    sql=`UPDATE stats SET xp = xp + ? , xu = xu + ? WHERE user = ?`
db.run(sql,[8,15,thread.ownerId],(e)=>{
    if(e) return;
thread.send(`Bạn đã nhận được <:xp:1135120624537305170> **8** và <:xu:1144503064930291772> **15** từ việc tích cực đăng bài lên <#1021332351923523644>`)
})
} else {
    rows.forEach(async r=>{
if(r.id === "s") {
const messages = await thread.messages.fetch()
const first = messages.first() 
const len = first.content.split(/ +/).length
if(len >= 30) {
sql = `UPDATE stats SET xp = xp + ? , xu = xu + ? WHERE user = ?`
db.run(sql,[r.pt,15,thread.ownerId],(e)=>{
    if(e) return console.log(e.message);
else {
thread.send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${r.pt}**, <:xu:1144503064930291772> **15**`)
sql = `DELETE FROM quest WHERE user = ?`
db.run(sql,[thread.ownerId])
    }

})
} else{}
    }
else if(r.id == "s2") {
    const messages = await thread.messages.fetch()
    const first = messages.first() 
    const anh = first.attachments
if(anh) {
    sql = `UPDATE stats SET xp = xp + ? , xu = xu + ? WHERE user = ?`
db.run(sql,[r.pt,10,thread.ownerId],(e)=>{
    if(e) return console.log(e.message);
else {
thread.send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${r.pt}**, <:xu:1144503064930291772> **10**`)
sql = `DELETE FROM quest WHERE user = ?`
db.run(sql,[thread.ownerId])
    }
})
} 
}
    })
}
})
    })
})
}
    }
}