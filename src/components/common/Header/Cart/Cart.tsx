import { ShoppingCart } from "lucide-react"
import Button from "../../../ui/Button"

const Cart = () => {
  return (
    <Button className="bg-transparent !text-color-text-1 hover:bg-section-color !p-2"><ShoppingCart size={20} /></Button>
  )
}

export default Cart