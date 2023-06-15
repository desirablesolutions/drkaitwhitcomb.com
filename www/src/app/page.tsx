import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
  <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
        alt=""
      />
    </div>
  </div>
</div>

    </main>
  )
}
