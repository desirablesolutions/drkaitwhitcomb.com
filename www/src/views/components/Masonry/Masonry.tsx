"use client";

import Grid from "@components/Masonry/Grid";
import Container from "@components/Masonry/Container";
import Item from "@components/Masonry/Item";
import Image from "@components/Image";
import Reanimator from "@components/Reanimator";
import type {
  Weak,
  MasonryProps,
  MasonryItemProps,
  MasonryGridProps,
} from "@typings/index";
import { arrayExists, tuid } from "@utils/index";

export default function Masonry(props: MasonryProps) {
  let { grids, items, container } = props as MasonryProps;

  const Templates = {
    image: (item: any) => (
      <Item>
        <Image {...item} />
      </Item>
    ),
    text: (item: any) => <Item><p className="w-full">{item.content}</p>{item.content}</Item>,
  };
  function renderItems(items: Weak<MasonryItemProps[]>) {
    if (!arrayExists(items)) {
      return null;
    } else {
      return (
        <>
          {items?.map((item) => {
            switch (item.type) {
              case "image": {
                return Templates.image(item);
              }

              case "text": {
                return Templates.text(item);
              }
            }
          })}
        </>
      );
    }
  }

  function renderGrids(grids: Weak<MasonryGridProps[]>) {
    if (!arrayExists(grids)) {
      return <>No Grids</>;
    } else {
      return (
        <>
          {grids?.map((grid: MasonryGridProps) => {
            return (
              <Grid key={tuid()}>
                {arrayExists(grid?.grids)
                  ? renderGrids(grid?.grids)
                  : renderItems(grid?.items)}
              </Grid>
            );
          })}
        </>
      );
    }
  }

  return (
    <Container {...container}>
      {renderItems(items)}
      {renderGrids(grids)}
    </Container>
  );
}
