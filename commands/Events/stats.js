const djs = require("discord.js")
const ms = require("ms-convert")
const data = require("../../data")
module.exports = {
    name: "stats",
    aliases: ['me',"check","xp"],
    async run(msg,client,args) {
        data.stats(msg)
    }
 }
