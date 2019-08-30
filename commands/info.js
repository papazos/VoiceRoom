const Discord = require('discord.js')
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, msg, args) => {
    if (!msg.author) return;
    let nigga = msg.guild.members.find('id', '610667293869080586')
    let info = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setThumbnail(nigga.user.avatarURL)
        .setColor("#bad3f5")
        .setDescription(`Là con bot phụ trách việc quản lý phòng \`công khai\` và \`riêng tư\` của **${msg.guild.name}**\n\nNhập \`${botconfig.prefix}help\` để hiện lệnh hữu dụng`)
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    return msg.channel.send(info)
}

module.exports.config = {
    name: "info",
    aliases: ["i"],
    description: "Hiện hộp thoại này bằng cách gõ ",
    usage: `${botconfig.prefix}info`
}
