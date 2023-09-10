const { Client, EmbedBuilder, Message, ChannelType } = require("discord.js");
const nv = require("./Data/quest")
const quest = [nv.Chat,nv.Confession,nv.Reaction,nv.Story,nv.Chat2,nv.Story2,nv.Story3,nv.Image]
const m = require("moment")
const d2 = require("pro.db")
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
 /**
 * @param {Message} msg 
 */
function start(msg) {
    sql  = `SELECT * FROM stats WHERE user = ?`
db.all(sql,[msg.author.id],(e,rows)=>{
    if(e) return console.log(e.message);
    if(rows.length === 0) {
sql = `INSERT OR REPLACE INTO stats(user,xp,xu,voice) VALUES (?,?,?,?)`
    db.run(sql,[msg.author.id,0,150,0])
sql = `INSERT OR REPLACE INTO item(user,x2,q) VALUES (?,?,?)`
db.run(sql,[msg.author.id,0,0],e=> {
    if(e) return console.log(e.message);
})
    }
else { 
    msg.reply(`Bạn đã tham gia Event từ trước rồi ^^!`)
}
})
};
/**
 * @param {Message} msg
 */
function quests(msg) {
    const td = d2.get(msg.author.id)
    sql = `SELECT * FROM stats WHERE user = ?`
db.all(sql,[msg.author.id],(e,rows)=>{
    if(e) return console.log(e.message);
    if(rows.length === 0) {
        msg.reply(`Bạn chưa tham gia Event!\n Nếu muốn hãy sử dụng lệnh \`hdstart\` để bắt đầu tham gia Event!`)
    } 
    sql = `SELECT * FROM quest WHERE user = ?`
    db.all(sql,[msg.author.id],(e,rows)=>{
        if(e) return console.log(e.message);
        if(rows.length === 0) {
        let nq = quest[Math.floor(Math.random()*8)]
        sql = `INSERT OR REPLACE INTO quest(user,id,name,pt,sl,cn,tt) VALUES(?,?,?,?,?,?,?) `
if(msg.member.roles.cache.has("1146791716549042228")) {
    if(td < 6 || !td) {
        d2.add(msg.author.id,1)
        msg.reply({embeds:[
            new EmbedBuilder()
            .setTitle("Nhiệm vụ mới")
            .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
            .addFields({name:`${nq.Name}`,value:`Phần thưởng: <:xp:1135120624537305170> ~~${nq.Reward.Normal}~~(${nq.Reward.x2})`})
        ]})
        db.run(sql,[msg.author.id,nq.T,nq.Name+" (Boost x2 EXP)",nq.Reward.x2,nq.Amount,nq.Channel,0],(e)=>{
            if(e) return console.log(e.message);
        })
    }
else {
        msg.reply({embeds:[
            new EmbedBuilder()
            .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
            .setDescription(`Bạn thật giỏi!\nTất cả nhiệm vụ sạch trơn rồi!\n Nhiệm vụ mới sẽ có vào <t:${m().endOf("day").unix()}:R> `)
            .setFooter({text:`Số nhiệm vụ đã hoàn thành: ${td-1}/5 🎉`})
        ]})
sql = `DELETE FROM quest WHERE user = ?`
db.run(sql,[msg.author.id])
    }
} 
else if(msg.member.roles.cache.has("1144508554632495164")) {
    if(td < 6||!td) {
        d2.add(msg.author.id,1)
        msg.reply({embeds:[
            new EmbedBuilder()
            .setTitle("Nhiệm vụ mới")
            .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
            .addFields({name:`${nq.Name}`,value:`Phần thưởng: <:xp:1135120624537305170> ~~${nq.Reward.Normal}~~(${nq.Reward.Boost})`})
        ]})
        db.run(sql,[msg.author.id,nq.T,nq.Name+" (Boost x1.5 EXP)",nq.Reward.Boost,nq.Amount,nq.Channel,0],(e)=>{
            if(e) return console.log(e.message);
        })
    }
else {
        msg.reply({embeds:[
            new EmbedBuilder()
            .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
            .setDescription(`Bạn thật giỏi!\nTất cả nhiệm vụ sạch trơn rồi!\n Nhiệm vụ mới sẽ có vào <t:${m().endOf("day").unix()}:R> `)
            .setFooter({text:`Số nhiệm vụ đã hoàn thành: ${td-1}/5 🎉`})
        ]})
sql = `DELETE FROM quest WHERE user = ?`
db.run(sql,[msg.author.id])
    }
} else {
    if(td < 6 || !td) {
        d2.add(msg.author.id,1)
        msg.reply({embeds:[
            new EmbedBuilder()
            .setTitle("Nhiệm vụ mới")
            .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
            .addFields({name:`${nq.Name}`,value:`Phần thưởng: <:xp:1135120624537305170> ${nq.Reward.Normal}`})
        ]})
        db.run(sql,[msg.author.id,nq.T,nq.Name,nq.Reward.Normal,nq.Amount,nq.Channel,0],(e)=>{
            if(e) return console.log(e.message);
        })
    }
else {
        msg.reply({embeds:[
            new EmbedBuilder()
            .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
            .setDescription(`Bạn thật giỏi!\nTất cả nhiệm vụ sạch trơn rồi!\n Nhiệm vụ mới sẽ có vào <t:${m().endOf("day").unix()}:R> `)
            .setFooter({text:`Số nhiệm vụ đã hoàn thành: ${td-1}/5 🎉`})
        ]})
sql = `DELETE FROM quest WHERE user = ?`
db.run(sql,[msg.author.id])
    }
} };
        rows.forEach((row)=>{
    if(td === 6) {
        msg.reply({embeds:[
            new EmbedBuilder()
            .setTitle("Bảng nhiệm vụ")
        .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
        .setDescription(`Bạn thật giỏi!\nTất cả nhiệm vụ sạch trơn rồi!\n Nhiệm vụ mới sẽ có vào <t:${m().endOf("day").unix()}:R> `)
        .setFooter({text:`Số nhiệm vụ đã hoàn thành: ${td-1}/5 🎉`})
        ]})
sql= `DELETE FROM quest WHERE user = "${msg.author.id}"`
db.run(sql)
            }
        else {
            msg.reply({embeds:[
                new EmbedBuilder()
            .setTitle("Bảng nhiệm vụ")
            .setColor("Yellow").setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()}).setThumbnail("https://cdn-icons-png.flaticon.com/512/7139/7139531.png")
            .addFields({name:row.name,value:`Phần thưởng: <:xp:1135120624537305170> ${row.pt}\n >>> Tiến độ: \`[${row.tt}/${row.sl}]\``})
            .setFooter({text:`Số nhiệm vụ đã hoàn thành: ${td-1}/5`})
            ]})
        }
        })
    })
})
};
/**
 * @param {Message} msg
 */
