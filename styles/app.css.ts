import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { fonts } from "./typography.css";

globalFontFace(`"${fonts.inter.name}"`, {
  fontDisplay: `swap`,
  fontStyle: `normal`,
  fontWeight: fonts.inter.weights.variable,
  src: `url("${fonts.inter.files.variable}") format("${fonts.inter.format}")`,
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
