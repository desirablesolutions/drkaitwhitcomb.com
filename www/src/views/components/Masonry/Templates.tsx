import Image from "@components/Image";
import Item from "@components/Masonry/Item";
import Markdown from "@components/Markdown";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

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
    <Item>
      <Markdown>{item.content}</Markdown>
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
