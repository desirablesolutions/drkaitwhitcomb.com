import type { LinkProps, NavBarProps } from "@/models/typings"
import Link from "./Link"
import { tuid } from "@/controllers/utils"


export default function Links({ links }: { links: NavBarProps["links"]}) {
    return (
        <div className="flex mb-2 justify-center h-full overflow-hidden w-full  gap-8 mt-2 overflow-x-hidden border-black border-opacity-100 no-scrollbar border-seperate border-1">
        {links.map((link: LinkProps) => (
          <Link key={tuid()} link={link} />
        ))}
      </div>
    )
}