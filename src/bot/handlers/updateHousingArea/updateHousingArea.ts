import bot from "../../getBot";
import searchFilters from "../../../filters/filters";
import { Message } from "node-telegram-bot-api";

export const updateHousingAreaCommand: RegExp = /\/updateHousingArea (.+)/


export const handleUpdateHousingArea = (msg: Message, match: RegExpExecArray | null) => {
    const chatId = msg.chat.id;
    const housingArea = match[1];
    const currentFilters = searchFilters.updateHousingArea(housingArea)
    bot.sendMessage(chatId, `<pre><code>${JSON.stringify(currentFilters, null, 4)}</code></pre>`, {
        parse_mode: 'HTML'
    })
}