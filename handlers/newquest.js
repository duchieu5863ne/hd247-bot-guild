const d2 = require("pro.db")
const {Client,EmbedBuilder} =require("discord.js")
const ms = require("ms")
const cron = require("node-cron")
const {nq} = require("../data")
/**
 *
 * @param {Client} client
 */

function newq(client) { 
const quest = cron.schedule("01 00 00  * * *",()=>{
    nq()
},{
    timezone:"Asia/Ho_Chi_Minh"
})
quest.start()
console.log(`Module [Auto Quest]: ✅ `)
}
module.exports = {newq}
