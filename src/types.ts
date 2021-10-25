export enum Filter {
    BLK_typeOfHome = 'homeTypes',
    BLK_maxMonthlyCost = 'maxMonthlyCost',
    BLK_numberOfRooms = 'rooms',
    BLK_searchAreas = 'searchAreas',
    BLK_privateOrShared = 'sharedHome',
    BLK_area = 'squareMeters'
}

export type BLKSearchFilters = {
    [Filter.BLK_typeOfHome]: string,
    [Filter.BLK_maxMonthlyCost]: string,
    [Filter.BLK_numberOfRooms]: string,
    [Filter.BLK_searchAreas]: string,
    [Filter.BLK_privateOrShared]: string,
    [Filter.BLK_area]: string,
}

export type Apartment = {
    street: string,
    rent: string,
    kommune: string,
    area: string,
    frm: string,
    to: string,
    link: string
}

