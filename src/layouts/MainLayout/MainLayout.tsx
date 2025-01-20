import { Outlet } from "react-router-dom"
import Footer from "../../components/common/Footer/Footer"
import Header from "../../components/common/Header/Header"

const MainLayout = () => {
  return (
    <>
    <Header />
    {/* <div className="relative w-screen overflow-hidden bg-blue-600 z-30"> */}
        <Outlet />
        
    {/* </div> */}
    <Footer />
    </>
  )
}

export default MainLayout