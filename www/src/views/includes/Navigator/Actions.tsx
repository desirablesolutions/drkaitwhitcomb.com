export function Action({ label, url, action }: any) {
  return (
    <>
      <button
        type="button"
        data-tooltip-target="tooltip-share"
        data-tooltip-placement="left"
        className="flex z-40 opacity-0 delay-700 group-hover:opacity-100 duration-700 justify-center items-center w-auto px-2 h-8 shadow-sm shadow-black text-gray-500 hover:text-gray-900 bg-white rounded-sm border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
      >
        <span className="text-black">Share</span>
      </button>

      <div
        id="tooltip-share"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Share
        <div className="tooltip-arrow" data-popper-arrow="" />
      </div>
    </>
  );
}

export function Container({ children }: any) {
  return (
    <div
      id="speed-dial-menu-bottom-right"
      className="flex-col items-center hidden mb-4 space-y-2 group-hover:sm:flex"
    >
      {children}
    </div>
  );
}

export default function NavigatorActions({ actions }: any) {
  return (
    <Container>
      <Action />
      <Action />
      <Action />
      <Action />
    </Container>
  );
}
