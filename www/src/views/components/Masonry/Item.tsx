export type MasonryItemProps = {
  children: React.ReactNode
}

export default function Item({ children }: MasonryItemProps) {
  return (
    <div className="w-auto duration-1000 z-10 ease-in-out delay-100 shadow-sm cursor-pointer rounded-small hover:-translate-y-2 hover:shadow-lg shadow-black">
      {children}
    </div>
  );
}
