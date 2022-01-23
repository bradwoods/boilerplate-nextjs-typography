import { style } from "@vanilla-extract/css";
import { fontStyles, fonts } from "./typography.css";

export const layout = style({
  padding: `16px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  gap: `16px`,
});

export const label = fontStyles.INTER_SMALL;

export const p = fontStyles.INTER_MED;

export const h2 = fontStyles.INTER_LARGE;

export const h1 = fontStyles.INTER_XLARGE;

export const boldText = style([
  fontStyles.INTER_MED,
  {
    fontVariationSettings: `"wght" ${fonts.INTER.weights.bold}`,
    color: `red`,
  },
]);
