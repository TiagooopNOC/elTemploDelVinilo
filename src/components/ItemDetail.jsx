import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ItemDetail = ({ detail }) => {
  const [cont, setCont] = useState(1);
  const [purchase, setPurchase] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = () => {
    addItem(detail, cont);
    toast.success("Producto agregado al carrito");
    setPurchase(true);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#0e0e0e] px-6 py-14 text-white">
      <section className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#11100f] px-10 py-14 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(60,92,85,0.28),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.56)_100%)]"></div>
            <div className="absolute bottom-0 left-0 h-[96px] w-full bg-[repeating-linear-gradient(180deg,rgba(128,78,47,0.38)_0px,rgba(128,78,47,0.38)_3px,rgba(45,27,18,0.32)_3px,rgba(45,27,18,0.32)_9px)]"></div>
            <div className="absolute bottom-[74px] left-1/2 h-8 w-[68%] -translate-x-1/2 rounded-full bg-black/45 blur-lg"></div>

            <img
              className="relative z-10 h-[270px] w-[270px] object-cover shadow-[0_4px_10px_rgba(0,0,0,0.22),0_24px_40px_rgba(0,0,0,0.46)]"
              src={detail.img}
              alt={detail.nombre}
            />
          </div>

          <div className="mt-6 flex gap-4">
            <div className="flex h-20 w-20 items-center justify-center border border-[#2f281f] bg-[#141210] p-2">
              <img
                className="h-full w-full object-cover"
                src={detail.img}
                alt={detail.nombre}
              />
            </div>
          </div>
        </div>

        <article className="pt-1">
          <p className="mb-3 font-[Inter] text-[11px] font-bold tracking-[0.22em] text-[#f2ca50] uppercase">
            {detail.categoria}
          </p>

          <h1 className="font-[Playfair_Display] text-5xl leading-[0.95] font-bold text-white md:text-6xl">
            {detail.nombre}
          </h1>

          <h2 className="mt-3 font-[Playfair_Display] text-2xl text-[#ffd8bd]">
            {detail.artista}
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-b border-[#2b241d] pb-8">
            <p className="font-[Playfair_Display] text-4xl font-bold text-white">
              U$D {detail.precio}
            </p>
            <span className="border border-[#4a382a] px-3 py-1 font-[Inter] text-[10px] font-bold tracking-[0.18em] text-[#f2ca50] uppercase">
              Edicion limitada
            </span>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-10 gap-y-6 font-[Inter]">
            <div>
              <dt className="text-[10px] font-bold tracking-[0.2em] text-[#f2ca50] uppercase">
                Formato
              </dt>
              <dd className="mt-2 text-sm font-semibold text-white">
                Vinyl, 12"
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[0.2em] text-[#f2ca50] uppercase">
                Categoria
              </dt>
              <dd className="mt-2 text-sm font-semibold text-white">
                {detail.categoria}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[0.2em] text-[#f2ca50] uppercase">
                Stock
              </dt>
              <dd className="mt-2 text-sm font-semibold text-[#f2ca50]">
                {detail.stock} unidades disponibles
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[0.2em] text-[#f2ca50] uppercase">
                Artista
              </dt>
              <dd className="mt-2 text-sm font-semibold text-white">
                {detail.artista}
              </dd>
            </div>
          </dl>

          <p className="mt-8 font-[Inter] text-sm leading-7 text-[#d0c5af]">
            <span className="float-left mr-2 font-[Playfair_Display] text-5xl leading-10 text-[#f2ca50]">
              V
            </span>
            inilo seleccionado para coleccionistas que buscan una pieza especial
            de {detail.artista}. Una edicion ideal para sumar al templo musical
            de casa y disfrutar el sonido clasico en formato fisico.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {detail.stock === 0 ? (
              <p className="font-[Inter] text-sm font-bold tracking-[0.14em] text-red-400 uppercase">
                Producto sin stock
              </p>
            ) : purchase ? (
              <Link
                to="/cart"
                className="bg-[#f2ca50] px-12 py-4 font-[Inter] text-[11px] font-bold tracking-[0.22em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d] hover:shadow-[0_14px_30px_rgba(242,202,80,0.2)]"
              >
                Ir al carrito
              </Link>
            ) : (
              <>
                <div className="border border-[#4a382a] px-4 py-2">
                  <ItemCount
                    stock={detail.stock}
                    cont={cont}
                    setCont={setCont}
                  />
                </div>
                <button
                  onClick={onAdd}
                  className="bg-[#f2ca50] px-12 py-4 font-[Inter] text-[11px] font-bold tracking-[0.22em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d] hover:shadow-[0_14px_30px_rgba(242,202,80,0.2)]"
                >
                  Agregar al carrito
                </button>
              </>
            )}
          </div>
        </article>
      </section>
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
      />
    </main>
  );
};

export default ItemDetail;
