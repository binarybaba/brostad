import * as Handlers  from './bot/handlers'
import bot from "./bot/getBot";


try {
    bot.onText(Handlers.helpCommand, Handlers.handleHelp);
    bot.onText(Handlers.updateHousingAreaCommand, Handlers.handleUpdateHousingArea);
    bot.onText(Handlers.updateRentCommand, Handlers.handleUpdateRent);
    bot.onText(Handlers.updateRoomsCommand, Handlers.handleUpdateRooms);
    bot.onText(Handlers.updateSearchAreaCommand, Handlers.handleUpdateSearchAreaCommand);
    bot.onText(Handlers.updateHomeTypesCommand, Handlers.handleUpdateHomeTypes);
    bot.onText(Handlers.updateSearchFrequency, Handlers.handleUpdateSearchFrequency);
    bot.onText(Handlers.getFiltersCommand, Handlers.handleGetFilters);
    bot.onText(Handlers.getJobStateCommand, Handlers.handleGetJobState);
    bot.onText(Handlers.startJobCommand, Handlers.handleStartJob);
    bot.onText(Handlers.stopJobCommand, Handlers.handleStopJob);
    bot.onText(Handlers.resetJobCommand, Handlers.handleResetJob);
    bot.onText(Handlers.hardResetCommand, Handlers.handleHardResetJob);

    console.log('Brostad is born again.')

} catch(e) {
    console.error('Something went wrong while reviving brostad. Hes dead jim!')
    console.error(e);
}
