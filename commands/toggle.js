const { RichEmbed } = require('discord.js')
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, msg, args) => {
    let vc = msg.member.voiceChannel
    let nigga = msg.guild.members.find('id', '610667293869080586')
    let voice = msg.guild.channels.find(v => v.name == "↳ " + msg.author.username, { type: "voice" });
    let vChannel = msg.guild.channels.find('id', msg.member.voiceChannelID);
    let dumb = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn phải ở trong phòng `công khai / riêng tư` để sử dụng lệnh này")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!vc) return msg.channel.send(dumb).then(msg.react('🚫'))
    let deo = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn không phải chủ phòng!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!voice) return msg.channel.send(deo).then(msg.react('🚫'))
    let helpful = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Lệnh này chỉ hữu dụng khi mày trong kênh `công khai` hoặc `riêng tư` thôi!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (msg.member.voiceChannel.parentID !== '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        return msg.channel.send(helpful).then(msg.react('🚫'))
    } else if (msg.member.voiceChannel.parentID === '615923572334002209' && msg.member.voiceChannel.parentID !== '615920657095458838' || msg.member.voiceChannel.parentID === '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        msg.react("👌")
        if (msg.member.voiceChannel.parentID === '615920657095458838') {
            vChannel.setParent('615923572334002209')
            let join = msg.guild.channels.find('id', '615923205894307864')
            join.overwritePermissions(msg.author.id, {
                VIEW_CHANNEL: true
            })
            let hide = msg.guild.channels.find('id', '615923625224044544')
            hide.overwritePermissions(msg.author.id, {
                VIEW_CHANNEL: false
            })
        } else if (msg.member.voiceChannel.parentID === '615923572334002209') {
            vChannel.setParent('615920657095458838')
            let join = msg.guild.channels.find('id', '615923625224044544')
            join.overwritePermissions(msg.author.id, {
                VIEW_CHANNEL: true
            })
            let hide = msg.guild.channels.find('id', '615923205894307864')
            hide.overwritePermissions(msg.author.id, {
                VIEW_CHANNEL: false
            })
        }
    }
}

module.exports.config = {
    name: "toggle",
    aliases: ["tog", "t"],
    description: "Chuyển đổi qua lại giữa kênh riêng tư và công khai bằng cách gõ ",
    usage: `${botconfig.prefix}toggle`
}