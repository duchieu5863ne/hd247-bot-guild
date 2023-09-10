
const d2 = require("pro.db")
const {Client,EmbedBuilder} =require("discord.js")
const cron = require("node-cron")
/**
 * @param {Client} client
 */
function newseason(client) {
    const newseason = cron.schedule("00 00 05 30 * *",()=>{     
    },{
        timezone:"Asia/Ho_Chi_Minh"
    })
    console.log(`Module [Mùa mới]: ✅ `)
}
module.exports = {newseason}