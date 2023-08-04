/* eslint-disable react/no-children-prop */
"use client";

import Container from "@components/Masonry/Container";
import Grid from "@components/Masonry/Grid";
import { Templates } from "@components/Masonry/Templates";
import Reanimator from "@components/Reanimator";
import type {
  MasonryGridProps,
  MasonryItemProps,
  MasonryProps,
  Weak,
} from "@typings/index";
import { arrayExists, tuid } from "@utils/index";


export default function Masonry(props: MasonryProps) {

  const { grids, items, container } = props as MasonryProps;

  function renderItems(items: Weak<MasonryItemProps[]>) {
    if (!arrayExists(items)) {
      return null;
    } else {
      return (
        <>
          {items?.map((item) => {
            return Templates[item.type](item)
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
    <Reanimator>
      <Container {...container}>
        {renderItems(items)}
        {renderGrids(grids)}
      </Container>
    </Reanimator>
  );
}
