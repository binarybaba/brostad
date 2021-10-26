import bot from "../../getBot";
import { Message } from "node-telegram-bot-api";
import searchFilters from "../../../filters/filters";

export const updateRoomsCommand: RegExp = /\/room (.+)/


export const handleUpdateRooms = (msg: Message, match: RegExpExecArray | null) => {
    const chatId = msg.chat.id;
    const rooms = match[1];
    const currentFilters = searchFilters.updateRooms(rooms)
    bot.sendMessage(chatId, `<pre><code>${JSON.stringify(currentFilters, null, 4)}</code></pre>`, {
        parse_mode: 'HTML'
    })
}