function stats(msg) {
 sql= `SELECT * FROM stats WHERE user = ?`
db.all(sql,[msg.author.id],(e,rows)=>{
    if(e) return msg.reply(`\`\`\`${e.message}\`\`\``);
if(rows.length == 0) {
    msg.reply(`Bạn chưa tham gia Event!\n Nếu muốn hãy sử dụng lệnh \`hdstart\` để bắt đầu tham gia Event!`)
} 
else {
    const embed = new EmbedBuilder()
    .setAuthor({name:msg.author.username,iconURL:msg.author.displayAvatarURL()})
    .setThumbnail(msg.author.displayAvatarURL())
    .setTimestamp()
    let str;
    rows.forEach(row => {
        embed.addFields({name:"EXP",value:`<:xp:1135120624537305170>${row.xp}`,inline:true},{name:"Xu",value:`<:xu:1144503064930291772>${row.xu}`,inline:true},{name:"Voice",value:`${require("ms-convert")(row.voice)}`})
    })
    if(msg.member.roles.cache.has("1146791716549042228")) {
        str = `* (x2 EXP) Tất cả nhiệm vụ, Chat`
                    embed.addFields({name:"Đặc quyền",value:str,inline:true})  }
 else if(msg.member.roles.cache.has("1144508554632495164")) {
 str = `* (x1.5 EXP) Tất cả nhiệm vụ, Chat\n* Voice +1 <:xp:1135120624537305170> mỗi phút\n* Vật phẩm giảm giá!`
 embed.addFields({name:"Đặc quyền Booster",value:str,inline:true})
} 
    msg.reply({embeds:[embed]})

}
})
};
/**
 * @param {Client} client
 * @param {Message} msg
 */
