import qs from "querystring";
import puppeteer from "puppeteer";

import { BLKSearchFilters, Housing } from "../types";
import { SEARCH_PAGE } from "../constants";

/**
 * Fires up headless browser, pings and then gets back with a list of Housings
 * @param filters
 */
export const scrapeSearchPage = async (
  filters: BLKSearchFilters
): Promise<Array<Housing>> => {
  try {

    const filtersInQueryString = qs.stringify(filters);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${SEARCH_PAGE}?${filtersInQueryString}`);
    const housings = await page.evaluate(() =>
      Array.prototype.filter // because DOM elements are NodeLists and normal Array functions cant apply directly
        .call(document.querySelectorAll("a"), (a) => /\/p2\/en\/home/.test(a.href))
        .map((DOMNode) => {
          const street = DOMNode.querySelector("h2").innerText;
          const area = DOMNode.querySelector("h5").innerText;
          const kommune = DOMNode.querySelector('div[color="sub"]').innerText;
          const rent = DOMNode.querySelector('div[size="24"]').innerText;
          const [frm, to] =
            DOMNode.querySelector('div[size="14"]').innerText.split("\n");
          return {
            street,
            rent,
            kommune,
            area,
            frm,
            to,
            link: DOMNode.href,
          };
        })
    );
    await browser.close();
    return housings;
  } catch (e) {
    console.error(e);
  }
};

export default scrapeSearchPage;
