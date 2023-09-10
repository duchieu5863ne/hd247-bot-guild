const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
const config = require('../config')
const {Client, EmbedBuilder, Shard, ActivityType} = require("discord.js")
module.exports = {
    name: "ready",
    /**
 * @param {Client} client
 * @param {Shard} shard
 */
    async code(client,shard) {
const act = [`🎉 Hoidap247! Back to school`,]
setInterval(()=>{
client.user.setActivity({name:act[Math.floor(Math.random()*act.length)],type:ActivityType.Custom})
},10000)
client.distube
.on("playSong",(queue,song)=>{
  try {
    queue.setVolume(75)
    queue.textChannel.send({embeds:[
        new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`**[\`${song.name}\`](${song.url})**`)
        .addFields({name:"Thời lượng",value:`${song.formattedDuration}`,inline:true},{name:"Yêu cầu bởi",value:`${song.user}`,inline:true})
        .setTitle("Đang phát")
        .setThumbnail(song.thumbnail)
    ]})
  } catch(e) {
    queue.textChannel.send({embeds:[
        new EmbedBuilder()
        .setColor("Red")
        .setDescription(`${e}`)
    ]})
  }
})
.on("addSong",(queue,song)=>{
 const add = queue.textChannel.send({
        embeds:[
            new EmbedBuilder()
        .setDescription(`Đã thêm vào danh sách chờ \n[\`${song.name}\`](${song.url})`)
        ]
    })
})
.on('addList', (queue, playlist) =>
    queue.textChannel.send(
      `Đã thêm list \`${playlist.name}\`  (${
        playlist.songs.length
      } bài hát) vào danh sách phát!`
    )
  )
}
}