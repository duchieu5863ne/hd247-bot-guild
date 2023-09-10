module.exports ={
    name:"stop",
    aliases:["end"],
async run(msg,client,args) {
    const queue = client.distube.getQueue(msg)
if(!queue) {
    msg.reply(`Hiện tại không có bài hát nào đang phát`)
} 
else {
    queue.stop()
    msg.reply(`Đã dừng và xóa hàng chờ ^^!`)
}
}
}