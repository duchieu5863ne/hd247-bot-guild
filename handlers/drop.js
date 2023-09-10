
const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
const cron = require("node-cron")
/**
 * @param {Client} client
 */
function drop(client) {
    const newseason = cron.schedule("00 * * * * *",async ()=>{     
    const m = Math.floor(Math.random()*3)+1
const embed1 = new EmbedBuilder()
.setDescription("Click nút ở dưới để nhận số xu ngẫu nhiên")
const bt = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId("click")
    .setLabel("Lụm!")
    .setStyle(ButtonStyle.Secondary)
)
const rep = client.channels.cache.get("1132300761825550358").send({
    embeds:[embed1],components:[bt]
}) 
    },{
        timezone:"Asia/Ho_Chi_Minh"
    })
}
module.exports = {drop}