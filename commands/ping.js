const { RichEmbed } = require('discord.js')
const botconfig = require("../botconfig.json")
const ms = require("ms")

module.exports.run = async (bot, msg, args) => {
		if (!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply("Bạn đéo có quyền sử dụng lệnh này!").then(msg => msg.delete(5000))
		if (!msg.editable) {
			const pingMsg = await msg.channel.send('Đang ping...');
			return pingMsg.edit(`🏓Pong! \`${pingMsg.createdTimestamp - msg.createdTimestamp}ms\`\nHeartbeat: \`${Math.round(bot.ping)}ms\``);
		} else {
			await msg.edit('Pinging...');
			return msg.edit(`🏓Pong! \`${pingMsg.createdTimestamp - msg.createdTimestamp}ms\`\nHeartbeat: \`${Math.round(bot.ping)}ms\``);
		}
}

module.exports.config = {
    name: "ping",
    aliases: [],
    description: "Lệnh của admin để xem ping của bot tới server bằng cách gõ ",
    usage: `${botconfig.prefix}ping`
}