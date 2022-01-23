import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { fonts } from "./typography.css";

globalFontFace(`"${fonts.INTER.name}"`, {
  fontDisplay: `optional`,
  fontStyle: `normal`,
  fontWeight: fonts.INTER.weights.variable,
  src: `url("${fonts.INTER.files.variable}") format("${fonts.INTER.format}")`,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("p, strong, h1, h2, h3, h4, h5, h6", {
  overflowWrap: `break-word`,
  fontWeight: 400,
});
