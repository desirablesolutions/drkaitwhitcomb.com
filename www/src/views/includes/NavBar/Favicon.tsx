
import type  { NavBarProps } from "@typings/index"
export default function Favicon({ favicon } :{ favicon: NavBarProps["favicon"]}) {
  
    return (
      <main className="flex justify-center w-full border-b border-black">
      <div>
        <a href="/">
          <img
            className="object-contain pb-2 mt-2 h-36"
            src={favicon?.image?.src}
            alt="logo"
          />
        </a>
      </div>
    </main>
    )
}