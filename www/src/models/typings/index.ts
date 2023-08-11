export type Weak<Type> = Type | undefined | null;

export type MasonryItemTypes =
  | { type: "map" }
  | { type: "data" }
  | { type: "text" }
  | { type: "image" }
  | { type: "callout"; link: LinkProps, title: string };

export type LinkProps = {
  url: string;
  label: string;
};

export type MasonryItemProps = MasonryItemTypes & {
  span: number,
}

export type MasonryGridProps = MasonryProps & {
  span: number;
  gap: number;
  columns: number;
  rows: number;
  grids: MasonryGridProps[];
  items: MasonryItemProps[];
};

export type MasonryContainerProps = {
  columns: number;
  rows: number;
  gap: number;
};

export type MasonryProps = {
  grids: MasonryGridProps[];
  items: MasonryItemProps[];
  container: MasonryContainerProps;
};



export type TailwindGridColumnType =
  | "grid-cols-1"
  | "lg:grid-cols-2 sm:grid-cols-1"
  | "lg:grid-cols-3 sm:grid-cols-1"
  | "lg:grid-cols-4 sm:grid-cols-1"


  export type TailwindGridRowsType =
  | "grid-rows-1"
  | "grid-rows-2"
  | "grid-rows-3"
  | "grid-rows-4"
  | "grid-rows-4";

export type TailwindGridGapType = "gap-2" | "gap-4" | "gap-6" | "gap-8";

export type TailwindColumnSpanType =
  | "col-span-1"
  | "col-span-2"
  | "col-span-3"
  | "col-span-4"


  export type ImageProps = {
    src: string,
    alt: string,
    height: string,
    className: string, 
    width: string,
    loading: string
  }
  
  export type FaviconProps = {
    image: ImageProps
  }

  export type TailwindClassList = string | string[];


  export type NavBarProps = {
    links?: any;
    favicon?: FaviconProps
  };