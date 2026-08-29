import Nav from "./components/layouts/nav/Nav"
import Banner from "./components/layouts/banner/Banner"
import About from "./pages/About"
import Services from "./pages/Service"
import Survey from "./components/layouts/survey/Survey"
import Reason from "./components/layouts/reason/Reason"
import Pricing from "./components/layouts/pricing/Pricing"

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
    </>
  )
}

export default App
