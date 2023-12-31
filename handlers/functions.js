const fs = require('fs')
const path = require('path')
const {  SlashCommandBuilder } = require('discord.js')

function loadEvents(client, dir) {
  const ext = ".js", files = fs.readdirSync(path.join(process.cwd(), dir)).filter((file) => file.endsWith(ext));
  for (const file of files) {
    const event = require(path.join(process.cwd(), dir, file));
    if (!event) continue;
    client.on(event.name, (...args) => event.code(client, ...args));
  }
}
async function LoadCommands(client, dir) {
  const root = process.cwd(), files = fs.readdirSync(path.join(root, dir));
  for (const file of files) {
    if (fs.lstatSync(path.join(root, dir, file)).isDirectory()) { await LoadCommands(client, path.join(dir, file)); continue; }
    const command = require(path.join(root, dir, file));
    if (!command) continue;
   client.commands.message.set(command.name, command)
  }
}
async function rd(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result.toString();
}

  module.exports = {
    LoadCommands,
    loadEvents,
    rd
  }
