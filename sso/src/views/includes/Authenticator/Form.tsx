export default function Form({ title, subTitle }: any) {

  function Header() {
    return (
      <div className="mb-10 text-center">
      <h2 className="mb-2 text-2xl font-semibold text-black">
        {title}
      </h2>
      <p className="font-medium text-black">
        {subTitle}
      </p>
    </div>
    )
  }
    return (
        <div className="relative max-w-md mx-auto">
         <Header/>
          <form action="">
          
            <div className="relative w-full px-3 py-4 mb-4 border border-gray-400 rounded-lg h-14 hover:border-white focus-within:border-green-500">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                Password*
              </span>
              <input
                className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none"
                id="signInInput5-3"
                type="password"
              />
            </div>
            <span className="block mb-6 text-xs font-semibold text-gray-300">
              Must be at least 12 characters.
            </span>
          
            <a
              className="flex items-center justify-center w-full py-4 mb-6 font-semibold leading-6 text-white transition duration-200 bg-gray-600 rounded-lg hover:bg-gray-700"
              href="/space"
            >
              <div className="w-4 bg-white rounded-sm">
             🔑
              </div>
              <span className="ml-3">Sign In</span>
            </a>
            <p className="font-medium text-center">
              <span className="text-gray-300">Having issues?</span>
              <a className="inline-block text-blue-500 hover:underline" href="#">
                Help
              </a>
            </p>
          </form>
        </div>
      );
}