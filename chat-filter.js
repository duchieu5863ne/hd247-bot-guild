const Discord = require('discord.js')
const { EventEmitter } = require('events')


/**
 * @typedef ChatFilterClientOptions
 * @property {string} content The content of the message.
 * @property {number} sentTimestamp The timestamp the message was sent.
 */

class ChatFilter {


    constructor(message) {

        /**
        * @type {ChatFilterClientOptions}
        */

        this.message = message

    }
/**
 * @param {String} content 
 * @returns 
 */
    filterWord(content) {

        try {
                for (var i in content) {
                    if (this.message.toLowerCase().includes(content[i].toLowerCase())) {
                        return true
                    }
                }
        }
        catch (e) {
            console.error(e)
        }

    }
/**
 * @param {String} msg
 */
    filterCaps(msg) {

        try {
const up = msg.match(/[A-Z]/g)
if(up > 7) {
    return true;
}
else return false;
        } catch (e) {
            console.error(e)
        }

    }
}

module.exports = ChatFilter