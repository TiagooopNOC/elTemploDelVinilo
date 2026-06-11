import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#0e0e0e] px-4 py-14 sm:px-6 sm:py-20">
      <section className="max-w-2xl text-center">
        <div className="mx-auto mb-7 h-[2px] w-20 bg-[#f2ca50]"></div>

        <p className="mb-3 font-[Inter] text-sm tracking-[0.18em] text-[#f2ca50] uppercase">
          Error 404
        </p>

        <h1 className="font-[Playfair_Display] text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
          Esta pagina no existe
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-[Inter] text-base leading-7 text-[#d0c5af]">
          Parece que el vinilo que estabas buscando se salio de la bandeja.
          Volve al catalogo para seguir explorando la coleccion.
        </p>

        <Link
          to="/"
          className="mt-10 inline-block bg-[#f2ca50] px-6 py-3 font-[Inter] text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#ffd65d] hover:shadow-[0_14px_30px_rgba(242,202,80,0.2)]"
        >
          VOLVER AL INICIO
        </Link>
      </section>
    </main>
  );
};

export default Error;
