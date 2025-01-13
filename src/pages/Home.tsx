import Banner from "../components/Home/Banner/Banner"

import LandingPage from "../components/Home/LandingPage/LandingPage"
import OurClients from "../components/Home/OurClients/OurClients"
import OurProducts from "../components/Home/OurProducts/OurProducts"

const Home = () => {
  return (
    <>
      <LandingPage />
      <OurProducts />
      <Banner />
      <OurClients />
    </>
  )
}

export default Home