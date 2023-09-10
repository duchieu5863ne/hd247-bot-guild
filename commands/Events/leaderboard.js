const { EmbedBuilder, Message, Client } = require('discord.js');
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
module.exports = {
  name: 'leaderboard',
  aliases: ['xh', 'ld'],
  /**
   * 
   * @param {Message} msg 
   * @param {Client} client 
   */
  async run(msg, client, args) {
    sql = `SELECT *, ROW_NUMBER() OVER (ORDER BY xp DESC) AS position, user FROM stats `
    db.all(sql,(e,rows)=>{
        if(e) return msg.channel.send("`"+e.message+"`")
    else {
      const myRow = rows.find(row => row.user === msg.author.id)
      let i = 0
      const page1 = new EmbedBuilder()
      .setAuthor({name:msg.guild.name,iconURL:msg.guild.iconURL()})
      .setThumbnail(msg.guild.iconURL())
      .setTitle(`Bảng xếp hạng EXP`)
      .setTimestamp()
      .addFields({name:"┌───────── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ─────────┐",value:" \n"})
      if(myRow) {
        page1.setDescription(`...\nBạn : #${myRow.position}.${msg.author.username}\n* EXP : <:xp:1135120624537305170> ${myRow.xp} \n* Voice: ${require("ms-convert")(myRow.voice)}\n...`)
      }
      rows.slice(0,10).forEach(async row=>{
        const user = client.users.cache.get(row.user.toString())
          page1.addFields({name:`#${row.position}.**<@${row.user}>**`,value:`♢ EXP : <:xp:1135120624537305170> ${row.xp} \n♢ Voice: ${require("ms-convert")(row.voice)}`})
        })
      page1.addFields({name:"└───────── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ─────────┘",value:" \n"})
      .setFooter({text:`Có tất cả ${rows.length} bạn trong bảng xếp hạng!`})
      .setColor("Blue")
      msg.reply({embeds:[page1]})
    }
  })
  },
};
