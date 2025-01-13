import { Heart } from "lucide-react";
import formatCurrency from "../../../utils/formatCurrency";
import Button from "../../ui/Button";
import Img from "../../ui/Img";
import { useState } from "react";
import { textSlicer } from "../../../utils/textSlicer";

interface IProductCard {
  title: string,
  price: number,
  instock: boolean,
  description: string,
  imageUrl: string
}


const ProductCard = ({
  title,
  price,
  instock,
  description,
  imageUrl,
}: IProductCard) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <div className="flex flex-col max-w-[402px]  gap-3 justify-center items-start p-4 border-color-border border rounded-md shadow">
      {/* Image Section */}
      <div className="relative image w-full h-52 rounded-md border-color-border border overflow-hidden">
        <Img
          className="rounded-md cursor-pointer w-full h-full object-cover hover:scale-110 transition-all"
          src={imageUrl}
          alt={title}
        />
        <Heart
          onClick={toggleHeart}
          className={`cursor-pointer bg-section-color absolute hover:text-red-500 top-3 left-3 rounded-full p-1.5 w-9 h-9 border-2 border-color-border transition-all ${
            isHeartFilled ? "text-red-500" : "text-gray-400"
          }`}
          fill={isHeartFilled ? "red" : "none"}
        />
      </div>

      {/* Body Section */}
      <div className="body space-y-3">
        <div className="space-y-1.5">
        <p className="title text-color-text-1 text-base capitalize font-medium">{title}</p>
        <p className="description text-color-text-2 text-xs font-semibold w-max">{ textSlicer(description) }</p>
        </div>

      
      </div>

      {/* Footer Section */}
      <div className="footer flex w-full justify-between items-end">
        <div className="price">
          <p className="text-color-text-2">Price</p>
          <span className="text-color-text-1 text-xl font-medium">{formatCurrency(price)}</span>
        </div>
        <Button
          className="border-button-color border-2 text-xs text-color-text-1 hover:bg-button-hover-color hover:text-main-color-background"
          disabled={!instock}
        >
          {instock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
      <ul className="flex justify-start items-start flex-wrap gap-2">
          <li className="rounded-full py-1 px-2 border-2 text-color-text-2 border-color-border bg-section-color text-xs cursor-pointer">
          Electrical
          </li>
          <li className="rounded-full py-1 px-2 border-2 text-color-text-2 border-color-border bg-section-color text-xs">
          {instock ? "In Stock" : "Out of Stock"}
          </li>
        </ul>
    </div>
  );
};

export default ProductCard;
