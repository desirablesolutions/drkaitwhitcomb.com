export type GridProps = {
  size: (number & 1) | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  children?: any;
};

export default function Grid(props: GridProps) {
  let { size, children } = props;

  return <div className={`grid grid-cols-${size}`}>{children}</div>;
}
