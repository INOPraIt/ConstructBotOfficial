const fs = require('fs');
const { Telegraf, Scenes, session, Markup } = require('telegraf');
const { BOT_TOKEN, THREAD_ID_SOCHI, THREAD_ID_IZHEVSK } = require('./config');
const axios = require('axios');

const bot = new Telegraf(BOT_TOKEN);

const SCENE_SELECT_CITY = 'select_city';
const SCENE_WRITE_APPLICATION = 'write_application';

let jsonData;
try {
  const data = fs.readFileSync('texts.json', 'utf8');
  jsonData = JSON.parse(data);
} catch (err) {
  console.error("Ошибка при чтении файла:", err);
  process.exit(1); // Завершаем процесс в случае ошибки
}

bot.start((ctx) => {
  ctx.reply(jsonData.start);
});

bot.command('self', (ctx) => {
  ctx.scene.enter(SCENE_SELECT_CITY);
});

const cityToGroupId = {
  'Сочи': THREAD_ID_SOCHI,
  'Ижевск': THREAD_ID_IZHEVSK
};

const selectCityScene = new Scenes.BaseScene(SCENE_SELECT_CITY);
selectCityScene.enter((ctx) => ctx.reply(
  'Please, select your city:',
  Markup.keyboard(['Москва', 'Сочи', 'Ижевск']).oneTime().resize()
));

selectCityScene.on('text', async (ctx) => {
  const selectedCity = ctx.message.text;
  if (Object.keys(cityToGroupId).includes(selectedCity)) {
    ctx.session.city = selectedCity;
    await ctx.scene.enter(SCENE_WRITE_APPLICATION);
  } else {
    await ctx.reply('Такого города не существует, выберете город из списка');
  }
});

const writeApplicationScene = new Scenes.BaseScene(SCENE_WRITE_APPLICATION)

writeApplicationScene.enter((ctx) => ctx.reply('Напишите описание заявки:'));
writeApplicationScene.on('text', async (ctx) => {
  const applicationText = ctx.message.text;
  const groupId = cityToGroupId[ctx.session.city];

  try {
    await ctx.telegram.sendMessage(groupId, `Новая заявка ${ctx.message.from.username || ctx.message.from.first_name}:\n${applicationText}`);
    await ctx.reply('Your application has been sent.');
  } catch (error) {
    console.log('Произошла ошибка при отправке сообщения в группу', error);
    await ctx.reply('Произошла ошибка при отправке вашей заявки.');
  }

  await ctx.scene.leave();
});

const stage = new Scenes.Stage([selectCityScene, writeApplicationScene], {
  default: SCENE_SELECT_CITY
});

bot.use(session());
bot.use(stage.middleware());

bot.catch((err, ctx) => {
  console.error(`Обнаружена ошибка для ${ctx.updateType}`, err);
});

bot.launch().then(() => {
  console.log('Bot started.');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
