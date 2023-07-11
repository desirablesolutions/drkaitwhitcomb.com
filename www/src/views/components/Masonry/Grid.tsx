export type GridProps = {
  children?: any;
};

export default function Grid(props: GridProps) {
  let { children } = props;

  return    <div className="grid gap-4">
{children }
</div>

}
