const discord = require("discord.js")
const cf = require("./config")

const mng = new discord.ShardingManager("index.js",{
    totalShards:"auto",
    token:cf.token,
    shardList:"auto"
})
/**
 * @param {discord.Shard} shard
 */
mng.on("shardCreate",(shard)=>{
    console.log(`#${shard.id} đã hoạt động`)
})
mng.spawn({respawn:true})