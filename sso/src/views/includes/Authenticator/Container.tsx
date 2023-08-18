export default function Container({ children }: any){
    return (
        <section className=" py-36">
        <div className="container px-4 mx-auto">
          <div className="relative max-w-lg px-6 pt-16 pb-16 mx-auto text-black bg-white rounded-lg shadow-sm cursor-pointer shadow-black md:px-10 lg:px-16 bg-opacity-70 backdrop-blur-sm">
       {children}
          </div>
        </div>
      </section>
    )
}