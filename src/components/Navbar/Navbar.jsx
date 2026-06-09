import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const linkClasses =
    "relative overflow-hidden px-3 py-2 tracking-[0.14em] transition-colors duration-300 hover:text-[#f2ca50] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:scale-x-0 after:origin-center after:bg-[#f2ca50] after:transition-transform after:duration-300 hover:after:scale-x-100";

  const dropdownLinkClasses =
    "block whitespace-nowrap px-5 py-3 text-sm tracking-[0.12em] text-[#d0c5af] transition-colors duration-300 hover:bg-[#1f1b16] hover:text-[#f2ca50]";

  return (
    <nav className="flex w-[100%] items-center justify-center border-b border-[#26211b] bg-[#131313]">
      <NavLink to="/">
        <img
          className="h-25 cursor-pointer transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:drop-shadow-[0_0_18px_rgba(242,202,80,0.18)]"
          src="/logo.png"
          alt="El Templo del Vinilo"
        />
      </NavLink>

      <ul className="flex w-full cursor-pointer items-center justify-center gap-5 font-[Inter] text-[#d0c5af]">
        <NavLink to="/" className={linkClasses}>
          INICIO
        </NavLink>

        <NavLink to="/catalogo" className={linkClasses}>
          CATALOGO
        </NavLink>

        <li className="group relative list-none">
          <button
            type="button"
            className={linkClasses}
            onClick={() => setIsProductsOpen(!isProductsOpen)}
          >
            PRODUCTOS
          </button>

          <div
            className={`absolute left-1/2 top-full z-50 min-w-[190px] -translate-x-1/2 border border-[#2f281f] bg-[#131313] py-2 shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300 
              ${
                isProductsOpen
                  ? "visible opacity-100"
                  : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
              }`}
          >
            <NavLink
              to="/categoria/Nuevos"
              className={dropdownLinkClasses}
              onClick={() => setIsProductsOpen(false)}
            >
              NUEVOS
            </NavLink>
            <NavLink
              to="/categoria/Ofertas"
              className={dropdownLinkClasses}
              onClick={() => setIsProductsOpen(false)}
            >
              OFERTAS
            </NavLink>
            <NavLink
              to="/categoria/Mas vendidos"
              className={dropdownLinkClasses}
              onClick={() => setIsProductsOpen(false)}
            >
              MAS VENDIDOS
            </NavLink>
          </div>
        </li>
      </ul>

      <CartWidget></CartWidget>
    </nav>
  );
};

export default Navbar;
