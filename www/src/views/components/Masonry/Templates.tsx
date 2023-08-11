import Image from "@components/Image";
import Item from "@components/Masonry/Item";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div className="text-4xl z-50">{text}</div>;

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
      <Image className="object-cover bg-center w-full h-full" {...item} />
    </Item>
  ),
  text: (item: any) => (
    <Item item={item} >
      <h2>{item.content}</h2>
    </Item>
  ),
  header: (item: any) => (
    <Item sx="bg-black" item={item} >
      <h1 className="text-6xl text-left p-4">{item.content}</h1>
    </Item>
  ),
  callout: (item: any) => (
    <Item item={item}>
      <h1 className="text-6xl py-2 text-left px-6">{item.title}</h1>
      <h2 className="text-4xl opacity-90 text-left px-4">{item.subTitle}</h2>
      <blockquote className="text-left py-2 px-4 m-4 text-4xl text-black">{item.content}</blockquote>
      <a className="text-left text-gray-600 text-2xl border-1 p-4" href={item?.link?.url ?? ""}>{item?.link?.label ?? ""}</a>
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
