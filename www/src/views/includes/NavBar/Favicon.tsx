export default function Favicon() {
    return (
        <main className="flex justify-center w-full border-b border-black">
        <div>
          <a href="/">
            <img
              className="object-contain h-36 mt-2 pb-2"
              src={!favicon?.image?.src ? defaultProps().favicon.image.src : favicon.image.src}
              alt="logo"
            />
          </a>
        </div>
      </main>
    )
}