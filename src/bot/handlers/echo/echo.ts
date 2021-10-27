import { Message } from "node-telegram-bot-api";
import bot from "../../getBot";


export const echoCommand: RegExp = /^\/echo$/

export const handleEcho = (msg: Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'echo!')
}

