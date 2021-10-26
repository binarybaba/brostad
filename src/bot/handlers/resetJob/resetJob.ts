import bot from "../../getBot";
import job from "../../../job/job";
import searchFilters from "../../../filters/filters";
import { Message } from "node-telegram-bot-api";
import { Filter } from "../../../types";


export const resetJobCommand: RegExp = /^\/reset$/;


export const handleResetJob = (msg: Message) => {
    const chatId = msg.chat.id;
    job.resetState();
    bot.sendMessage(
        chatId,
        `<pre><code>${JSON.stringify(job.state(), null, 4)}</code></pre>`,
        {
            parse_mode: "HTML",
        }
    );
};
