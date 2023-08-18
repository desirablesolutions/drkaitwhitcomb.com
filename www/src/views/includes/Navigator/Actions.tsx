import { tuid } from "@utils/index"


export function Action({ label, url, action }: any) {
  return (
    <>
      <a
        data-tooltip-target="tooltip-share"
        data-tooltip-placement="left"
        className="z-40 flex items-center justify-center w-auto h-8 px-2 text-gray-500 duration-700 delay-700 bg-white border border-gray-200 rounded-sm shadow-sm opacity-0 group-hover:opacity-100 shadow-black hover:text-gray-900 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        href={url}
      >
        <span className="text-black">{label}</span>
      </a>

      <a
        id="tooltip-share"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {label}
        <div className="tooltip-arrow" data-popper-arrow="" />
      </a>
    </>
  );
}

export function Container({ children }: any) {
  return (
    <div
      id="speed-dial-menu-bottom-right"
      className="flex-col items-center mb-4 space-y-2"
    >
      {children}
    </div>
  );
}

export default function NavigatorActions({ actions }: any) {
  return (
    <Container>
     {
      actions?.map((action: any) => {
        return <Action {...action} key={tuid()} />
      })
     }
    </Container>
  );
}
