module.exports = (client, message) => {
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
}
