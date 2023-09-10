const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ComponentType, Message, Client } = require("discord.js");
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
const moment = require("moment")
const d2 = require("pro.db")
module.exports = {
  name: "shop",
  aliases: [],
  /**
   * @param {Message} msg 
   * @param {Client} client  
   */
  async run(msg, client, args) {
    let str ;
    const shop = new EmbedBuilder()
    .setAuthor({name:msg.guild.name,iconURL:msg.guild.iconURL()})
    .setTitle("Shop vật phẩm")
    const s1 = new StringSelectMenuBuilder()
    .setCustomId("shop")
    .setPlaceholder("Chọn ở đây!")
    const o1 = new StringSelectMenuOptionBuilder()
    .setLabel(`Vé nhiệm vụ`)
    .setValue("1")
    const o2 = new StringSelectMenuOptionBuilder()
    .setLabel(`Lọ thuốc`)
    .setValue("2")
    sql =`SELECT xu,user FROM stats WHERE user = ?`
db.all(sql,[msg.author.id],async (e,rows)=>{
  if(e) return msg.channel.send("```"+e.message+"```");
  if(rows.length === 0) return  msg.channel.send(`Bạn chưa tham gia Event!\n Nếu muốn hãy sử dụng lệnh \`hdstart\` để bắt đầu tham gia Event!`)
else { 
    sql = `SELECT * FROM item WHERE user = "${msg.author.id}"`
    db.all(sql,(e,rs)=>{
  rs.forEach(r=>{
  })
})
  rows.forEach(async r=>{
    if(msg.member.roles.cache.has("1144508554632495164")) {
      str = `* ID: 01 (<:sq:1135118569449984083> Vé nhiệm vụ) \nDùng trong trường hợp hôm đó bận không làm nhiệm vụ được\n(Không được cộng EXP)\nGiới hạn tuần:\`[${r.q}/2]\` \n> Giá: <:xu:1144503064930291772> **3250** \n\n* ID: 02 (<a:xb:1135229290858950837> Lọ thuốc bí ẩn)\nGiới hạn tuần : \`[${r.x2}/1]\` \n> Giá: <:xu:1144503064930291772> **9850**`    
      }
       else {  
      str = `* ID: 01 (<:sq:1135118569449984083> Vé nhiệm vụ) \nDùng trong trường hợp hôm đó bận không làm nhiệm vụ được\n(Không được cộng EXP)\nGiới hạn tuần : \`[${r.q}/2]\` \n> Giá: <:xu:1144503064930291772> **4750** \n\n* ID: 02 (<a:xb:1135229290858950837> Lọ thuốc bí ẩn)\nGiới hạn tuần : \`[${r.x2}/1]\` \n> Giá: <:xu:1144503064930291772> **11215**`
      }
shop.setDescription(str)
const string = new ActionRowBuilder()
.addComponents(
  s1.addOptions(o1,o2)
)
const rep = await msg.channel.send({embeds:[shop],components:[string]})
const col = rep.createMessageComponentCollector({filter:(i)=>i.user.id === msg.author.id,componentType:ComponentType.StringSelect,time:50000})
col.on("collect",async (i)=>{
 if(i.member.roles.cache.has("1144508554632495164")) {
  if(i.values[0] === "1") {
    sql = `SELECT xu FROM stats WHERE user = "${i.user.id}"`
  db.all(sql,(e,rs)=>{
    if(e) return i.reply({ephemeral:true,content:`\`\`\`${e.message}\`\`\``})
    else {
  rs.forEach(r=>{
    if(r.xu < 3250) return i.reply({ephemeral:true, content:`Bạn cần thêm <:xu:1144503064930291772>**${3250 - r.xu}** để mua vật phẩm này!`})
 else {
sql = `SELECT q FROM item WHERE user = "${i.user.id}"`
db.all(sql,(e,rs)=>{
  if(e)return i.reply({ephemeral:true,content:`\`\`\`${e.message}\`\`\``});
  else {
    rs.forEach(r=>{
      if(r.q < 2) {
        if(d2.get(i.user.id) < 6){
          sql = `DELETE FROM quest WHERE user = "${i.user.id}"`
          db.run(sql)
          sql = `UPDATE stats SET xu = xu - 3250  WHERE user = "${i.user.id}"`
         db.run(sql)
         sql = `UPDATE item SET q = q + 1  WHERE user = "${i.user.id}"`
         db.run(sql)
          d2.set(i.user.id,6) 
          i.reply(`Kiểm tra lệnh \`hdquest\`!`)
        } else {
          i.reply(`Hôm nay bạn đã hoàn thành các quest rồi`)
          sql = `DELETE FROM quest WHERE user = "${i.user.id}"`
          db.run(sql)
        }
      }
    })
  }
})
}
  })}
  })
  }
 } else {
  if(i.values[0] === "1") {
    sql = `SELECT xu FROM stats WHERE user = "${i.user.id}"`
  db.all(sql,(e,rs)=>{
    if(e) return i.reply({ephemeral:true,content:`\`\`\`${e.message}\`\`\``})
    else {
  rs.forEach(r=>{
    if(r.xu < 4750) return i.reply({ephemeral:true, content:`Bạn cần thêm <:xu:1144503064930291772>**${3250 - r.xu}** để mua vật phẩm này!`})
 else {
sql = `SELECT q FROM item WHERE user = "${i.user.id}"`
db.all(sql,(e,rs)=>{
  if(e)return i.reply({ephemeral:true,content:`\`\`\`${e.message}\`\`\``});
  else {
    rs.forEach(r=>{
      if(r.q < 2) {
        if(d2.get(i.user.id) < 6){
          sql = `DELETE FROM quest WHERE user = "${i.user.id}"`
          db.run(sql)
          sql = `UPDATE stats SET xu = xu - 4750  WHERE user = "${i.user.id}"`
         db.run(sql)
         sql = `UPDATE item SET q = q + 1  WHERE user = "${i.user.id}"`
         db.run(sql)
          d2.set(i.user.id,6) 
          i.reply(`Kiểm tra lệnh \`hdquest\`!`)
        } else {
          i.reply(`Hôm nay bạn đã hoàn thành các quest rồi`)
          sql = `DELETE FROM quest WHERE user = "${i.user.id}"`
          db.run(sql)
        }
      } else {
        i.reply({content:"Bạn đã mua 2 lần vật phẩm này trong tuần này"})
      }
    })
  }
})
}
  })}
  })
  }
 }
})
col.on("end",async ()=>{
  rep.delete() 
  msg.delete()
})
  })
}
})
  },
};