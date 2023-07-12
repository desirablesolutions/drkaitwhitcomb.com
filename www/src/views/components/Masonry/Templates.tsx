import Image from "@components/Image";
import Item from "@components/Masonry/Item";
import Markdown from "@components/Markdown";

export const Templates = {
  image: (item: any) => (
    <Item>
      <Image {...item} />
    </Item>
  ),
  text: (item: any) => (
    <Item>
      <Markdown>{item.content}</Markdown>
    </Item>
  ),
};
