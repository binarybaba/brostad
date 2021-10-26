import bot from "../../getBot";
import searchFilters from "../../../filters/filters";
import { Message } from "node-telegram-bot-api";

export const getFiltersCommand: RegExp = /^\/filters$/;

export const handleGetFilters = (msg: Message) => {
  const chatId = msg.chat.id;
  const currentFilters = searchFilters.get();
  bot.sendMessage(
    chatId,
    `<pre><code>${JSON.stringify(currentFilters, null, 4)}</code></pre>`,
    {
      parse_mode: "HTML",
    }
  );
};
