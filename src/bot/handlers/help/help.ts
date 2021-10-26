import { Message } from "node-telegram-bot-api";
import bot from "../../getBot";


export const helpCommand: RegExp = /^\/help$/

export const htmlReply = `
<b>MAN page</b>

To change options, follow these commands:

/msq <i>Updates housing area in meter square</i>
Example: <code>/msq 90</code>

/rent <i>Updates max rent</i>
Usage: <code>/rent 12000</code>

/room <i>Updates number of rooms</i>
Usage: <code>/room 2</code>

/searcharea <i>Updates areas in Stockholm to look for</i>
Usage: <code>/searcharea Sundyberg,Järfälla</code>

/frequency <i>Updates frequency of searches (in minutes)</i>
Usage: <code>/frequency 2</code> will perform search every 2 minutes

/house <i>Will update the type of housing</i>
Usage: <code>/house apartments,villa,...</code>

/filters <i>Will show the current state of filters</i>
/jobstate <i>Will show the current state of the jobs</i>
/start <i>Starts the job</i>
/stop <i>Stops the job</i>
/reset <i>Resets the internal state of the job. Use this to override stale closure states</i>
/restart <i>Restarts the job</i>
/hardreset <i>Restores filters and job to default and ends any running jobs</i>


/help <i>Displays this manual</i>

`

export const handleHelp = (msg: Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, htmlReply, {
        parse_mode: 'HTML'
    })
}

