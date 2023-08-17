import type { MasonryContainerProps } from "@typings/index";
import { classSet } from "@utils/index";
import { rowsSx, gapSx, columnsSx } from "@styles/index";

export function defaultSx() {
  return `sticky top-0 grid mt-8 h-3/4 w-3/4 object-scale-down`
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
