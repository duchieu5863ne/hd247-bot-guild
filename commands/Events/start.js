const data = require("../../data")
const {EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,ComponentType,Client, ModalBuilder, TextInputBuilder, TextInputStyle} = require("discord.js")
/**
 * @param {Client} client
 */
module.exports= {
    name:"start",
    aliases:["batdau","thamgia","dk","dangki"],
    async run(msg,client,args) {

      const bt = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("1")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("1135120618514301039"),
        new ButtonBuilder()
        .setCustomId("2")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("758380151238033419") 
        )
      const embed = new EmbedBuilder()
      .setAuthor({name:msg.guild.name,iconURL:msg.guild.iconURL()})
      .setDescription("OK")
const meo = await msg.channel.send({embeds:[embed],components:[bt]})
const col = meo.createMessageComponentCollector({ componentType: ComponentType.Button, time: 45000 ,filter:(i)=> i.user.id === msg.author.id});
col.on("collect",(i)=>{
if(i.customId === "1") {
data.start(msg)
  i.update({embeds:[],components:[],content:"Bây giờ, bạn có thể tham gia Events rồi"})
} if(i.customId === "2") {
i.update("OK")
}
})   
}
    } 