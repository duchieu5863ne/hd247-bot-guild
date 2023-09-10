module.exports = {
    name:"say",
    aliases:[""],
async run(msg,client,args) {
    const ct = args.join(" ")
    msg.channel.send(ct)
    msg.delete()
}
}