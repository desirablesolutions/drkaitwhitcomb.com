import type { MasonryGridProps } from "@typings/index";
import {  rowsSx, gapSx, columnsSx, columnSpanSx } from "@styles/index";
import { classSet } from "@/controllers/utils";


export function defaultSx() {
  return `grid`
}
export default function Grid({
  grid,
  children,
}: { grid: MasonryGridProps } & { children: React.ReactNode }) {
  
  const { columns, rows, gap, span } = grid;

  return (
    <div
      className={classSet([
        rowsSx(rows),
        gapSx(gap),
        columnSpanSx(span),
        columnsSx(columns),
        defaultSx()
      ])}
    >
      {children}
    </div>
  );
}
