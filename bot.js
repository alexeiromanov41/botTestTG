const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const token = process.env.BOT_TOKEN;
if (token === undefined) {
	throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(token);

bot.use(Telegraf.log());

bot.command('help', async (ctx) => {
	return await ctx.reply(
		'Меню бота',
		Markup.keyboard([['Номера телефонов ОПР', 'Команды бота']])
			.oneTime()
			.resize()
	);
});

// bot.command('special', (ctx) => {
// 	return ctx.reply(
// 		'Специальные команды',
// 		Markup.keyboard([
// 			Markup.button.contactRequest('Поделиться контактом'),
// 			Markup.button.locationRequest('Поделиться геопозицией'),
// 		]).resize()
// 	);
// });

bot.hears('Номера телефонов ОПР', (ctx) => {
	ctx.reply(
		'Афонасов Руслан: +7-953-272-59-56' +
			'\n\r' +
			'Афонасов Руслан: +7-953-272-59-56'
	);
	ctx.reply('Романов Алексей: +7-920-859-65-14');
	ctx.reply('Врацкий Павел: +7-953-281-69-14');
	ctx.reply('Воротынцев Максим: +7-920-509-63-48');
});

bot.hears('Команды бота', (ctx) => {
	ctx.reply('/help');
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
