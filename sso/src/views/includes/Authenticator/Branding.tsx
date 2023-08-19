import type { AuthenticatorProps } from "@/models/typings"

export default function Branding({ branding }: { branding: AuthenticatorProps["branding"]}) {

  const { url, image } = branding
  
    return (
        <a
        className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
        href={url}
      >
        <img
          className="block"
          src={image.src}
          alt=""
        />
      </a>
    )
}