import bot from "../../getBot";
import { Message } from "node-telegram-bot-api";
import searchFilters from "../../../filters/filters";

export const updateHomeTypesCommand: RegExp = /\/updateHomeTypes (.+)/


export const handleUpdateHomeTypes = (msg: Message, match: RegExpExecArray | null) => {
    const chatId = msg.chat.id;
    const typesOfHome = match[1];
    const currentFilters = searchFilters.updateSearchArea(typesOfHome)
    bot.sendMessage(chatId, `<pre><code>${JSON.stringify(currentFilters, null, 4)}</code></pre>`, {
        parse_mode: 'HTML'
    })
}