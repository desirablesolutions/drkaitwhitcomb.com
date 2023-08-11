import type { MasonryContainerProps } from "@typings/index";
import { classSet } from "@utils/index";
import { rowsSx, gapSx, columnsSx } from "@styles/index";

export function defaultSx() {
  return `grid`
}

export default function Container(
  { container, children }: {container: MasonryContainerProps} & { children: any }
) {
  
  const { columns, rows, gap } = container;

  return (
    <div
      className={classSet([
        defaultSx(),
        rowsSx(rows),
        gapSx(gap),
        columnsSx(columns),
      ])}
    >
      {children}
    </div>
  );
}
