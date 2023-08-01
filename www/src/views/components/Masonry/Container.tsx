import type { MasonryContainerProps } from "@typings/index";

export default function Container(props: MasonryContainerProps & { children: React.ReactNode }) {

  let { children, cols, gap } = props;

  return (
    <div className={`grid ${cols ? "grid-cols-" + cols : ""} ${gap ? "gap-" + gap : ""} grid-cols-2`}>
      {children}
    </div>
  );
}
