export default function Cover({ image }: { image: any}) {
    return (
        <img
        className="absolute top-0 left-0 object-cover w-full h-full"
        src={image.src}
        alt=""
      />
    )
}