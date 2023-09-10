const data = require("../../data")
module.exports= {
    name:"quest",
    aliases:["q","nv","clan"],
    async run(msg,client,args) {
data.quests(msg)
    }
} 