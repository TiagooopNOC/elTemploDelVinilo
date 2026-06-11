import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkClasses =
    "w-fit text-sm text-[#a99f8d] transition-colors duration-300 hover:text-[#f2ca50] focus-visible:text-[#f2ca50] focus-visible:outline-none";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <footer className="border-t border-[#2f281f] bg-[#131313] font-[Inter] text-[#d0c5af]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10 lg:py-16">
        <div className="max-w-md">
          <Link
            to="/"
            onClick={scrollToTop}
            className="inline-flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2ca50]"
          >
            <img
              src="/logo.png"
              alt="El Templo del Vinilo"
              className="h-20 w-auto"
            />
          </Link>

          <div className="mt-5 h-[2px] w-14 bg-[#f2ca50]" />
          <p className="mt-5 text-sm leading-7 text-[#a99f8d]">
            Vinilos icónicos, ediciones únicas y música que merece seguir
            girando. Una colección elegida para quienes todavía disfrutan el
            ritual de escuchar un disco.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2 className="mb-6 font-[Playfair_Display] text-xl font-semibold text-white">
            Explorar
          </h2>
          <div className="flex flex-col gap-4">
            <Link to="/" className={linkClasses} onClick={scrollToTop}>
              Inicio
            </Link>
            <Link
              to="/catalogo"
              className={linkClasses}
              onClick={scrollToTop}
            >
              Catálogo completo
            </Link>
            <Link to="/cart" className={linkClasses} onClick={scrollToTop}>
              Mi carrito
            </Link>
            <Link
              to="/checkout"
              className={linkClasses}
              onClick={scrollToTop}
            >
              Finalizar compra
            </Link>
          </div>
        </nav>

        <nav aria-label="Colecciones">
          <h2 className="mb-6 font-[Playfair_Display] text-xl font-semibold text-white">
            Colecciones
          </h2>
          <div className="flex flex-col gap-4">
            <Link
              to="/categoria/Nuevos"
              className={linkClasses}
              onClick={scrollToTop}
            >
              Nuevos ingresos
            </Link>
            <Link
              to="/categoria/Ofertas"
              className={linkClasses}
              onClick={scrollToTop}
            >
              Ofertas
            </Link>
            <Link
              to="/categoria/Mas vendidos"
              className={linkClasses}
              onClick={scrollToTop}
            >
              Más vendidos
            </Link>
          </div>
        </nav>
      </div>

      <div className="border-t border-[#2f281f]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-xs tracking-wide text-[#786f61] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {currentYear} El Templo del Vinilo.</p>
          <p className="text-[#918777]">La música vive en cada surco.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
