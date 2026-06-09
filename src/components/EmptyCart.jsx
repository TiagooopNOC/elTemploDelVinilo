import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#101010] px-6 py-16 text-white">
      <section className="w-full max-w-2xl border border-[#2f281f] bg-[#151412] px-8 py-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:px-14 sm:py-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#4a382a] bg-[#11100f] text-2xl text-[#f2ca50]">
          <i className="bi bi-cart"></i>
        </div>

        <p className="mt-7 font-[Inter] text-[10px] font-bold tracking-[0.22em] text-[#f2ca50] uppercase">
          Carrito
        </p>

        <h1 className="mt-3 font-[Playfair_Display] text-4xl font-bold sm:text-5xl">
          Tu carrito esta vacio
        </h1>

        <p className="mx-auto mt-5 max-w-lg font-[Inter] text-sm leading-7 text-[#d0c5af]">
          Todavia no agregaste vinilos a tu seleccion. Volve al inicio para
          explorar el catalogo y encontrar tus proximos discos.
        </p>

        <Link
          to="/"
          className="mt-9 inline-block bg-[#f2ca50] px-8 py-4 font-[Inter] text-[11px] font-bold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d]"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
};

export default EmptyCart;
