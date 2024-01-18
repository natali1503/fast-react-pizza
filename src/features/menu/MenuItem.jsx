import { formatCurrency } from "../utils/helpers";
import Button from "../ui/Button";
import { addItem, getCurrentQuantityByID } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQquantity from "../cart/UpdateItemQquantity";

/* eslint-disable */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityByID(id));
  const isInCart = currentQuantity > 0;
  const dispatch = useDispatch();
  function handleAddToCard() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "opacity-70 grayscale" : ""} h-24`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium ">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm ">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCard}>
              Add to cart
            </Button>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQquantity pizzaId={id} quantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
