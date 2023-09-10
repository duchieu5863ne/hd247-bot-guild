const { Message, Client, PermissionsBitField, Colors, PermissionFlagsBits } = require("discord.js");
const { addXu } = require("../../data");

module.exports = {
    name:"add",
aliases:[""],
permissions:[PermissionFlagsBits.MentionEveryone],
/**
 * @param {Message} msg 
 * @param {Client} client 
 */
async run(msg,client,args) {
    const tien = parseInt(args[1])
    const nguoi = msg.mentions.members.first()

if(!tien || tien === NaN) {
msg.channel.send(`**${msg.author.username}**, vui lòng điền số xu muốn thêm!`)
} else if(!nguoi || nguoi.user.bot) {
    msg.channel.send(`**${msg.author.username}**, vui lòng điền người nhận xu!`)
} else{
    addXu(nguoi.id,tien)
    msg.channel.send({
        embeds:[{
            description:`Đã thêm <:xu:1144503064930291772> *${tien}* cho **${nguoi.user.username}**`
        ,color:Colors.Green
        }]
    })
}
}
}