import { Heart } from "lucide-react";
import { formatCurrency } from "../../../utils";
import Button from "../../ui/Button";
import Img from "../../ui/Img";
import { useState } from "react";
import { textSlicer } from "../../../utils";

interface IProductCard {
  title: string,
  price: number,
  instock: boolean,
  description: string,
  imageUrl: string,
  grid?: boolean,
}


const ProductCard = ({
  title,
  price,
  instock,
  description,
  imageUrl,
  grid = true,
}: IProductCard) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <>
      {grid ? (
        <div className="flex flex-col max-w-[402px] max-sm:w-full gap-3 justify-center items-start p-4 border-color-border border rounded-md shadow">
          {/* Image Section */}
          <div className="relative image w-full h-56 rounded-md border-color-border border overflow-hidden">
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
              <p className="description text-color-text-2 text-xs font-semibold w-max whitespace-normal break-words">
                {textSlicer(description)}
              </p>
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
  
          {/* Tags Section */}
          <ul className="flex justify-start items-start flex-wrap gap-2">
            <li className="rounded-full py-1 px-2 border-2 text-color-text-2 border-color-border bg-section-color text-xs cursor-pointer">
              Electrical
            </li>
            <li className="rounded-full py-1 px-2 border-2 text-color-text-2 border-color-border bg-section-color text-xs">
              {instock ? "In Stock" : "Out of Stock"}
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex w-full gap-3 h-full items-start p-4 border-color-border border rounded-md shadow">
          {/* Image Section */}
          <div className="relative image h-52 w-52 rounded-md border-color-border border overflow-hidden">
            <Img
              className="rounded-md cursor-pointer h-full w-full object-cover hover:scale-110 transition-all"
              src={imageUrl}
              alt={title}
            />
            <Heart
              onClick={toggleHeart}
              className={`cursor-pointer bg-section-color absolute hover:text-red-500 top-2 left-2 rounded-full p-1.5 w-9 h-9 border-2 border-color-border transition-all ${
                isHeartFilled ? "text-red-500" : "text-gray-400"
              }`}
              fill={isHeartFilled ? "red" : "none"}
            />
          </div>
          
          {/* Body Section */}
          <div className="body space-y-3 flex-1">
            <div className="space-y-1.5">
              <p className="title text-color-text-1 text-base capitalize font-medium">{title}</p>
              <p className="description text-color-text-2 text-xs font-semibold w-full break-words whitespace-normal">
  {textSlicer(description)}
</p>

            </div>
          </div>

        {/* Footer Section */}
        <div className="footer flex border-s-2 px-4  border-color-border h-full w-60 flex-col justify-start gap-4">
            <div className="price">
              <p className="text-color-text-2 font-medium">Price</p>
              <span className="text-color-text-1 text-xl font-medium">{formatCurrency(price)}</span>
            </div>
            <div className="btn space-y-2">
            <Button
              className="bg-button-color text-xs text-main-color-background hover:bg-button-hover-color hover:text-main-color-background w-full"
              
            >
              DETAILS
            </Button>
            <Button
              className="border-button-color border-2 text-xs text-color-text-1 hover:bg-button-hover-color hover:text-main-color-background w-full"
              disabled={!instock}
            >
              {instock ? "Add to Cart" : "Out of Stock"}
            </Button>
            </div>
          </div>


        </div>
      )}
    </>
  )};
  

export default ProductCard;
