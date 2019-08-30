const Discord = require('discord.js')
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, msg, args) => {
    let vc = msg.member.voiceChannel
    let nigga = msg.guild.members.find('id', '610667293869080586')
    let errembed = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn phải ở trong phòng!")
    if (!vc) return msg.channel.send(errembed).then(msg.react('🚫'))
    let embed = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .addField("🎥 **SCREENSHARE** 🎥", `**[PC ONLY]** Vô phòng \`${msg.member.voiceChannel.name}\` rồi [click vào đây](https://www.discordapp.com/channels/${msg.guild.id}/${msg.member.voiceChannelID})`)
        .setThumbnail(msg.author.displayAvatarURL)
        .setColor(msg.member.displayHexColor)
        .setTimestamp()
        .setFooter(`Được sử dụng bởi ${msg.author.username}`, msg.author.avatarURL);
    return msg.channel.send(embed)
}

module.exports.config = {
    name: "screenshare",
    aliases: ["ss"],
    description: "Chia sẻ màn hình của mày với mọi người trong phòng bằng cách gõ ",
    usage: `${botconfig.prefix}screenshare`
}