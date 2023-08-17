import { default as Link } from "./Link"


export default function FooterLinks({ links }: any) {
    return (
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {links.map((link) => (
          <Link {...link} key={Date.now()} />
        ))}
      </ul>

    )
}