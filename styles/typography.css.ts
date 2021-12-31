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

enum Id {
  inter = "inter",
}

type Fonts = Record<Id, Meta>;

const FONT_DIR = `/fonts`;

export const fonts: Fonts = {
  [Id.inter]: {
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
enum TypeScale {
  s = 12.8,
  m = 16,
  l = 20,
  xl = 25,
}

interface Props {
  id: Id;
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

enum StyleId {
  interS = "interS",
  interM = "interM",
  interL = "interL",
  interXL = "interXL",
}

export const fontStyles: Record<StyleId, string> = {
  [StyleId.interS]: calcFontCss({
    id: Id.inter,
    leading: 16.5,
    size: TypeScale.s,
  }),
  [StyleId.interM]: calcFontCss({
    id: Id.inter,
    leading: 21,
    size: TypeScale.m,
  }),
  [StyleId.interL]: calcFontCss({
    id: Id.inter,
    leading: 25,
    size: TypeScale.l,
  }),
  [StyleId.interXL]: calcFontCss({
    id: Id.inter,
    leading: 32,
    size: TypeScale.xl,
  }),
};

export const fontFiles = Object.values(fonts).flatMap((font) => Object.values(font.files));
