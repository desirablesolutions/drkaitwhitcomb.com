import Image from "@components/Image";
import Item from "@components/Masonry/Item";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div className="z-50 text-4xl">{text}</div>;

const defaultProps = {
  center: {
    lat: 28.66579534317306,
    lng: -81.2229344228437,
  },

  zoom: 15,
};

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
      <h1 className="p-4 text-6xl text-left text-white">{item.content}</h1>
    </Item>
  ),
  callout: (item: any) => (
    <Item item={item}>
      <h1 className="px-6 py-2 text-4xl text-left text-white">{item.title}</h1>
      <h2 className="px-4 text-2xl text-left text-white opacity-90">{item.subTitle}</h2>
      <blockquote className="px-4 py-2 m-4 text-4xl text-left text-black">{item.content}</blockquote>
      <a className="p-4 text-2xl text-left text-gray-600 border-1" href={item?.link?.url ?? ""}>{item?.link?.label ?? ""}</a>
    </Item>
  ),
  data: (item: any) => (
    <Item  item={...item}>
      <h1 className="text-4xl">{item.title}</h1>
      <blockquote>{item.content}</blockquote>
    </Item>
  ),
  map: (item: any) => (
    <div style={{ height: "33vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={0}
          lng={0}
          text="My Office"
        />
      </GoogleMapReact>
    </div>
  ),
};
