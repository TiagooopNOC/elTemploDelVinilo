import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses =
    "relative block overflow-hidden px-3 py-3 tracking-[0.14em] transition-colors duration-300 hover:text-[#f2ca50] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:scale-x-0 after:origin-center after:bg-[#f2ca50] after:transition-transform after:duration-300 hover:after:scale-x-100 md:py-2";

  const dropdownLinkClasses =
    "block whitespace-nowrap px-5 py-3 text-sm tracking-[0.12em] text-[#d0c5af] transition-colors duration-300 hover:bg-[#1f1b16] hover:text-[#f2ca50]";

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between border-b border-[#26211b] bg-[#131313] px-4 md:flex-nowrap md:justify-center md:px-0">
      <NavLink to="/" onClick={closeMenu}>
        <img
          className="h-20 cursor-pointer transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:drop-shadow-[0_0_18px_rgba(242,202,80,0.18)] md:h-25"
          src="/logo.png"
          alt="El Templo del Vinilo"
        />
      </NavLink>

      <div className="flex items-center gap-6 md:contents">
        <div className="md:order-3">
          <CartWidget />
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-[#3a3125] text-xl text-[#d0c5af] transition-colors hover:border-[#f2ca50] hover:text-[#f2ca50] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </div>

      <ul
        className={`order-3 w-full cursor-pointer border-t border-[#26211b] pb-3 font-[Inter] text-sm text-[#d0c5af] md:order-none md:flex md:w-full md:items-center md:justify-center md:gap-5 md:border-0 md:pb-0 md:text-base ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <NavLink to="/" className={linkClasses} onClick={closeMenu}>
          INICIO
        </NavLink>

        <NavLink to="/catalogo" className={linkClasses} onClick={closeMenu}>
          CATALOGO
        </NavLink>

        <li className="group relative list-none">
          <button
            type="button"
            className={`${linkClasses} w-full text-left md:w-auto md:text-center`}
            onClick={() => setIsProductsOpen(!isProductsOpen)}
          >
            <span className="flex items-center justify-between gap-3 md:justify-center">
              PRODUCTOS
              <i
                className={`bi bi-chevron-down text-xs transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              ></i>
            </span>
          </button>

          <div
            className={`z-50 w-full border border-[#2f281f] bg-[#131313] py-2 shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300 md:absolute md:top-full md:left-1/2 md:min-w-[190px] md:-translate-x-1/2
              ${
                isProductsOpen
                  ? "block opacity-100"
                  : "hidden opacity-0 md:invisible md:block md:group-hover:visible md:group-hover:opacity-100"
              }`}
          >
            <NavLink
              to="/categoria/Nuevos"
              className={dropdownLinkClasses}
              onClick={closeMenu}
            >
              NUEVOS
            </NavLink>
            <NavLink
              to="/categoria/Ofertas"
              className={dropdownLinkClasses}
              onClick={closeMenu}
            >
              OFERTAS
            </NavLink>
            <NavLink
              to="/categoria/Mas vendidos"
              className={dropdownLinkClasses}
              onClick={closeMenu}
            >
              MAS VENDIDOS
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
