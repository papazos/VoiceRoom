const Discord = require('discord.js')
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, msg, args) => {
    msg.delete()
    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.reply("Bạn đéo có quyền sử dụng lệnh này!").then(msg => msg.delete(5000))
    let embed = new Discord.RichEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .setThumbnail(msg.guild.iconURL)
    .setTitle("Reloaded!")
    .setColor("#bad3f5")
    .setDescription('Đã reload lại tên server!')
    .setTimestamp()
    .setFooter(msg.author.username, msg.author.avatarURL)
    msg.channel.send(embed).then(msg => {
        msg.guild.setName('Reloaded!');
        msg.delete(5000)

    })

}

module.exports.config = {
    name: "reload",
    aliases: ["restart"],
    description: "Lệnh của admin để restart tên server bằng cách gõ ",
    usage: `${botconfig.prefix}reload`
}
