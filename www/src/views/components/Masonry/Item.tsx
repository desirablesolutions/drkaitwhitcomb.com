import { classSet } from "@/controllers/utils";
import { MasonryItemProps } from "@/models/typings";
import { columnSpanSx } from "@styles/index";

export function defaultSx() {
  return `z-10 h-auto w-auto flex bg-[#C8C8C8] flex-shrink-0 
  justify-center items-center m-1  cursor-pointer hover:bg-opacity-80
   flex flex-col justify-center duration-500 ease-in-out  rounded-sm hover:shadow-lg shadow-black`;
}

export default function Item({
  item,
  children,
  sx
}: { item: MasonryItemProps } & { children: any } & { sx?: string }) {
  

  const { span } = item

  return (
    <div
      className={classSet([defaultSx(), sx, columnSpanSx(span)])}
    >
      {children}
    </div>
  );
}
