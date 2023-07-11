export default function Container(props: any) {

  let { children, sx } = props;

  return (
    <div className="grid gap-2 lg:grid-cols-1 sm:grid-cols-1">
      {children}
    </div>
  );
}
