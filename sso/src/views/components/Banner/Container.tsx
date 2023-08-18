export default function BannerContainer({ children }: any) {
    return (
        <section className="col-span-3 py-3">
        <div className="container px-4 mx-auto">
          <div className="relative px-8 pt-12 overflow-hidden lg:py-18 md:px-18 rounded-2xl">
        { children}
          </div>
        </div>
      </section>
    )
}