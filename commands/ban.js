const Discord = require('discord.js')
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, msg, args) => {
    let aUser = msg.guild.member(msg.mentions.members.first() || msg.mentions.members.get(args[0]))
    let vc = msg.member.voiceChannel
    let nigga = msg.guild.members.find('id', '610667293869080586')
    let dumb = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn phải ở trong phòng `công khai / riêng tư` để sử dụng lệnh này")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!vc) return msg.channel.send(dumb).then(msg.react('🚫'))
    let helpful = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Lệnh này chỉ hữu dụng khi mày trong kênh \`công khai\` và \`riêng tư\` thôi!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (msg.member.voiceChannel.parentID !== '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') return msg.channel.send(helpful).then(msg.react('🚫'))
    let voice = msg.guild.channels.find(v => v.name == "↳ " + msg.author.username, { type: "voice" });
    let deo = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn không phải chủ phòng")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!voice) return msg.channel.send(deo).then(msg.react('🚫'))
    let errorr = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Help!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("#bad3f5")
        .setDescription("Bạn muốn ban ai?")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!aUser) return msg.channel.send(errorr)
    let ngu = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn không thể ban bản thân được!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (aUser.id == msg.author.id) return msg.channel.send(ngu).then(msg.react('🚫'))
    let ocloz = new Discord.RichEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .setTitle("Đã xảy ra lỗi!")
    .setThumbnail(nigga.user.avatarURL)
    .setColor("RED")
    .setDescription("Bạn không thể ban con bot được!")
    .setTimestamp()
    .setFooter(msg.author.username, msg.author.avatarURL)
    if (aUser.user.bot) return msg.channel.send(ocloz).then(msg.react('🚫'))
    let deoco = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Đứa đó không có trong phòng!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!aUser.voiceChannel || aUser.voiceChannelID !== voice.id) return msg.channel.send(deoco).then(msg.react('🚫'))
    if (msg.member.voiceChannel.parentID !== '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        return msg.channel.send(helpful).then(msg.react('🚫'))
    } else if (msg.member.voiceChannel.parentID === '615923572334002209' && msg.member.voiceChannel.parentID !== '615920657095458838' || msg.member.voiceChannel.parentID === '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        msg.react("👌")
        if (msg.member.voiceChannel.parentID === '615920657095458838') {
            aUser.setVoiceChannel('610328426259283989').then(channel => {
                voice.overwritePermissions(aUser.user.id, {
                    'CONNECT': false
                })
            })
            // let done = new Discord.RichEmbed()
            //     .setAuthor(msg.guild.name, msg.guild.iconURL)
            //     .setTitle("Done!")
            //     .setThumbnail(nigga.user.avatarURL)
            //     .setColor("GREEN")
            //     .setDescription(`Đã ban ${aUser} ra khỏi phòng! Nếu muốn gỡ ban nó, hãy tạo phòng mới!`)
            //     .setTimestamp()
            //     .setFooter(msg.author.username, msg.author.avatarURL)
            // return msg.channel.send(done)
        } else if (msg.member.voiceChannel.parentID === '615923572334002209') {
            aUser.setVoiceChannel('610426066330320906').then(channel => {
                voice.overwritePermissions(aUser.user.id, {
                    'CONNECT': false
                })
            })
            // let done = new Discord.RichEmbed()
            //     .setAuthor(msg.guild.name, msg.guild.iconURL)
            //     .setTitle("Done!")
            //     .setThumbnail(nigga.user.avatarURL)
            //     .setColor("GREEN")
            //     .setDescription(`Đã ban ${aUser} ra khỏi phòng! Nếu muốn gỡ ban nó, hãy tạo phòng mới!`)
            //     .setTimestamp()
            //     .setFooter(msg.author.username, msg.author.avatarURL)
            // return msg.channel.send(done)
        }
    }
}

module.exports.config = {
    name: "ban",
    aliases: ["b"],
    description: "Dành cho chủ room muốn kick người nào đó ra khỏi room, gõ ",
    usage: `${botconfig.prefix}ban <@tag>`
}