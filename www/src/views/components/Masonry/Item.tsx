export type MasonryItemProps = {
  children: React.ReactNode
}

export default function Item({ children }: MasonryItemProps) {
  return (
    <div className="w-full m-0 overflow-auto duration-1000 ease-in-out delay-100 shadow-sm cursor-pointer hover:-translate-y-2 hover:shadow-lg shadow-black">
      {children}
    </div>
  );
}
