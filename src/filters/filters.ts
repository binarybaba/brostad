import { DEFUALT_BLK_SearchFilters } from "../config/settings";
import { BLKSearchFilters, Filter } from "../types";

class SearchFilters {
  filters: BLKSearchFilters;

  get() {
    return this.filters;
  }

  resetToDefault() {
    this.filters = { ...DEFUALT_BLK_SearchFilters };
  }

  updateHousingArea(housingArea) {
    this.filters[Filter.BLK_area] = housingArea;
    return this.filters;
  }

  updateRent(rent) {
    this.filters[Filter.BLK_maxMonthlyCost] = rent;
    return this.filters;
  }

  updateRooms(rooms) {
    this.filters[Filter.BLK_numberOfRooms] = rooms;
    return this.filters;
  }

  updateSearchArea(searchArea) {
    this.filters[Filter.BLK_searchAreas] = searchArea;
    return this.filters;
  }

  updateHomeTypes(homeTypes) {
    this.filters[Filter.BLK_typeOfHome] = homeTypes;
    return this.filters;
  }

  addSearchArea(area) {
    let searchAreas = this.filters[Filter.BLK_searchAreas].split(",");
    if (!searchAreas.includes(area)) {
      searchAreas = searchAreas.concat([area]);
    }
    this.filters[Filter.BLK_searchAreas] = searchAreas.join(",");
  }

  removeSearchArea(area) {
    this.filters[Filter.BLK_searchAreas] = this.filters[Filter.BLK_searchAreas]
      .split(",")
      .filter((a) => a === area)
      .join(",");
  }

  constructor() {
    if (!this.filters) {
      this.filters = { ...DEFUALT_BLK_SearchFilters };
    }
  }
}

const searchFilters = new SearchFilters();

export default searchFilters;
