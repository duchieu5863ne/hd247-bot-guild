const { EmbedBuilder } = require("discord.js")

module.exports = {
    name:"guildMemberAdd",
async code(client,member) {
    client.users.cache.get(member.id).send({
        content:"Pony"
    })
}
}