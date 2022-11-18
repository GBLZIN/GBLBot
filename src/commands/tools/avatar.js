const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Veja o avatar de algum membro.')
    .addUserOption(option => option.setName("user").setDescription("Mencione a pessoa que vocÃª deseja ver o avatar.").setRequired(true)),

  async execute(interaction, client) {
    let user = await interaction.options.getUser('user');

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("blue")
          .setTitle(`Avatar de ${user.username}`)
          .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
          .setTimestamp()
      ]
    });
  }
}
