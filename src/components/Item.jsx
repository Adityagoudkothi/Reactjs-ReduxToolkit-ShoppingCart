import React from "react";
import { Button } from "react-bootstrap";
import { remove } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { enqueueSnackbar, useSnackbar } from "notistack";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const removeFromCart = () => {
    dispatch(remove(item));
    enqueueSnackbar("Item Removed from Cart", { variant: "error" });
  };
  return (
    <div>
      <div className="d-md-flex align-items-center mt-4 mb-3">
        <div>
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid"
            style={{ height: "180px" }}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <div className="mb-2">{item.title}</div>
          <div className="mb-2">Rs {item.price}</div>
          <div className="mt-2">
            <Button variant="outline-danger" onClick={removeFromCart}>
              <i className="fal fa-trash"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
