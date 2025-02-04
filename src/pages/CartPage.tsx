import { useCallback } from "react";
import LottieHandler from "../components/common/feedback/LottieHandler/LottieHandler";
import MainTitle from "../components/common/main/MainTitle";
import Breadcrumb from "../components/Products/Breadcrumb";
import Button from "../components/ui/Button";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { formatCurrency } from "../utils";
import { useNavigate } from "react-router-dom";
import Img from "../components/ui/Img";
import { Minus, Plus, X } from "lucide-react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cart/cartActions";
import { TProduct } from "../types";
import { createOrder } from "../store/orderCart/act/actCreateOrder";
import { addToast } from "../store/toasts/toastsSlice";

const breadcrumbItems = [{ label: "Home", link: "/" }];
const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart?.items as TProduct[]);

  const { _id } = useAppSelector((state) => state.auth?.test || { _id: '' });

  const defaultImg = "https://dummyimage.com/200x200";

  const handleGotoProducts = useCallback(
    () => navigate("/products"),
    [navigate]
  );

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id, 1));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleInputChange = (id: string, value: number) => {
    if (value >= 0) {
      dispatch(increaseQuantity(id, value));
    }
  };

  const navigateToSingle = (id: string) => navigate(`/singleProduct/${id}`);

  const totalItems =
    cart?.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0) || 0;
  const subtotal =
    cart?.reduce(
      (acc, item) =>
        acc + (item.data?.price || 0) * (Number(item.quantity) || 0),
      0
    ) || 0;

// transformedCart
const transformCartData = (cart: any) => {
  return cart.map((item: any) => ({
      _id: item._id,
      image: item.mainImg?.url || defaultImg,
      product_name: item.data?.product_name || "Unknown Product",
      price: item.data?.price || 0,
      model_number: item.data?.model_number || "",
      Dimension: item.data?.Dimension || "",
      Unit_of_Measurement: item.data?.Unit_of_Measurement || "",
      condition: item.data?.condition || "",
      brand: item.data?.brand || "",
      weight: item.data?.weight || "",
      size: item.data?.size || "",
      HNS_code: item.data?.HNS_code || "",
      material_Category: item.data?.material_Category || "",
      instock: item.data?.instock || 0,
      Description: item.data?.Description || "",
      Currency: item.data?.Currency || "AED",
      Quantity: item.quantity || 0
    }));
}



  const sentOrder = () => {
    if (!_id || _id == "") {
      console.error("User ID is missing.");
      return;
    }
    const transformedCart = transformCartData(cart)

    dispatch(
      createOrder({
        "RFQ Date": new Date().toISOString(),
        Customer: _id,
        status: "pending",
        OG_Invoice: "N/A",
        Customer_PO: "N/A",
        Payment_Date: "",
        Payment_AED: 0,
        Payment_Reference: "",
        Shipping_status: "",
        DN: "N/A",
        Comments: "No comments",
        cart: transformedCart,
      })
    )
    .then(() => {
      console.log("success");
      dispatch(addToast({
        message: `The order for purchasing the products has been sent.`,
        type: "success"
      }));
      dispatch(clearCart());
  })
  .catch((error) => {
      console.error("Error updating:", error);
      dispatch(addToast({
        message:  error?.message || "An unexpected error occurred. Please try again.",
        type: "error"
      }));
  });
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="bg-section-color">
        <div className="container mx-auto px-2 py-6 space-y-5 ">
          <Breadcrumb items={breadcrumbItems} itemNow={"Cart"} />
          <MainTitle title="Shopping Cart" />
          <LottieHandler type="empty" message="Your cart is empty" />
          <div className="flex flex-col justify-center items-center">
            <Button
              onClick={handleGotoProducts}
              className="w-fit  border-button-color border text-color-text-1 !p-3 hover:bg-button-hover-color hover:text-main-color-background"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-section-color">
      <div className="container mx-auto px-2 py-6 space-y-5">
        <Breadcrumb items={breadcrumbItems} itemNow={"Cart"} />
        <MainTitle title="Shopping Cart" />
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-md:p-0 max-md:mt-4 ">
          <div className="md:col-span-2 space-y-4 overflow-x-auto">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left bg-main-color-background border-color-border border-2">
                <thead className="text-xs text-color-text-2 uppercase border-color-border border-b-2">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Item
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="text-color-text-1">
                  {cart.map((item) => (
                    <tr
                      key={item._id}
                      className="border-color-border border-b-2"
                    >
                      <th
                        scope="row"
                        className="p-4 font-medium whitespace-nowrap"
                      >
                        <div className="relative image w-24 h-24 border-color-border border-2 rounded">
                          <Img
                            onClick={() => {
                              navigateToSingle(item._id);
                            }}
                            className="w-full h-full object-cover cursor-pointer"
                            src={item.mainImg?.url ?? defaultImg}
                            alt={item.data?.product_name ?? "Unknown Product"}
                          />
                          <X
                            onClick={() => {
                              handleRemove(item._id);
                            }}
                            className="cursor-pointer opacity-70 hover:opacity-100 absolute h-7 w-7 p-1 rounded-full bg-section-color border-color-border border-2 -top-2 -start-4 "
                          />
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        <div>
                          <p>{item.data?.product_name}</p>
                          <p>{item.data?.material_Category}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {formatCurrency(item.data?.price || 0)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 items-center">
                          <Minus
                            className="cursor-pointer text-color-text-2 hover:text-color-text-1"
                            onClick={() => handleDecreaseQuantity(item._id)}
                          />
                          <input
                            type="number"
                            value={item?.quantity ?? ""}
                            min={0}
                            max={item?.data?.instock ?? undefined}
                            className="bg-section-color border-color-border border-2 w-14 h-10 focus:ring-2 focus:ring-cyan-500 focus:outline-none p-1 text-center"
                            onChange={(e) =>
                              handleInputChange(
                                item._id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <Plus
                            className="cursor-pointer text-color-text-2 hover:text-color-text-1"
                            onClick={() => handleIncreaseQuantity(item._id)}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {formatCurrency(
                          (item.data?.price || 0) * (Number(item.quantity) || 0)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-color-border border bg-main-color-background p-4 rounded h-max">
            <p className="head text-color-text-1 font-semibold text-lg">
              Order Summary
            </p>
            <span className="block bg-color-border h-[2px] w-full my-2"></span>
            <ul className="space-y-2 text-color-text-1">
              <li className="flex justify-between">
                <span>Total Items</span>
                <span className="font-semibold text-color-text-2">
                  {totalItems}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-color-text-2">
                  {formatCurrency(subtotal)}
                </span>
              </li>
            </ul>
            <span className="block bg-color-border h-[2px] w-full my-2"></span>
            <div className="flex justify-between text-lg font-semibold text-color-text-1">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="btn flex flex-col gap-3 mt-3">
              <Button onClick={sentOrder} className="w-full bg-button-color !p-3 hover:bg-button-hover-color text-main-color-background">
                Request For Quotation
              </Button>
              <Button
                onClick={handleGotoProducts}
                className="w-full border-button-color border text-color-text-1 !p-3 hover:bg-button-hover-color hover:text-main-color-background"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;