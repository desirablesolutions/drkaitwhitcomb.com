import type { MasonryContainerProps } from "@typings/index";

export default function Container(props: MasonryContainerProps & { children: React.ReactNode }) {

  let { children, cols, gap } = props;

  return (
    <div className={`grid scale-60 ${gap ? "gap-" + gap : ""} grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2`}>
      {children}
    </div>
  );
}
