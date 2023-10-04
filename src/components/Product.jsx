import { useSnackbar } from "notistack";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    dispatch(add(product));
    enqueueSnackbar("Item Added to Cart", { variant: "success" });
  };

  const removeFromCart = () => {
    dispatch(remove(product));
    enqueueSnackbar("Item Removed from Cart", { variant: "error" });
  };

  return (
    <div
      style={{ border: "2px solid #c084fc" }}
      className="text-center rounded pt-3 pb-3 px-3"
    >
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid"
        style={{ height: "180px" }}
      />
      <div>
        <h6 className="mt-3 font-weight-600">
          {" "}
          {product.title.length >
          20 /* Change 20 to your desired character limit */
            ? `${product.title.substring(0, 25)}...`
            : product.title}
        </h6>
        {/*<p>{product.description}</p>*/}
        <div className="d-md-flex justify-content-md-between mt-3 align-items-center">
          <div>
            {cart.find((item) => item.id == product.id) ? (
              <Button
                variant="outline-success"
                className="mr-2 btnborder1"
                onClick={removeFromCart}
              >
                Remove Item
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                className="mr-2 btnborder1"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            )}
          </div>
          <div>Rs {product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
