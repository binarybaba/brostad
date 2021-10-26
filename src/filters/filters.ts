import { DEFUALT_BLK_SearchFilters } from "../config/settings";
import {BLKSearchFilters, Filter} from "../types";

class SearchFilters {

    filters: BLKSearchFilters

    get() {
        return this.filters;
    }

    updateHousingArea(housingArea) {
        this.filters[Filter.BLK_area] = housingArea
        return this.filters
    }

    updateRent(rent) {
        this.filters[Filter.BLK_maxMonthlyCost] = rent
        return this.filters
    }

    updateRooms(rooms) {
        this.filters[Filter.BLK_numberOfRooms] = rooms
        return this.filters
    }

    updateSearchArea(searchArea) {
        this.filters[Filter.BLK_searchAreas] = searchArea;
        return this.filters
    }

    updateHomeTypes(homeTypes) {
        this.filters[Filter.BLK_typeOfHome] = homeTypes;
        return this.filters
    }

    constructor() {
        if(!this.filters) {
            this.filters = { ...DEFUALT_BLK_SearchFilters };
        }
    }
}

const searchFilters = new SearchFilters();

export default searchFilters;