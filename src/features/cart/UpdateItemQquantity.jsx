import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { decreaseItem, increseItem } from "./cartSlice";
/* eslint-disable */
function UpdateItemQquantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <span className=" text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={() => dispatch(increseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQquantity;
