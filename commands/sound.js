const Discord = require("discord.js");
var fs = require('fs');

var files = fs.readdirSync('./sounds/audio_files/');

module.exports.run = async (bot, message, args) => {
    // TO DO CODES

    var isReady = true;

    if(args[0])
    {
        if(args[0] == "help"){
            msg = "The available sound effects are: \n"
            files.forEach(file => {
                msg = msg.concat(file + "\n");
            });
            message.reply(msg);
            return;
        }
        else if(files.includes(args[0]) && isReady == true)
        {
            var voiceChannel = message.member.voice.channel;

            voiceChannel.join().then((connection) => {
                const dispatcher = connection.play("./sounds/audio_files/".concat(args[0]),{
                    volume: 0.5,
                });

                isReady = false;
        
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {
                        voiceChannel.leave();
                        isReady = true;
                    }
                });
            })
        }
        else if(isReady == false)
        {
            message.reply("I am busy. Someone is using me to play sounds. Try again later :-)");
        }
        else
        {
            msg = "No file named " + args[0] + ", Please use `.sound help` to check the available sounds."
            message.reply(msg);
        }
    }


    
}

module.exports.help = {
    name: "sound"
}