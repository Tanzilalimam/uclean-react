import Nav from "./components/layouts/nav/Nav"
import Banner from "./components/layouts/banner/Banner"
import About from "./pages/About"
import Services from "./pages/Service"
import Survey from "./components/layouts/survey/Survey"
import Reason from "./components/layouts/reason/Reason"
import Pricing from "./components/layouts/pricing/Pricing"
import Customer from "./components/layouts/customers/Customers"
import VideoTour from "./components/layouts/video/Video"
import Join from "./components/layouts/join/Join"
import Footer from "./components/layouts/footer/Footer"
import CopyRight from "./components/layouts/copyright/Copyright"

function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Survey></Survey>
      <Reason></Reason>
      <Pricing></Pricing>
      <Customer></Customer>
      <VideoTour></VideoTour>
      <Join></Join>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </>
  )
}

export default App
