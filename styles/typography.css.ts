import { FontMetrics } from "@capsizecss/core";
import interFontMetrics from "@capsizecss/metrics/inter";
import { createTextStyle } from "@capsizecss/vanilla-extract";
import { style } from "@vanilla-extract/css";

interface Meta {
  fallback: string;
  files: {
    variable?: string;
    normal?: string;
    bold?: string;
  };
  format: string;
  metrics: FontMetrics;
  name: string;
  weights: {
    variable?: string;
    normal?: number;
    bold?: number;
  };
}

type FontFamilyId = "INTER";

type Fonts = Record<FontFamilyId, Meta>;

const FONT_DIR = `/fonts`;

export const fonts: Fonts = {
  INTER: {
    fallback: `sans-serif`,
    files: {
      variable: `${FONT_DIR}/Inter-VariableFont_slnt,wght.ttf`,
    },
    format: `truetype-variations`,
    metrics: interFontMetrics,
    name: `Inter`,
    weights: {
      variable: `100 900`,
      normal: 400,
      bold: 700,
    },
  },
};

// https://type-scale.com
// Major Third
// base: 16
const typeScale = {
  s: 12.8,
  m: 16,
  l: 20,
  xl: 25,
};

interface Props {
  id: FontFamilyId;
  leading: number;
  size: number;
}

function calcFontCss({ id, leading, size }: Props) {
  return style([
    createTextStyle({
      fontMetrics: fonts[id].metrics,
      fontSize: size,
      leading,
    }),
    {
      fontFamily: `"${fonts[id].name}", ${fonts[id].fallback}`,
    },
  ]);
}

type StyleId = "INTER_SMALL" | "INTER_MED" | "INTER_LARGE" | "INTER_XLARGE";

export const fontStyles: Record<StyleId, string> = {
  INTER_SMALL: calcFontCss({
    id: "INTER",
    leading: 16.5,
    size: typeScale.s,
  }),
  INTER_MED: calcFontCss({
    id: "INTER",
    leading: 21,
    size: typeScale.m,
  }),
  INTER_LARGE: calcFontCss({
    id: "INTER",
    leading: 25,
    size: typeScale.l,
  }),
  INTER_XLARGE: calcFontCss({
    id: "INTER",
    leading: 32,
    size: typeScale.xl,
  }),
};

export const fontFiles = Object.values(fonts).flatMap((font) => Object.values(font.files));
