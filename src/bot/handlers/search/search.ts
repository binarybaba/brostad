import { Message } from "node-telegram-bot-api";
import bot from "../../getBot";


export const searchCommand: RegExp = /^\/search$/

export const handleSearch = (msg: Message, match: RegExpExecArray | null) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Setting up search')
}

