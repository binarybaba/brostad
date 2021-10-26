import bot from "../../getBot";
import { Message } from "node-telegram-bot-api";
import searchFilters from "../../../filters/filters";

export const updateSearchAreaCommand: RegExp = /\/searcharea (.+)/

export const handleUpdateSearchAreaCommand = (msg: Message, match: RegExpExecArray | null) => {
    const chatId = msg.chat.id;
    const searchArea = match[1];
    const currentFilters = searchFilters.updateSearchArea(searchArea)
    bot.sendMessage(chatId, `<pre><code>${JSON.stringify(currentFilters, null, 4)}</code></pre>`, {
        parse_mode: 'HTML'
    })
}