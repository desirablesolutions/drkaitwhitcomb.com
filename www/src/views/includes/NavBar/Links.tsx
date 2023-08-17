import type { LinkProps, NavBarProps } from "@/models/typings"
import Link from "./Link"
import { tuid } from "@/controllers/utils"


export default function Links({ links }: { links: NavBarProps["links"]}) {
    return (
        <div className="items-center justify-center hidden w-full h-full mt-2 mb-2 overflow-hidden overflow-x-hidden border-black border-opacity-100 gap-44 lg:flex no-scrollbar border-seperate border-1">
        {links?.map((link: LinkProps) => (
         
         <Link key={tuid()} link={link} />

        ))}
      </div>
    )
}