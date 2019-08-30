const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.on("ready", async message => {
    console.log(`${bot.user.username} đã hoạt động!`)
    bot.user.setActivity("r.help để biết thêm chi tiết", { type: "WATCHING" });
});

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("Không tìm thấy lệnh.");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(/ +/g);
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!message.content.toLowerCase().startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) commandfile.run(bot, message, args);

});

// Phòng Công Khai

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if (oldMember.voiceChannelID === '615923205894307864' && newMember.voiceChannelID === '615923205894307864') return;

    if (oldUserChannel === undefined && newMember.voiceChannelID === `615923205894307864` || oldUserChannel !== undefined && newMember.voiceChannelID === `615923205894307864`) {

        newMember.guild.createChannel("↳ " + newMember.user.username, { type: "voice" })
            .then(channel => {
                channel.setParent('615920657095458838');
                let voice = newMember.guild.channels.find(v => v.name == "↳ " + newMember.user.username, { type: "voice" });
                newMember.setVoiceChannel(voice.id)
                let vChannel = oldMember.guild.channels.find('id', '615923205894307864');
                vChannel.overwritePermissions(oldMember.user.id, { VIEW_CHANNEL: false }).then(() => {
                    voice.overwritePermissions(channel.guild.defaultRole, { CREATE_INSTANT_INVITE: false });
                })
                return;
            });
    } else {
        let voice = oldMember.guild.channels.find(v => v.name == "↳ " + newMember.user.username, { type: "voice" });
        if (!voice) return;
        if (voice.parentID !== "615920657095458838") return;
        if (oldMember.voiceChannelID && newMember.voiceChannelID === voice.id) return;
        if (oldMember.voiceChannelID === voice.id && newUserChannel !== undefined || oldMember.voiceChannelID === voice.id && newUserChannel === undefined) {
            voice.delete()
            let vChannel = oldMember.guild.channels.find('id', '615923205894307864');
            vChannel.overwritePermissions(oldMember.user.id, {
                VIEW_CHANNEL: true
            })
            return;
        };
    };
});

// Phòng Riêng Tư

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if (oldUserChannel === undefined && newMember.voiceChannelID === `615923625224044544` || oldUserChannel !== undefined && newMember.voiceChannelID === `615923625224044544`) {

        newMember.guild.createChannel("↳ " + newMember.user.username, { type: "voice" })
            .then(channel => {
                channel.setParent('615923572334002209');
                let voice = newMember.guild.channels.find(v => v.name == "↳ " + newMember.user.username, { type: "voice" });
                newMember.setVoiceChannel(voice.id)
                let vChannel = oldMember.guild.channels.find('id', '615923625224044544');
                vChannel.overwritePermissions(oldMember.user.id, { VIEW_CHANNEL: false }).then(() => {
                    voice.overwritePermissions(channel.guild.defaultRole, { CREATE_INSTANT_INVITE: false });
                })
                return;
            })
    } else {
        let voice = oldMember.guild.channels.find(v => v.name == "↳ " + newMember.user.username, { type: "voice" });
        if (!voice) return;
        if (voice.parentID !== "615923572334002209") return;
        if (oldMember.voiceChannelID && newMember.voiceChannelID === voice.id) return;
        if (oldMember.voiceChannelID === voice.id && newUserChannel !== undefined || oldMember.voiceChannelID === voice.id && newUserChannel === undefined) {
            voice.delete()
            let vChannel = oldMember.guild.channels.find('id', '615923625224044544');
            vChannel.overwritePermissions(oldMember.user.id, {
                VIEW_CHANNEL: true
            })
            return;
        };
    }
});

