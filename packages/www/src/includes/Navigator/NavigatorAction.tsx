export function NavigatorAction({ label, url, icon, onClick, open, className }: any) {
    const baseClasses = "z-50 flex items-center justify-center w-auto h-8 px-2 text-black duration-200 bg-white border border-gray-700 rounded-full shadow-sm hover:shadow-md shadow-black bg-opacity-40 backdrop-blur-md dark:border-gray-600 dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400 transition-opacity";
    const visibility = open
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none";

    const content = icon ? (
        <span className="w-5 h-5 flex items-center justify-center" aria-hidden>{icon}</span>
    ) : (
        <span className="text-black text-md">{label}</span>
    );

    if (onClick) {
        return (
            <button
                type="button"
                className={`${baseClasses} ${visibility} ${className ?? ""}`}
                onClick={onClick}
                aria-label={label || "action"}
            >
                {content}
            </button>
        );
    }

    return (
        <a
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className={`${baseClasses} ${visibility} ${className ?? ""}`}
            href={url}
            aria-label={label || "action"}
        >
            {content}
        </a>
    );
}