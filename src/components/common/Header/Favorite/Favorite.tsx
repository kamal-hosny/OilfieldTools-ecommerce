import { Heart } from "lucide-react"
import Button from "../../../ui/Button"
import { NavLink } from "react-router-dom"

const Favorite = () => {
    const count = 6
  return (
    <NavLink to={"./wishlist"} className="relative">
    <Button className="bg-transparent !text-color-text-1 hover:bg-section-color !p-2"><Heart size={20} /></Button>
    <span className="absolute cursor-pointer bg-red-600 hover:bg-red-700 text-white p-2 rounded-full text-xs w-3 h-3 flex justify-center items-center top-0 end-0">{count}</span>
    </NavLink>
  )
}

export default Favorite