import bot from "../../getBot";
import job from "../../../job/job";
import { Message } from "node-telegram-bot-api";

export const stopJobCommand: RegExp = /^\/stop$/;

export const handleStopJob = (msg: Message) => {
    const chatId = msg.chat.id;
    try {
        job.stopJob()
        bot.sendMessage(chatId, 'Stopped!');
    } catch(e) {
        bot.sendMessage(chatId, `Sorry, couldn't stop the job. Here's the error: ${JSON.stringify(e)}. Try changing the /frequency`)
    }
};
