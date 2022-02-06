const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.start((ctx) => console.log(ctx));
bot.start((ctx) => {
	ctx.reply(`Привет ${ctx.message.from.first_name}!`);
	console.log(ctx);
});
bot.help((ctx) => ctx.reply('Пришли мне стикер'));
// bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('Привет', (ctx) => ctx.reply('Приветствую тебя инженер'));
bot.hears('Номер шефа', (ctx) => ctx.reply('+79997777777'));
bot.launch();
