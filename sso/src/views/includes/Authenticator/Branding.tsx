export default function Branding({ branding }: any) {

  const { url, image } = branding
  
    return (
        <a
        className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
        href={url}
      >
        <img
          className="block"
          src={image?.src}
          alt=""
        />
      </a>
    )
}