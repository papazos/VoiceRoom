const Discord = require("discord.js");
const { stripIndents } = require('common-tags');
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, msg, args) => {

    let nigga = msg.guild.members.find('id', '610667293869080586')
    let halp = new Discord.RichEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .setThumbnail(nigga.user.avatarURL)
    .setColor("#bad3f5")
    .setDescription(stripIndents`
    **LỆNH NGƯỜI DÙNG:**

    \`toggle\`: Chuyển phòng công khai <-> riêng tư.
    \`random\`: Chọn random người trong phòng của bạn.
    \`promote\`: Chuyển quyền chủ phòng cho người khác.
    \`limit\`: Giới hạn số người trong phòng.
    \`kick\`: Đuổi thẳng cổ thằng trong phòng.
    \`ban\`: Ban thẳng tay thằng trong phòng.
    \`screenshare\`: Chia sẻ màn hình của bạn với mọi người trong phòng.

    **LỆNH ADMIN:**

    \`ping\`: Lệnh của admin để xem ping của bot tới server.
    \`reload\`: Lệnh của admin để restart tên server.
    
    Nhập \`${botconfig.prefix}help [lệnh]\` để xem cách sử dụng lệnh đó!`)
    .setTimestamp()
    .setFooter(msg.author.username, msg.author.avatarURL)

    if (!args[0]) {
        return msg.channel.send(halp)
    } else if (args[0]) {
        let command = args[0];
        if (!bot.commands.has(command) || command == "help") {
            return msg.channel.send(halp)
        } else if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            let help = new Discord.RichEmbed()
                .setAuthor(msg.guild.name, msg.guild.iconURL)
                .setThumbnail(nigga.user.avatarURL)
                .setColor("#bad3f5")
                .addField(`Hướng dẫn sử dụng lệnh ${command.config.name}:`, `${command.config.description} \`${command.config.usage}\``)
                .addField("Lệnh tắt:", `\`${command.config.aliases.join("\` \`") || "\`Không có\`"}\``)
                .setTimestamp()
                .setFooter(msg.author.username, msg.author.avatarURL)
            return msg.channel.send(help)
        }
    }
}

module.exports.config = {
    name: "help",
    aliases: ["h"],
    description: "Hiện hộp thoại này.",
    usage: `${botconfig.prefix}help`
}