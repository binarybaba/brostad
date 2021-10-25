import { BLKSearchFilters, Filter } from "../types";

export const DEFUALT_BLK_SearchFilters: BLKSearchFilters = {
  [Filter.BLK_typeOfHome]: "apartment,house",
  [Filter.BLK_maxMonthlyCost]: "15000",
  [Filter.BLK_numberOfRooms]: "3",
  [Filter.BLK_searchAreas]:
    "Barkarby~Järfälla,Hässelby-Vällingby_stadsdelsområde~Stockholm,Kallhäll~Stäket,Spånga-Tensta_stadsdelsområde~Stockholm,Sundbyberg",
  [Filter.BLK_privateOrShared]: "privateHome",
  [Filter.BLK_area]: "80",
};

export const DEFAULT_INTERVAL_MILLISECONDS: number = 10000;

export const BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN || '';