//Bảo mật phòng riêng tư

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    let channel = newMember.guild.channels.find((x) => x.name === "↳ " + newMember.user.username);
    if (newUserChannel === channel) return;
    if (newUserChannel === undefined) return;

    if (oldMember.user.bot) return;
    if (newMember.voiceChannelID === '615923925217443841') return;
    if (oldMember.voiceChannelID === newMember.voiceChannelID) return;
    if (oldMember.voiceChannelID === '615923625224044544') return;
    if (!newUserChannel || oldMember.voiceChannelID === '615923773828497421' && newUserChannel === undefined || oldMember.voiceChannelID === '615923773828497421' && newUserChannel !== undefined) return
    if (oldUserChannel !== undefined && newMember.voiceChannelID === '615924016397680673' || oldUserChannel !== undefined && newMember.voiceChannelID === '615923885736460288') return;
    if (oldUserChannel !== undefined && newMember.voiceChannelID === '615923925217443841') return;
    if (newUserChannel.parentID === '615923572334002209' && newMember.voiceChannelID !== '615923625224044544') {
        newMember.setVoiceChannel('615923773828497421').then((channel) => {
            if (newMember.voiceChannelID !== '615923773828497421' || newUserChannel === undefined) return;
            let bloke = oldMember.guild.channels.find(v => v.id == oldMember.voiceChannelID, { type: 'voice' });
            if (!bloke) return;
            bloke.overwritePermissions(oldMember.user.id, {
                CONNECT: false
            }).then((voicechannel, msg) => {
                let name = oldUserChannel.name
                let auser = voicechannel.members.find(m => m.user.username == name.slice(2))
                let embed = new Discord.RichEmbed()
                    .setAuthor(newMember.guild.name, newMember.guild.iconURL)
                    .setTitle("Có người muốn vào phòng bạn!")
                    .setThumbnail(newMember.user.avatarURL)
                    .setColor('#bad3f5')
                    .setDescription(`${newMember} muốn vào phòng \`riêng tư\` của bạn, cho nó vào không? (Bạn có 30 giây)`)
                    .setTimestamp()
                    .setFooter(auser.user.username, auser.user.avatarURL)
                return auser.user.send(embed).then((message, channel) => {
                    message.react('✅').then(() => message.react('⛔'));

                    const filter = (reaction, user) => {
                        return ['✅', '⛔'].includes(reaction.emoji.name) && user.id === auser.user.id;
                    };

                    message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
                        .then(collected => {
                            const reaction = collected.first();

                            if (reaction.emoji.name === '✅') {

                                if (newMember.voiceChannelID !== '615923773828497421') {
                                    message.delete()
                                    auser.user.send(`${newMember} không đủ kiên nhẫn để chờ bạn đồng ý nên đã đi đâu đó rồi!`).then(msg => msg.delete(10000))
                                    let unlock = newMember.guild.channels.find(v => v.name == `↳ ${auser.user.username}`, { type: "voice" })
                                    unlock.overwritePermissions(newMember.user.id, { CONNECT: true })
                                    return;
                                };
                                message.delete()
                                newMember.setVoiceChannel(oldMember.voiceChannelID).then(channel => {
                                    let unlock = newMember.guild.channels.find(v => v.name == `↳ ${auser.user.username}`, { type: "voice" })
                                    unlock.overwritePermissions(newMember.user.id, { CONNECT: true })
                                })
                            } else if (reaction.emoji.name === '⛔') {
                                message.delete()
                                newMember.setVoiceChannel('615923885736460288')
                            }
                        })
                        .catch(collected => {
                            message.delete()
                            newMember.setVoiceChannel(null)
                            let forget = new Discord.RichEmbed()
                                .setAuthor(newMember.guild.name, newMember.guild.iconURL)
                                .setTitle("Oops!")
                                .setThumbnail(newMember.user.avatarURL)
                                .setColor('#bad3f5')
                                .setDescription(`Bạn quên đồng ý cho ${newMember} vào phòng rồi kìa!`)
                                .setTimestamp()
                                .setFooter(auser.user.username, auser.user.avatarURL)
                            auser.user.send(forget).then(msg => msg.delete(60000))
                            let unloke = newMember.guild.channels.find(v => v.name == "↳ " + auser.user.username, { type: "voice" });
                            let botchannel = newMember.guild.channels.find(c => c.id == '615932112406708225', { type: 'voice' })
                            botchannel.send(`${newMember} ơi! ${auser.user.tag} quên đồng ý cho bạn vào rồi, thử vào lại xem!`).then(channel2 => {
                                unloke.overwritePermissions(oldMember.user.id, { CONNECT: true })
                            })
                        });
                })
            })
        })
    } else if (oldMember.voiceChannelID === '615923773828497421' && newMember.voiceChannelID === undefined || oldMember.voiceChannelID === '615923773828497421' && newMember.voiceChannelID !== undefined) return
});

// Ma Sói

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if (oldUserChannel === undefined && newMember.voiceChannelID === `616806839203528720` || oldUserChannel !== undefined && newMember.voiceChannelID === `616806839203528720`) {
        if (newMember.user.bot) return
        newMember.addRole('616308932901732363');

    } else {
        if (oldMember.voiceChannelID && newMember.voiceChannelID === `616806839203528720`) return;
        if (oldMember.voiceChannelID === `606860297613082627` && newUserChannel !== undefined || oldMember.voiceChannelID === `616806839203528720` && newUserChannel === undefined) {
            if (newMember.user.bot) return
            newMember.removeRole('616308932901732363')
        };
    };
});

// Radio

bot.on('guildUpdate', (oldGuild, newGuild) => {

    let moment = require('moment-timezone');
    newGuild.setName('Radio ' + moment().tz("Asia/Ho_Chi_Minh").format('LT'));

});

bot.login('NjEwNjY3MjkzODY5MDgwNTg2.XWJfIA.Vb5jv6uP7rSufKcYH2gSd5o9y94');
