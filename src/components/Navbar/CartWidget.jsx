import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQty } = useContext(CartContext);
  const quantity = totalQty();

  return (
    <Link
      to="/cart"
      className="relative mr-15 cursor-pointer text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-[#f2ca50] hover:drop-shadow-[0_0_12px_rgba(242,202,80,0.28)]"
      aria-label="Ver carrito"
    >
      <i className="bi bi-cart"></i>
      {quantity > 0 && (
        <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f2ca50] px-1 font-[Inter] text-[10px] font-bold text-black">
          {quantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
