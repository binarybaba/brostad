import bot from "../../getBot";
import job from "../../../job/job";
import { Message } from "node-telegram-bot-api";

export const getJobStateCommand: RegExp = /^\/jobstate$/;

export const handleGetJobState = (msg: Message) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `<pre><code>${JSON.stringify(job, null, 4)}</code></pre>`,
    {
      parse_mode: "HTML",
    }
  );
};
