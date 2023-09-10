const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
const { EmbedBuilder, Client, User } = require("discord.js");
module.exports = {
    name:"messageReactionAdd",
/**
 * @param {Client} client  
 */
async code(client,reaction,user) {
 sql = `SELECT * FROM stats WHERE user = ?`
 db.all(sql,[user.id],(e,rows)=>{
    if(e) return 
    if(rows.length === 0) return;
sql = `SELECT * FROM quest WHERE user = ?`
db.all(sql,[user.id],(e,rows)=>{
    if(e) return ;
rows.forEach((row)=>{
    if(row.id == "r") {

    sql = `UPDATE stats SET xp = xp + ? , xu = xu + ? WHERE user = ?`

    db.run(sql,[row.pt,10,user.id],(e)=>{
        if(e) return console.log(e.message)
        client.users.cache.get(user.id).send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${row.pt}**, <:xu:1144503064930291772> **10**`)
    })

    sql = `DELETE FROM quest WHERE user = ?`
    db.run(sql,[user.id],(e)=>{
        if(e) return;
    })

    
    }
})
})
 })
        
    }
    }
