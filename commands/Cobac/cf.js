const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("data.db",sqlite3.OPEN_READWRITE,sqlite3.OPEN_CREATE,(e)=>{
  if(e) return console.log(e.message)
})
let sql;
const {addXu,truXu} = require("../../data")
module.exports = {
    name:"cf",
    aliases:["coin"],
async run(msg,client,args) {

}
}