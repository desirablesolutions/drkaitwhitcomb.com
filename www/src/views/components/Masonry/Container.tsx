import type { MasonryContainerProps } from "@typings/index";

export default function Container(props: MasonryContainerProps & { children: React.ReactNode }) {

  let { children, cols, gap } = props;

  return (
    <div className={`grid ${cols ? "grid-cols-" + cols : ""} ${gap ? "gap-" + gap : ""} lg:grid-cols-2 sm:grid-cols-1`}>
      {children}
    </div>
  );
}
