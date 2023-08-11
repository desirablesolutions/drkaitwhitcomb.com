import { classSet } from "@/controllers/utils";
import { MasonryItemProps } from "@/models/typings";
import { columnSpanSx } from "@styles/index";

export function defaultSx() {
  return `z-10 h-auto w-auto flex gri flex-shrink-0 justify-center items-center  cursor-pointer hover:bg-opacity-40 flex flex-col justify-start duration-500 ease-in-out p-4 bg-opacity-20 rounded-sm hover:shadow-lg shadow-black`;
}

export default function Item({
  item,
  children,
}: { item: MasonryItemProps } & { children: any }) {
  

  const { span } = item

  return (
    <div
     
      className={classSet([defaultSx(), "bg-gray-700",columnSpanSx(span)])}
    >
      {children}
    </div>
  );
}
