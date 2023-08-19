
const testIMG = "https://static.wixstatic.com/media/148286_0e5e6307be454421b61d5d9c485ab0dd~mv2.jpg/v1/crop/x_437,y_0,w_4733,h_4000/fill/w_806,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/oc-gonzalez-UIAyfvo9Bbw-unsplash.jpg"
import Container from './Container'
import { default as Cover } from './Cover'

export default function Banner( ) {
    return (
       <Container>
       <Cover image={{src: testIMG }}/>
            <div className="relative max-w-sm mx-auto mb-16 lg:mx-0 lg:mb-0">
              <h3 className="mb-3 text-3xl font-bold text-black">
               Hi Kait! Welcome to your Decenralized Web Panel, this is the dashboard.
              </h3>
              <p className="mb-6 font-medium text-blue-200">
               Text me if you need any help.
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