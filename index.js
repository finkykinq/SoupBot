fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, arg => eventHandler(client, arg))
  })
})

require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.emoji.name === "🖕") {
 console.log(reaction.users);

  resolve();

})

.then(() => {
    throw new Error('OOPSIE WOOPSIE!! Uwu We made a fricky wucky!! A wittle fricko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!');

    console.log('Wuh oh! Stinky!');
})
.catch(() => {
    console.error('Poop! Ahahahahahaha! Poopies! Funny Poopies!');
})
.then(() => {
    console.log('Elelelele! Haha! Funny poop, poop funny! Wheee! Haha! Yay for poopie! Good poopie!');
});


client.on('guildMemberAdd', member => {
  member.send(
    `Welcome to our server! Make sure you read the rules and wait for ten minutes so a staff member can get you the member role! But most importaintly, have fun! `
  });


client.on('message', message => {
  if (message.content.startsWith('!kick')) {
    const member = message.mentions.members.first()

    if (~member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      )
    }

    if (~member.kickable) {
      return message.reply(`I'm sorry, but I can't kick this user. `)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was yeeted out of the server.`))
      .catch(error => message.reply(`OOPSIE WOOPSIE!! Uwu We made a friky wucky!! A wittle friko boingo!.`))
  }
})

client.login(process.env.BOT_TOKEN)
