import qs from "querystring";
import puppeteer from "puppeteer";

import { BLKSearchFilters, Apartment } from "../types";
import { SEARCH_PAGE, BLK_RGX_SEARCH_PAGE_APARTMENT_HREF } from "../constants";

/**
 * Fires up headless browser, pings and then gets back with a list of Apartments
 * @param filters
 * @param regexpHref
 */
export const scrapeSearchPage = async (
  filters: BLKSearchFilters,
  regexpHref = BLK_RGX_SEARCH_PAGE_APARTMENT_HREF
): Promise<Array<Apartment>> => {
  try {
    const filtersInQueryString = qs.stringify(filters);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${SEARCH_PAGE}?${filtersInQueryString}`);
    const apartments = await page.evaluate(() =>
      Array.prototype.filter // because DOM elements are NodeLists and normal Array functions cant apply directly
        .call(document.querySelectorAll("a"), (a) => regexpHref.test(a.href))
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
    return apartments;
  } catch (e) {
    throw e;
  }
};

export default scrapeSearchPage;
