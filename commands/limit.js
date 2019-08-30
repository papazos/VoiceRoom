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
    let limit = args[0];
    let voice = msg.guild.channels.find(v => v.name == "↳ " + msg.author.username, { type: "voice" });
    let vChannel = msg.guild.channels.find('id', msg.member.voiceChannelID);
    if (vChannel.userLimit == 0) vChannel.userLimit = "không có"
    let helpful = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Lệnh này chỉ hữu dụng khi mày trong kênh `công khai` hoặc `riêng tư` thôi!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (msg.member.voiceChannel.parentID !== '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') return msg.channel.send(helpful).then(msg.react('🚫'))
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
        .setDescription(`Dùng để giới hạn số người trong phòng.\n\nCách sử dụng: \`!vc.limit <giới hạn số người>\`\n\nGiới hạn của phòng hiện tại: \`${vChannel.userLimit}\`.`)
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (!limit) return msg.channel.send(errorr)
    let nope = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Bạn muốn giới hạn bao nhiêu người?")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (isNaN(limit)) return msg.channel.send(nope).then(msg.react('🚫'))
    let fak = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Chỉ giới hạn được tới \`30\` người thôi!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (limit > 30) return msg.channel.send(fak).then(msg.react('🚫'))
    let dont = new RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setTitle("Đã xảy ra lỗi!")
        .setThumbnail(nigga.user.avatarURL)
        .setColor("RED")
        .setDescription("Giới hạn đã như thế sẵn rồi!")
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL)
    if (vChannel.userLimit == limit) return msg.channel.send(dont).then(msg.react('🚫'))
    if (limit == 0) {
        msg.react("👌")
        let vChannel = msg.guild.channels.find('id', voice.id);
        vChannel.setUserLimit('0');
    }
    msg.react("👌")
    if (msg.member.voiceChannel.parentID !== '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        return msg.channel.send(helpful).then(msg.react('🚫'))
    } else if (msg.member.voiceChannel.parentID === '615923572334002209' && msg.member.voiceChannel.parentID !== '615920657095458838' || msg.member.voiceChannel.parentID === '615920657095458838' && msg.member.voiceChannel.parentID !== '615923572334002209') {
        vChannel.setUserLimit(limit);
        // let done = new RichEmbed()
        //     .setAuthor(msg.guild.name, msg.guild.iconURL)
        //     .setTitle("Done!")
        //     .setThumbnail(nigga.user.avatarURL)
        //     .setColor("GREEN")
        //     .setDescription(`Đã giới hạn số lượng phòng xuống \`${limit}\`! Muốn gỡ giới hạn số người thì chỉnh giới hạn xuống \`0\``)
        //     .setTimestamp()
        //     .setFooter(msg.author.username, msg.author.avatarURL)
        // return msg.channel.send(done)
    } else if (msg.member.voiceChannel.parentID === '615923572334002209') {
        vChannel.setUserLimit(limit);
        // let done = new RichEmbed()
        //     .setAuthor(msg.guild.name, msg.guild.iconURL)
        //     .setTitle("Done!")
        //     .setThumbnail(nigga.user.avatarURL)
        //     .setColor("GREEN")
        //     .setDescription(`Đã giới hạn số lượng phòng xuống \`${limit}\`! Muốn gỡ giới hạn số người thì chỉnh giới hạn xuống \`0\``)
        //     .setTimestamp()
        //     .setFooter(msg.author.username, msg.author.avatarURL)
        // return msg.channel.send(done)
    }
}

module.exports.config = {
    name: "limit",
    aliases: ["l"],
    description: "Điều chỉnh số lượng thành viên của room (chỉ dành cho chủ room) bằng cách gõ ",
    usage: `${botconfig.prefix}limit <số lượng>`
}