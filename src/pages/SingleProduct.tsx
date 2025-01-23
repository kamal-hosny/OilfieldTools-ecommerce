import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { actGetOneProduct } from "../store/products/act/actGetOneProduct";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const SingleProduct = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  const {record, loading, error} = useAppSelector((state) => state.products)

  console.log(record);
  

  const fetchProduct = useCallback(() => {
    if(id) {
      dispatch(actGetOneProduct(id));
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if(loading === "pending"){
    return(
      <div>
        loading.....
      </div>
    )
  }
  if(error){
    return(
      <div>
        {error}
      </div>
    )
  }

  return (
    <div>
      <div className="container mx-auto px-2 py-6 space-y-5">
        <div>
        title
        </div>
        <div className="productPage flex justify-between">
        <div className="imageSection">

        </div>
        <div className="detailsSection">
          <div className="head">
          <p className="title">title</p>
          </div>

          
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
