import { formatCurrency } from "../utils/helpers";

/* eslint-disable */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice, ingrediens } = item;
  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;