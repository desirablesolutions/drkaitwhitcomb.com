import type {
  TailwindGridRowsType,
  TailwindClassList,
  TailwindColumnSpanType,
  TailwindGridGapType,
  TailwindGridColumnType,
} from "@typings/index";
import { DECREMENT_BY_ONE } from "@utils/index";

export function columnsSx(cols: number): TailwindClassList {
  const presets: TailwindGridColumnType[] = [
    "grid-cols-1",
    "lg:grid-cols-2 sm:grid-cols-1",
    "lg:grid-cols-3 sm:grid-cols-1",
    "lg:grid-cols-4 sm:grid-cols-1",
  ];

  return `${presets[DECREMENT_BY_ONE(cols < presets.length ? cols : 0)]}`;
}

export function rowsSx(rows: number): TailwindClassList {
  const presets: TailwindGridRowsType[] = [
    "grid-rows-1",
    "grid-rows-2",
    "grid-rows-3",
  ];

  return `${presets[DECREMENT_BY_ONE(rows % presets.length)]}`;
}

export function gapSx(gap: number): TailwindClassList {
  const presets: TailwindGridGapType[] = ["gap-2", "gap-4", "gap-6", "gap-8"];

  return `${presets[DECREMENT_BY_ONE(gap % presets.length)]}`;
}

export function columnSpanSx(span: number): TailwindClassList {
  const presets: TailwindColumnSpanType[] = [
    "col-span-1",

    "col-span-2",

    "col-span-3",
    "col-span-4",
  ];

  return `${presets[DECREMENT_BY_ONE(span % presets.length)]}`;
}
