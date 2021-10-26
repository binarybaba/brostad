import {DEFUALT_BLK_SearchFilters} from "../config/settings";
import {Filter} from "../types";

export const batataReply = `
<b>Setting up Search for ${DEFUALT_BLK_SearchFilters[Filter.BLK_typeOfHome]}!</b>
These areas will be searched for a private housing:
<code>${DEFUALT_BLK_SearchFilters[Filter.BLK_searchAreas]}</code>
These types of housing will be searched:
You can customize them. Examples:
/set_hometypes <code>apartment,house</code>
/set_rent <code>15000</code>
/set_rooms <code>3</code>
/set_kommunes <code>Barkarby~Järfälla,Sundbyberg</code>
/set_housingarea <code>80</code>
/set_interval <code>10000</code>
`;

export const setHomeTypesReply = (homeTypes, searchFilters) => `
Hometypes set to: ${homeTypes}
Here's the state of filters:
<pre><code>${JSON.stringify(searchFilters, null, 4)}</code></pre>
`
