require('dotenv').config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  THREAD_ID_MOSCOW: process.env.THREAD_ID_MOSCOW,
  THREAD_ID_SOCHI: process.env.THREAD_ID_SOCHI,
  THREAD_ID_IZHEVSK: process.env.THREAD_ID_IZHEVSK,
  GPT_API_KEY: process.env.API_KEY_CHAT
}