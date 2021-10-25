import TelegramBot from 'node-telegram-bot-api';
import { BOT_TOKEN } from "./config/settings";
import { scrapeSearchPage } from "./scrape";
import { DEFUALT_BLK_SearchFilters } from "./config/settings";

let timer;


try {
    const bot =  new TelegramBot(BOT_TOKEN, {polling: true});
    bot.onText(/\/poll (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const pollInterval = match[1];
        timer = setInterval(async () => {
            // scrapeSearchPage(DEFUALT_BLK_SearchFilters)

        // 	bot.sendMessage('@brostadchannel', `
        //
        // 	`)
            bot.sendMessage(chatId, `pollInterval ${pollInterval}.`);
        }, pollInterval)
    });

    bot.onText(/\/clear (.+)/, (msg) => {
        const chatId = msg.chat.id;
        clearInterval(timer)
        bot.sendMessage(chatId, `Cleared!`);
    })
    console.log('Done! Brostad is born again!')
} catch (e) {
    console.log('Cant initialize bot:')
    console.error(e);
}
