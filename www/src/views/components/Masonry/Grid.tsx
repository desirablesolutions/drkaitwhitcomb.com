import type { MasonryGridProps } from "@typings/index";
export default function Grid(
  props: MasonryGridProps & { children: React.ReactNode }
) {
  let { children } = props;

  return <div className="grid gap-2">{children}</div>;
}
