
const testIMG = "https://images.unsplash.com/photo-1691142750550-6990f5b00bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
import Container from './Container'

export default function Banner( ) {
    return (
       <Container>
        <img
              className="absolute top-0 left-0 object-cover w-full h-full"
              src={testIMG}
              alt=""
            />
            <div className="relative max-w-sm mx-auto mb-16 lg:mx-0 lg:mb-0">
              <h3 className="mb-3 text-3xl font-bold text-white">
                Ideal banner asset for your dashboard project
              </h3>
              <p className="mb-6 font-medium text-blue-200">
                Go global with our UI Resources and solutions
              </p>
              <a
                className="inline-block w-full px-6 py-3 font-semibold leading-6 text-center transition duration-200 bg-gray-500 rounded-lg sm:w-auto md:px-18 text-blue-50 hover:bg-gray-600"
                href="#"
              >
                Get Started
              </a>
            </div>
       </Container>

    )
}