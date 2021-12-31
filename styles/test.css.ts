import { style } from "@vanilla-extract/css";
import { fontStyles, fonts } from "./typography.css";

export const layout = style({
  padding: `16px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  gap: `16px`,
});

export const label = fontStyles.interS;

export const p = fontStyles.interM;

export const h2 = fontStyles.interL;

export const h1 = fontStyles.interXL;

export const boldText = style([
  fontStyles.interM,
  {
    fontVariationSettings: `"wght" ${fonts.inter.weights.bold}`,
    color: `red`,
  },
]);
