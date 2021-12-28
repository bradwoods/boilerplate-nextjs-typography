import { style } from "@vanilla-extract/css";
import { fontStyles, fontWeights } from "./typography.css";

export const layout = style({
  padding: `16px`,
  display: `flex`,
  flexDirection: `column`,
  gap: `16px`,
});

export const label = fontStyles.interS;

export const p = fontStyles.interM;

export const h2 = fontStyles.interL;

export const h1 = fontStyles.interXL;

export const boldText = style([
  fontStyles.interM,
  {
    fontVariationSettings: `"wght" ${fontWeights.inter.bold}`,
  },
]);
