const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { durationTime } = require('util-stunks') 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Retorne as informações do usuário')
        .addUserOption(option => option.setName("user").setDescription("Mencione o(a) usuário(a) que você deseja visualizar as informações.").setRequired(true)),

    async execute(interaction, client) {
        const user = await interaction.options.getUser("user");
        
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor('Random')
                    .setTitle(`Informações de \`${user.username}\``)
                    .setTimestamp()
                    .setThumbnail(user.displayAvatarURL())
                    .addFields({
                        name: `Nome`,
                        value: user.tag,
                        inline: true
                    }, {
                        name: `Identificação`,
                        value: `\`${user.id}\``,
                        inline: true
                    }, {
                        name: `Avatar`,
                        value: `[Clique Aqui](${user.displayAvatarURL()})`,
                        inline: false
                    }, {
                        name: `Criado em`,
                        value: `<t:${Math.round(user.createdTimestamp / 1000)}> \`${durationTime(user.createdTimestamp, { removeMS: true, displayAtMax: 3 })}\``
                    })
                    .setFooter({ text: `${user.tag}`, iconURL: user.displayAvatarURL() })
            ]
        });
    }
}
