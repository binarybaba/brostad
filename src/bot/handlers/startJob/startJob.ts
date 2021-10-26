import bot from "../../getBot";
import job from "../../../job/job";
import searchFilters from "../../../filters/filters";
import { Message } from "node-telegram-bot-api";
import { Filter } from "../../../types";
import { scrapeSearchPage } from "../../../scrape";
import { generateHousingReply } from './generateHousingReply'


export const startJobCommand: RegExp = /^\/start$/;

const getHtmlReply = (filters) => `
<b>Started a new Search!</b>

Looking for <b>${filters[Filter.BLK_typeOfHome]}</b>
Searching in these neighborhoods: <b>${filters[Filter.BLK_searchAreas]}</b>
Rooms: Minimum <b>${filters[Filter.BLK_numberOfRooms]}</b>
Area: <b>${filters[Filter.BLK_area]} msq</b>
Rent: <b>${filters[Filter.BLK_maxMonthlyCost]} SEK</b>

This search is scheduled to run every ${job.milliseconds/60000} minutes and will notify if something new pops up.
`

export const handleStartJob = (msg: Message) => {
    const chatId = msg.chat.id;
    const currentFilters = searchFilters.get();
    bot.sendMessage(
        chatId,
        getHtmlReply(currentFilters),
        {
            parse_mode: "HTML",
        }
    );
    bot.sendMessage(
        '@brostadchannel',
        getHtmlReply(currentFilters),
        {
            parse_mode: "HTML",
        }
    );
    job.startJob(async () => {
        const currentFilters = searchFilters.get();
        const previousHousingList = job.getResults();
        const housings = await scrapeSearchPage(currentFilters)
        if (JSON.stringify(previousHousingList) !== JSON.stringify(housings)) { // terrible. but im in a hurry.
            job.updateResults(housings)
            bot.sendMessage('@brostadchannel', generateHousingReply(housings), {
                parse_mode: 'HTML'
            })
        }
    })
};
