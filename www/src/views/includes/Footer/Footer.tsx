
export type FooterProps = {
    copyright?: string
}

export default function Footer({ copyright }: FooterProps) {

    const Copyright = () => {
        return (
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {copyright ?? "© 2022 Kait Whitcomb"}
            </span>
        )
    }
    const Links = () => {
        return (
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                        Licensing
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        )
    }

    return (
        <footer className="w-full p-4 border-t border-gray-200 shadow relative-20 md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
            <Copyright />
            <Links />
        </footer>

    )
}