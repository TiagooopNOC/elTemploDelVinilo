import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="group w-full max-w-[260px] cursor-pointer">
      <div className="relative mb-5 flex h-[255px] items-center justify-center overflow-hidden bg-[#120f0d] px-6 pt-8 pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(198,138,90,0.28),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.48)_100%)]"></div>
        <div className="absolute bottom-0 left-0 h-[56px] w-full bg-[repeating-linear-gradient(180deg,rgba(134,88,59,0.22)_0px,rgba(134,88,59,0.22)_2px,rgba(55,35,24,0.18)_2px,rgba(55,35,24,0.18)_6px)]"></div>
        <div className="absolute bottom-[38px] left-1/2 h-5 w-[74%] -translate-x-1/2 rounded-full bg-black/35 blur-md"></div>
        <img
          className="relative z-10 h-[150px] w-[150px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.2),0_14px_22px_rgba(0,0,0,0.34)] transition-transform duration-700 group-hover:scale-[1.04] group-hover:brightness-105"
          src={product.img}
          alt={product.nombre}
        />
      </div>
      <div className="min-w-0">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="inline-block border border-[#3c3528] px-2 py-[2px] font-[Inter] text-[10px] italic tracking-[0.12em] text-[#d4af37]">
            {product.categoria}
          </span>
          <span className="font-[Inter] text-sm font-semibold text-[#d8d2c8]">
            U$D {product.precio}
          </span>
        </div>
        <h3 className="font-[Playfair_Display] text-[22px] leading-[1.05] font-bold text-white transition-colors group-hover:text-[#d4af37]">
          {product.nombre}
        </h3>
        <p className="mt-1 font-[Inter] pt-1 text-sm text-[#aca18c]">
          {product.artista}
        </p>
        <p className="group/vermas relative max-w-fit pt-1 cursor-pointer items-center gap-2 overflow-hidden pr-1 font-[Inter] text-xs italic tracking-[0.12em] text-[#d4af37]">
          <Link
            to={`/item/${product.id}`}
            className="relative transition-transform duration-300 group-hover/vermas:translate-x-[3px]"
          >
            Ver mas
          </Link>
          <i className="bi bi-arrow-right text-sm transition-all duration-300 group-hover/vermas:translate-x-1 group-hover/vermas:scale-110 pl-1.5"></i>
          <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover/vermas:scale-x-100"></span>
        </p>
      </div>
    </div>
  );
};

export default Item;