function chat(client,msg) {
    sql = `SELECT * FROM stats WHERE user = ?`
db.all(sql,[msg.author.id],(e,rows)=>{
    if(rows.length === 0) return;
    rows.forEach(row => {
    sql = `SELECT * FROM quest WHERE user = ?`
db.all(sql,[msg.author.id],(e,rows)=>{
    if(e) return console.log(e.message);
    if(rows.length === 0) {
        sql = `UPDATE stats SET xp = xp + ? WHERE user = ?`
if(msg.member.roles.cache.has("1146791716549042228")) {
    db.run(`UPDATE stats SET xp = xp + ? WHERE user = ?`,[2,msg.author.id])
} else if(msg.member.roles.cache.has("1144508554632495164")) {
    db.run(`UPDATE stats SET xp = xp + ? WHERE user = ?`,[1.5,msg.author.id])
} else {
    db.run(`UPDATE stats SET xp = xp + ? WHERE user = ?`,[1,msg.author.id])
}
    } 
    rows.forEach(row=>{
        if(row.id === "c1") {
    if(msg.channel.id === "1111480098529480804") {
        if(row.tt === row.sl) {
            sql = `UPDATE quest SET id = null WHERE user = ?`
        db.run(sql,[msg.author.id],(e)=>{
            if(e) return msg.reply(`\`\`\`${e.message}\`\`\``);
            msg.channel.send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${row.pt}**, <:xu:1144503064930291772> **45**`)
        sql = `UPDATE stats SET xp = xp +? , xu = xu + ? WHERE user = ?`
        db.run(sql,[row.pt,45,msg.author.id],(e)=>{
            if(e) return console.log(e.message);
        db.run(`DELETE FROM quest WHERE user = ?`,[msg.author.id])
        })
        
        })
                    }
                    else {
        sql = `UPDATE quest SET tt = tt + 1 WHERE user = ?`
        db.run(sql,[msg.author.id])
                    }
    }
        }
if(row.id == "ht") {
        if(msg.channel.id) {
        if(row.tt < 1) {
            msg.channel.send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${row.pt}**, <:xu:1144503064930291772> **20**`)
        sql = `UPDATE stats SET xp = xp +? , xu = xu + ? WHERE user = ?`
        db.run(sql,[row.pt,20,msg.author.id],(e)=>{
            if(e) return console.log(e.message);
        db.run(`DELETE FROM quest WHERE user = ?`,[msg.author.id])
        })}
    }
sql = `UPDATE stats SET xp = xp + ? WHERE user = ?`
db.run(sql,[1,msg.author.id])
}
if(row.id === "c2") {
    if(msg.channel.type === ChannelType.PublicThread || ChannelType.PrivateThread) {
            if(row.tt < 1) {
                sql = `UPDATE quest SET tt = sl WHERE user = ?`
            db.run(sql,[msg.author.id],(e)=>{
                if(e) return client.users.cache.get(msg.author.id).send(`\`\`\`${e.message}\`\`\``);
                client.users.cache.get(msg.author.id).send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${row.pt}**, <:xu:1144503064930291772> **25**`)
            sql = `UPDATE stats SET xp = xp +? , xu = xu + 25 WHERE user = ?`
            db.run(sql,[row.pt,msg.author.id],(e)=>{
                if(e) return console.log(e.message);
            db.run(`DELETE FROM quest WHERE user = ?`,[msg.author.id])
            })
            
            })
                }
                
    }
sql = `UPDATE stats SET xp = xp + ? WHERE user = ?`
db.run(sql,[1,msg.author.id])
} if(row.id === "s3") {
    if(msg.channel.type === ChannelType.PublicThread ) {
        if(row.tt < 1) {
                sql = `UPDATE quest SET tt = sl WHERE user = ?`
            db.run(sql,[msg.author.id],(e)=>{
                if(e) return client.users.cache.get(msg.author.id).send(`\`\`\`${e.message}\`\`\``);
                client.users.cache.get(msg.author.id).send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${row.pt}**, <:xu:1144503064930291772> **45**`)
            sql = `UPDATE stats SET xp = xp +? , xu = xu + 45 WHERE user = ?`
            db.run(sql,[row.pt,msg.author.id],(e)=>{
                if(e) return console.log(e.message);
            db.run(`DELETE FROM quest WHERE user = ?`,[msg.author.id])
            })
            
            })
                }                
    }
sql = `UPDATE stats SET xp = xp + ? WHERE user = ?`
db.run(sql,[1,msg.author.id])
} 
if(row.id === "i") {
    if(msg.attachments) {
        if(row.tt < 1) {
            sql = `UPDATE quest SET tt = sl WHERE user = ?`
        db.run(sql,[msg.author.id],(e)=>{
            if(e) return client.users.cache.get(msg.author.id).send(`\`\`\`${e.message}\`\`\``);
            client.users.cache.get(msg.author.id).send(`🎉Bạn đã hoàn thành nhiệm vụ và nhận được <:xp:1135120624537305170> **${row.pt}**, <:xu:1144503064930291772> **10**`)
        sql = `UPDATE stats SET xp = xp +? , xu = xu + 10 WHERE user = ?`
        db.run(sql,[row.pt,msg.author.id],(e)=>{
            if(e) return console.log(e.message);
        db.run(`DELETE FROM quest WHERE user = ?`,[msg.author.id])
        })
        
        })
            }   
    }
                
sql = `UPDATE stats SET xp = xp + ? WHERE user = ?`
db.run(sql,[1,msg.author.id])
}

    })
})
    })
})
}
/**
 */
function nq() {
   sql = `DELETE FROM quest`
db.run(sql)
d2.reset()
}
/**
 * @param {String} user Người nhận (ID)
 * @param {Number} amount Điền số xu
 */
function addXu(user,amount) {
sql = `SELECT * FROM stats WHERE user = "${user}"`
db.all(sql,(e,rows)=>{
    if(e) {console.log(e.message)};
    if(rows.length === 0) return;
    else {
        sql = `UPDATE stats SET xu = xu + ? WHERE user = ?`
db.run(sql,[amount,user],(e)=>{
if(e) return console.log(e.message);
})
    }
})
};
/**
 * @param {String} user Người nhận (ID)
 * @param {Number} amount Điền số xu
 */
function truXu(user,amount) {
    sql = `UPDATE stats SET xu = xu - ? WHERE user = ?`
    db.run(sql,[amount,user],(e)=>{
    if(e) return console.log(e.message);
    })
    };
module.exports = {
    start , quests , stats ,chat ,nq , addXu , truXu
}