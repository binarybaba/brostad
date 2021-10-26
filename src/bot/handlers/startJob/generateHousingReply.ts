import { Housing } from "../../../types";

export const generateHousingReply = (housings: Array<Housing>) =>
  housings
    .map(
      (housing) => `
            <b>${housing.street}</b>
            <b>${housing.rent} SEK</b>
            <a href="${housing.link}">${housing.kommune} | ${housing.area}</a>
            ${housing.frm} - ${housing.to}  
        `
    )
    .join("")
    .replace(/  +/g, "");
