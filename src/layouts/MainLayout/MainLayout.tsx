import { Outlet } from "react-router-dom"
import Footer from "../../components/common/Footer/Footer"
import Header from "../../components/common/Header/Header"

const MainLayout = () => {
  return (
    <>
    <Header />
    {/* <div className="container mx-auto px-4"> */}
        <Outlet />
        
    {/* </div> */}
    <Footer />
    </>
  )
}

export default MainLayout