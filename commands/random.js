const { RichEmbed } = require('discord.js')
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, msg, args) => {
    let vc = msg.member.voiceChannel
    let nigga = msg.guild.members.find('id', '610667293869080586')
    let dumb = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn phải ở trong phòng `công khai / riêng tư` để sử dụng lệnh này")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!vc) return msg.channel.send(dumb).then(msg.react('🚫'))
    msg.react('👌')
    let picker = msg.member.voiceChannel.members.random().user;
    let random = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Done!")
        .setThumbnail(picker.avatarURL)
        .setColor("GREEN")
        .setDescription(`Phòng \`${msg.member.voiceChannel.name}\` có \`${msg.member.voiceChannel.members.size}\` người và ${picker} là người đc chọn!`)
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    return msg.channel.send(random)
}

module.exports.config = {
    name: "random",
    aliases: ["pick", "randompick", "p", "r"],
    description: "Chọn một người ngẫu nhiên trong kênh voice bạn đang connect bằng cách gõ ",
    usage: `${botconfig.prefix}random`
}