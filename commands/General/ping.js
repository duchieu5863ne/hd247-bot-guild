const djs = require("discord.js")
module.exports = {
    name: "ping",
    aliases: ['pong'],
    async run(msg,client,args) {
    let y = new djs.EmbedBuilder()
    .setDescription(`\`\`\`ansi
[1;2m[1;2m[1;31mAPI[0m [0m[0m[2;37m: [0m[1;2m[1;34m${client.ws.ping}ms
[1;31mCLIENT[0m[1;34m [1;37m: [0m[1;34m[1;34m[4;34m${Date.now() - msg.createdTimestamp}[0m[1;34m[0m[1;34mms[0m[0m
\`\`\``)
msg.reply({embeds:[y],content:"**Pong!**"})
    }
 }
