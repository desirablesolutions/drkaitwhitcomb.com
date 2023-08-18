import Image from "@components/Image";
import Item from "@components/Masonry/Item";









export function ImageTemplate({ item }: any) {
  return (
        <Item item={item}>
      <Image className="object-cover w-full h-full bg-center" {...item} />
    </Item>
  )

}



export const Templates = {
  image: (item: any) => (
    <Item item={item}>
      <Image className="object-cover w-full h-full bg-center" {...item} />
    </Item>
  ),
  text: (item: any) => (
    <Item item={item} >
      <h2>{item.content}</h2>
    </Item>
  ),
  header: (item: any) => (
    <Item sx="" item={item} >
      <h1 className="pt-6 text-4xl text-left text-white">{item.content}</h1>
    </Item>
  ),
  callout: (item: any) => (
    <Item item={item}>
      <h1 className="px-6 py-2 text-2xl text-left text-white">{item.title}</h1>
      <h2 className="px-4 text-lg text-left text-white opacity-90">{item.subTitle}</h2>
      <blockquote className="px-4 py-2 m-4 text-xl text-left text-black">{item.content}</blockquote>
      <a className="p-4 text-2xl text-left text-gray-600 border-1" href={item?.link?.url ?? ""}>{item?.link?.label ?? ""}</a>
    </Item>
  ),
  data: (item: any) => (
    <Item  item={...item}>
      <h1 className="text-4xl">{item.title}</h1>
      <blockquote>{item.content}</blockquote>
    </Item>
  ),

};
