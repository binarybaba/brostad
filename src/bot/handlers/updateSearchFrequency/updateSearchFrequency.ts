import bot from "../../getBot";
import job from '../../../job/job'
import { Message } from "node-telegram-bot-api";

export const updateSearchFrequency: RegExp = /\/frequency (.+)/


export const handleUpdateSearchFrequency = (msg: Message, match: RegExpExecArray | null) => {
    let searchFrequencyMilliseconds: number;
    const chatId = msg.chat.id;
    const searchFrequencyMinutes = Number(match[1]);
    if(isNaN(searchFrequencyMinutes)) {
        bot.sendMessage(chatId, `Doesn't look like a number`)
    }
    else if(Math.abs(Number(match[1])) <= 0 ) {
        bot.sendMessage(chatId, `Can't deal with negative numbers man`)
    }
    else {
        try {
            searchFrequencyMilliseconds = searchFrequencyMinutes*60*1000;
            job.updateMilliseconds(searchFrequencyMilliseconds)
            job.restart();
            bot.sendMessage(chatId, `<pre><code>${JSON.stringify(job, null, 4)}</code></pre>`,{
                parse_mode: "HTML",
            })
        } catch (e) {
            console.error(e)
        }
    }
}
