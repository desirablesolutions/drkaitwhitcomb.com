import type { MasonryContainerProps } from "@typings/index";

export default function Container(props: MasonryContainerProps & { children: React.ReactNode }) {

  let { children, cols, gap } = props;

  return (
    <div className={`grid ${cols ? "lg:grid-cols-" + cols : ""} ${gap ? "gap-" + gap : ""} grid-cols-1`}>
      {children}
    </div>
  );
}
