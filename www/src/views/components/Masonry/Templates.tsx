import Image from "@components/Image";
import Item from "@components/Masonry/Item";
import Markdown from "@components/Markdown";
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
    <Item>
      <Image className="object-cover w-full h-full" {...item} />
    </Item>
  ),
  text: (item: any) => (
    <Item sx="hover:bg-opacity-40  duration-500 ease-in-out p-8 bg-black bg-opacity-20">
      <Markdown>{item.content}</Markdown>
    </Item>
  ),
  callout: (item: any) => (
    <Item sx="hover:bg-opacity-40 flex flex-col justify-start duration-500 ease-in-out p-8 bg-black bg-opacity-20">
      <h1 className="text-4xl text-left">{item.title}</h1>
      <blockquote className="text-left text-2xl text-black">{item.content}</blockquote>
      <a className="text-left border-1 p-4" href={item.link.url}>{item.link.label}</a>
    </Item>
  ),
  data: (item: any) => (
    <Item sx="hover:bg-opacity-40 flex flex-col  duration-500 ease-in-out p-8 bg-black bg-opacity-20">
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
