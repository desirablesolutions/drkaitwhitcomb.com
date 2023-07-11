export type Weak<Type> = Type | undefined | null;

export type MasonryItemTypes = "image" | "text";

export type MasonryItemProps =
  | ({ order?: number; type: MasonryItemTypes } & { type: "image"; src: string })
  | { type: "text"; content: string };

export type MasonryGridProps = MasonryProps & {
  container?: Weak<MasonryProps>
}

export type MasonryContainerProps = {
  cols?: number;
  gap?: number;
};

export type MasonryProps = {
  grids?: MasonryGridProps[];
  items?: MasonryItemProps[];
  container?: MasonryContainerProps;
};