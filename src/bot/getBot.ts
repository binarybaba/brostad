import TelegramBot from 'node-telegram-bot-api';

class BrostadBot {
    brostadBot: TelegramBot;
    BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN || '';
    constructor() {
        if (!this.brostadBot) {
            this.brostadBot = new TelegramBot(this.BOT_TOKEN, {polling: true});
        }
        return this;
    }
}

const { brostadBot } = new BrostadBot();
Object.freeze(brostadBot);

export default brostadBot;
