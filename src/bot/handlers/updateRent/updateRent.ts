import bot from "../../getBot";
import { Message } from "node-telegram-bot-api";
import searchFilters from "../../../filters/filters";

export const updateRentCommand: RegExp = /\/updateRent (.+)/


export const handleUpdateRent = (msg: Message, match: RegExpExecArray | null) => {
    const chatId = msg.chat.id;
    const rent = match[1];
    const currentFilters = searchFilters.updateRent(rent)
    bot.sendMessage(chatId, `<pre><code>${JSON.stringify(currentFilters, null, 4)}</code></pre>`, {
        parse_mode: 'HTML'
    })
}