import { Message } from "node-telegram-bot-api";
import bot from "../../getBot";


export const searchCommand: RegExp = /^\/search$/

export const htmlReply = `
<b>Welcome bro</b>

To change options, follow these commands:

/msq <i>Updates housing area in meter square</i>
Example: <code>/msq 90</code>

/rent <i>Updates max rent</i>
Example: <code>/rent 12000</code>

/room <i>Updates number of rooms</i>
Example: <code>/room 2</code>

/searcharea <i>Updates areas in Stockholm to look for</i>
Example: <code>/searcharea Sundyberg,Järfälla</code>

/frequency <i>Updates frequency of searches (in minutes)</i>
Example: <code>/frequency 2</code> will perform search every 2 minutes

/house <i>Will update the type of housing</i>
Example: <code>/house apartments,villa,...</code>

/filters <i>Will show the current state of filters</i>
`

export const handleSearch = (msg: Message, match: RegExpExecArray | null) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, htmlReply, {
        parse_mode: 'HTML'
    })
}

