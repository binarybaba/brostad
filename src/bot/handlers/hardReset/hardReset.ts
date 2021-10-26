import bot from "../../getBot";
import job from "../../../job/job";
import searchFilters from "../../../filters/filters";
import { Message } from "node-telegram-bot-api";

export const hardResetCommand: RegExp = /^\/hardreset$/;

const getHTMLReply = () => `
Job:
<pre><code>${JSON.stringify(job.state(), null, 4)}</code></pre>
Filters:
<pre><code>${JSON.stringify(searchFilters.get(), null, 4)}</code></pre>
`;

export const handleHardResetJob = (msg: Message) => {
    const chatId = msg.chat.id;
    const reply = getHTMLReply();
    job.resetState();
    searchFilters.resetToDefault();
    job.stopJob();
    bot.sendMessage(chatId, reply, {
        parse_mode: "HTML"
    });
};
