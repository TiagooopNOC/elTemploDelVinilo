import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const [showClearModal, setShowClearModal] = useState(false);
  const { cart, clear, removeItem, increaseItem, decreaseItem, total } =
    useContext(CartContext);

  const confirmClearCart = () => {
    clear();
    setShowClearModal(false);
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-[calc(100vh-80px)] bg-[#101010] px-6 py-16 text-white">
        <section className="mx-auto max-w-6xl">
          <p className="font-[Inter] text-[11px] font-bold tracking-[0.22em] text-[#f2ca50] uppercase">
            Carrito
          </p>
          <h1 className="mt-2 font-[Playfair_Display] text-5xl font-bold">
            Tu seleccion esta vacia
          </h1>
          <p className="mt-4 max-w-xl font-[Inter] text-sm leading-7 text-[#d0c5af]">
            Todavia no agregaste vinilos al carrito. Recorre el catalogo y suma
            tus discos favoritos.
          </p>
          <Link
            to="/catalogo"
            className="mt-8 inline-block bg-[#f2ca50] px-8 py-4 font-[Inter] text-[11px] font-bold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d]"
          >
            Ver catalogo
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#101010] px-6 py-14 text-white">
      <section className="mx-auto max-w-6xl">
        <header className="border-b border-[#25211b] pb-8">
          <h1 className="font-[Playfair_Display] text-5xl font-bold">
            Tu seleccion
          </h1>
          <p className="mt-2 font-[Inter] text-[11px] font-bold tracking-[0.22em] text-[#f2ca50] uppercase">
            Vinilos listos para tu bandeja
          </p>
        </header>

        <section className="grid gap-10 py-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            {cart.map((prod) => (
              <article
                key={prod.id}
                className="grid gap-5 border-b border-[#25211b] pb-8 sm:grid-cols-[110px_1fr_auto] sm:items-center"
              >
                <img
                  src={prod.img}
                  alt={prod.nombre}
                  className="h-[110px] w-[110px] object-cover shadow-[0_16px_30px_rgba(0,0,0,0.35)]"
                />

                <div>
                  <p className="font-[Inter] text-[10px] font-bold tracking-[0.18em] text-[#f2ca50] uppercase">
                    {prod.categoria}
                  </p>
                  <h2 className="mt-1 font-[Playfair_Display] text-3xl leading-none font-bold text-white">
                    {prod.nombre}
                  </h2>
                  <p className="mt-2 font-[Inter] text-sm text-[#d0c5af]">
                    {prod.artista}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 font-[Inter]">
                    <span className="text-sm text-[#d0c5af]">Cantidad:</span>
                    <div className="flex h-10 items-center border border-[#4a382a] bg-[#141210]">
                      <button
                        type="button"
                        onClick={() => decreaseItem(prod.id)}
                        className="flex h-full w-10 items-center justify-center text-lg font-bold text-[#d0c5af] transition-colors hover:bg-[#1f1b16] hover:text-[#f2ca50]"
                        aria-label={`Restar una unidad de ${prod.nombre}`}
                      >
                        -
                      </button>
                      <span className="flex h-full min-w-12 items-center justify-center border-x border-[#4a382a] px-4 text-sm font-bold text-[#f2ca50]">
                        {prod.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increaseItem(prod.id)}
                        disabled={prod.quantity >= prod.stock}
                        className="flex h-full w-10 items-center justify-center text-lg font-bold text-[#d0c5af] transition-colors hover:bg-[#1f1b16] hover:text-[#f2ca50] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#d0c5af]"
                        aria-label={`Agregar una unidad de ${prod.nombre}`}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs text-[#8f8575]">
                      Stock: {prod.stock}
                    </span>
                  </div>
                  <p className="mt-2 font-[Inter] text-xs text-[#8f8575]">
                    Precio unitario: U$D {prod.precio}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
                  <button
                    onClick={() => removeItem(prod.id)}
                    className="cursor-pointer font-[Inter] text-lg text-[#d0c5af] transition-colors hover:text-[#f2ca50]"
                    aria-label={`Eliminar ${prod.nombre}`}
                  >
                    x
                  </button>
                  <p className="font-[Inter] text-lg font-bold text-[#f2ca50]">
                    Precio final: U$D {prod.precio * prod.quantity}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit bg-[#171614] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
            <h2 className="font-[Playfair_Display] text-2xl font-bold">
              Resumen de compra
            </h2>

            <div className="mt-6 space-y-4 border-b border-[#30291f] pb-6 font-[Inter] text-xs">
              <div className="flex justify-between gap-4">
                <span className="text-[#d0c5af]">Total a pagar</span>
                <span className="font-bold text-white">U$D {total()}</span>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <span className="font-[Inter] text-[11px] font-bold tracking-[0.18em] text-white uppercase">
                Total
              </span>
              <span className="font-[Playfair_Display] text-3xl font-bold text-[#f2ca50]">
                U$D {total()}
              </span>
            </div>

            <Link to={"/checkout"}>
              <button className="mt-7 cursor-pointer w-full bg-[#f2ca50] px-6 py-4 font-[Inter] text-[11px] font-bold tracking-[0.18em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d]">
                Finalizar compra
              </button>
            </Link>

            <button
              type="button"
              onClick={() => setShowClearModal(true)}
              className="mt-4 w-full cursor-pointer border border-[#3a3125] px-6 py-3 font-[Inter] text-[11px] font-bold tracking-[0.18em] text-[#d0c5af] uppercase transition-colors hover:border-[#f2ca50] hover:text-[#f2ca50]"
            >
              Vaciar carrito
            </button>

            <div className="mt-7 space-y-3 font-[Inter] text-[10px] font-bold tracking-[0.14em] text-[#d0c5af] uppercase">
              <p>
                <span className="text-[#f2ca50]">+</span> Prensados
                seleccionados
              </p>
              <p>
                <span className="text-[#f2ca50]">+</span> Embalaje seguro
              </p>
            </div>
          </aside>
        </section>
      </section>

      {showClearModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6"
          onClick={() => setShowClearModal(false)}
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-cart-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg border border-[#3a3125] bg-[#151412] px-8 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#4a382a] bg-[#11100f] text-xl text-[#f2ca50]">
              <i className="bi bi-trash3"></i>
            </div>

            <p className="mt-6 font-[Inter] text-[10px] font-bold tracking-[0.2em] text-[#f2ca50] uppercase">
              Vaciar carrito
            </p>

            <h2
              id="clear-cart-title"
              className="mt-3 font-[Playfair_Display] text-3xl font-bold text-white"
            >
              ¿Estas seguro?
            </h2>

            <p className="mt-4 font-[Inter] text-sm leading-7 text-[#d0c5af]">
              Se eliminaran todos los vinilos de tu carrito. Esta accion no se
              puede deshacer.
            </p>

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setShowClearModal(false)}
                className="cursor-pointer border border-[#3a3125] px-7 py-3 font-[Inter] text-[11px] font-bold tracking-[0.18em] text-[#d0c5af] uppercase transition-colors hover:border-[#f2ca50] hover:text-[#f2ca50]"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={confirmClearCart}
                className="cursor-pointer bg-[#f2ca50] px-7 py-3 font-[Inter] text-[11px] font-bold tracking-[0.18em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d]"
              >
                Si, vaciar carrito
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default CartView;
