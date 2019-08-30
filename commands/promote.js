const { RichEmbed } = require('discord.js')
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, msg, args) => {
    let aUser = msg.guild.member(msg.mentions.members.first() || msg.mentions.members.get(args[0]))
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
    let helpful = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Lệnh này chỉ hữu dụng khi mày trong kênh `công khai` hoặc `riêng tư` thôi!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (msg.member.voiceChannel.parentID !== '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') return msg.channel.send(helpful).then(msg.react('🚫'))
    let voice = msg.guild.channels.find(v => v.name == "↳ " + msg.author.username, { type: "voice" });
    let deo = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn không phải chủ phòng!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!voice) return msg.channel.send(deo).then(msg.react('🚫'))
    let errorr = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Help!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("#bad3f5")
        .setDescription("Bạn muốn chuyển quyền chủ phòng cho ai?")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!aUser) return msg.channel.send(errorr)
    let ngu = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn không thể chuyển quyền chủ phòng cho bản thân được!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (aUser.id == msg.author.id) return msg.channel.send(ngu).then(msg.react('🚫'))
    let fukinbot = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn không thể chuyển quyền chủ phòng cho bot được!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (aUser.user.bot) return msg.channel.send(fukinbot).then(msg.react('🚫'))
    let deoco = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Người đấy không có trong phòng!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!aUser.voiceChannel || aUser.voiceChannelID !== voice.id) return msg.channel.send(deoco).then(msg.react('🚫'))
    if (!aUser.voiceChannel || aUser.voiceChannelID !== voice.id) return msg.channel.send(deoco).then(msg.react('🚫'))
    if (msg.member.voiceChannel.parentID !== '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        return msg.channel.send(helpful).then(msg.react('🚫'))
    } else if (msg.member.voiceChannel.parentID === '615923572334002209' && msg.member.voiceChannel.parentID !== '615920657095458838' || msg.member.voiceChannel.parentID === '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        vc.setName(`↳ ${aUser.user.username}`).then(() => {
            if (msg.member.voiceChannel.parentID === '615920657095458838') {
                msg.react("👌")
                let vChannel = msg.guild.channels.find('id', '615923205894307864');
                vChannel.overwritePermissions(msg.author.id, {
                    VIEW_CHANNEL: true
                });
                vChannel.overwritePermissions(aUser.user.id, {
                    VIEW_CHANNEL: false
                });
                // let done = new RichEmbed()
                //     .setAuthor(msg.guild.name, msg.guild.iconURL)
                //     .setTitle("Done!")
                //     .setThumbnail(nigga.user.avatarURL)
                //     .setColor("GREEN")
                //     .setDescription(`Đã chuyển quyền chủ phòng cho ${aUser}!`)
                //     .setTimestamp()
                //     .setFooter(msg.author.username, msg.author.avatarURL)
                // return msg.channel.send(done)
            } else if (msg.member.voiceChannel.parentID === '615923572334002209') {
                msg.react("👌")
                let vChannel = msg.guild.channels.find('id', '615923625224044544');
                vChannel.overwritePermissions(msg.author.id, {
                    VIEW_CHANNEL: true
                });
                vChannel.overwritePermissions(aUser.user.id, {
                    VIEW_CHANNEL: false
                });
                // let done = new RichEmbed()
                //     .setAuthor(msg.guild.name, msg.guild.iconURL)
                //     .setTitle("Done!")
                //     .setThumbnail(nigga.user.avatarURL)
                //     .setColor("GREEN")
                //     .setDescription(`Đã chuyển quyền chủ phòng cho ${aUser}!`)
                //     .setTimestamp()
                //     .setFooter(msg.author.username, msg.author.avatarURL)
                // return msg.channel.send(done)
            }
        })
    }
}

module.exports.config = {
    name: "promote",
    aliases: ["pmt", "tf", "transfer"],
    description: "Chuyển quyền chủ phòng cho người trong phòng bằng cách gõ ",
    usage: `${botconfig.prefix}promote <@tag>`
}