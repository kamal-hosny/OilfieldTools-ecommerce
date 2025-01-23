import { Heart } from "lucide-react";
import { formatCurrency } from "../../../utils";
import Button from "../../ui/Button";
import Img from "../../ui/Img";
import { useState } from "react";
import { textSlicer } from "../../../utils";
import { TProduct } from "../../../types";
import { useNavigate } from "react-router-dom";

interface IProductCard {
  productData: TProduct
  grid?: boolean,
}


const ProductCard = ({
  productData,
  grid = true,
}: IProductCard) => {
  const navigate = useNavigate();

  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  const { _id, mainImg, data } = productData ?? {} 
const { originalname, url } = mainImg ?? {}
  const { product_name, price, description, instock, material_Category } = data ?? {}

  const navigateToSingle = (id: string) => navigate(`/singleProduct/${id}`);

  const defaultImg = "https://dummyimage.com/200x200";
  
  return (
    <>
      {grid ? (
        <div id={_id} className="flex flex-col max-w-[402px] max-sm:w-full gap-3 justify-center items-start p-4 border-color-border border rounded-md shadow bg-main-color-background">
          {/* Image Section */}

          <div className="relative image w-full h-56 rounded-md border-color-border border overflow-hidden">
            <Img
            onClick={()=>{
              navigateToSingle(_id)
            }}
              className="rounded-md cursor-pointer w-full h-full object-cover hover:scale-110 transition-all"
              src={url || defaultImg}
              alt={originalname || "img"}
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
              <p className="title text-color-text-1 text-base capitalize font-medium">{product_name || ""}</p>
              <p className="description text-color-text-2 text-xs font-semibold w-max whitespace-normal break-words">
                {textSlicer(description || "")}
              </p>
            </div>
          </div>
  
          {/* Footer Section */}
          <div className="footer flex w-full justify-between items-end">
            <div className="price">
              <p className="text-color-text-2">Price</p>
              <span className="text-color-text-1 text-xl font-medium">{formatCurrency(price || 0)}</span>
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
            {material_Category && (
           <li className="rounded-full py-1 px-2 border-2 text-color-text-2 border-color-border bg-section-color text-xs cursor-pointer">
           {material_Category}
         </li>
            )}
 
            <li className="rounded-full py-1 px-2 border-2 text-color-text-2 border-color-border bg-section-color text-xs">
              {instock || 0 > 0 ? "In Stock" : "Out of Stock"}
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex w-full gap-3 h-full items-start p-4 border-color-border border rounded-md shadow">
          {/* Image Section */}
          <div className="relative image h-52 w-52 rounded-md border-color-border border overflow-hidden">
            <Img
              className="rounded-md cursor-pointer h-full w-full object-cover hover:scale-110 transition-all"
              src={url || defaultImg}
              alt={originalname || "img"}
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
              <p className="title text-color-text-1 text-base capitalize font-medium">{product_name || ""}</p>
              <p className="description text-color-text-2 text-xs font-semibold w-full break-words whitespace-normal">
  {textSlicer(description || "")}
</p>

            </div>
          </div>

        {/* Footer Section */}
        <div className="footer flex border-s-2 px-4  border-color-border h-full w-60 flex-col justify-start gap-4">
            <div className="price">
              <p className="text-color-text-2 font-medium">Price</p>
              <span className="text-color-text-1 text-xl font-medium">{formatCurrency(price || 0)}</span>
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
