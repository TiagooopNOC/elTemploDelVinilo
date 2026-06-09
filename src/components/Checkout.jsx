import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const inputClasses =
    "w-full border border-[#3a3125] bg-[#11100f] px-4 py-3 font-[Inter] text-sm text-white outline-none transition-colors placeholder:text-[#71695d] focus:border-[#f2ca50]";

  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    direccion: "",
    email: "",
  });
  const [secondMail, setSecondMail] = useState("");
  const { cart, total, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const buyerData = (e) => {
    setBuyer((currentBuyer) => ({
      ...currentBuyer,
      [e.target.name]: e.target.value,
    }));
  };

  const terminarCompra = async (e) => {
    e.preventDefault();

    if (
      !buyer.name.trim() ||
      !buyer.lastName.trim() ||
      !buyer.direccion.trim() ||
      !buyer.email.trim() ||
      !secondMail.trim()
    ) {
      setErrors("Por favor complete todos los campos.");
      return;
    }

    if (buyer.email.trim() !== secondMail.trim()) {
      setErrors("Los correos no coinciden");
      return;
    }

    if (cart.length === 0) {
      setErrors("El carrito esta vacio.");
      return;
    }

    setErrors("");
    setLoading(true);

    const orden = {
      comprador: buyer,
      carrito: cart,
      total: total(),
      fecha: serverTimestamp(),
    };

    try {
      const orderColl = collection(db, "orders");
      const response = await addDoc(orderColl, orden);

      setOrderId(response.id);
      clear();
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setErrors("No se pudo generar la orden. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return orderId ? (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#0e0e0e] px-6 py-16 text-white">
      <section className="w-full max-w-2xl border border-[#2f281f] bg-[#151412] px-8 py-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:px-14 sm:py-16">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f2ca50] text-2xl text-[#f2ca50]">
          <i className="bi bi-check-lg"></i>
        </div>

        <h1 className="mt-7 font-[Playfair_Display] text-4xl font-bold sm:text-5xl">
          Gracias por tu compra
        </h1>

        <p className="mx-auto mt-4 max-w-lg font-[Inter] text-sm leading-7 text-[#c8bdab]">
          Tu pedido fue registrado correctamente. Guarda el codigo de la orden
          para identificar tu compra.
        </p>

        <div className="mt-9 border border-[#3a3125] bg-[#11100f] px-5 py-6">
          <p className="font-[Inter] text-[10px] font-bold tracking-[0.2em] text-[#d0c5af] uppercase">
            ID de la orden
          </p>
          <p className="mt-3 break-all font-[Inter] text-base font-bold tracking-[0.08em] text-[#f2ca50] sm:text-lg">
            {orderId}
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 inline-block bg-[#f2ca50] px-8 py-4 font-[Inter] text-[11px] font-bold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d]"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  ) : (
    <main className="min-h-[calc(100vh-80px)] bg-[#0e0e0e] px-6 py-14 text-white">
      <section className="mx-auto grid max-w-5xl overflow-hidden border border-[#2f281f] bg-[#151412] shadow-[0_24px_70px_rgba(0,0,0,0.35)] lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="relative overflow-hidden bg-[#1b1814] p-8 sm:p-12">
          <div className="relative">
            <h1 className="font-[Playfair_Display] text-4xl leading-tight font-bold sm:text-5xl">
              Finaliza tu compra
            </h1>
            <p className="mt-6 font-[Inter] text-sm leading-7 text-[#c8bdab]">
              Completa tus datos para confirmar la seleccion de vinilos de tu
              carrito.
            </p>

            <div className="mt-10 border-t border-[#3a3125] pt-8">
              <p className="font-[Inter] text-[10px] font-bold tracking-[0.18em] text-[#f2ca50] uppercase">
                Compra protegida
              </p>
              <p className="mt-3 font-[Inter] text-xs leading-6 text-[#988f81]">
                Tus datos se utilizaran unicamente para registrar y gestionar
                esta orden.
              </p>
            </div>
          </div>
        </aside>

        <div className="p-8 sm:p-12">
          <header className="border-b border-[#30291f] pb-7">
            <h2 className="font-[Playfair_Display] text-3xl font-bold">
              Información personal
            </h2>
          </header>

          <form onSubmit={terminarCompra} className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-[Inter] text-[11px] font-bold tracking-[0.14em] text-[#d0c5af] uppercase"
                >
                  Nombre
                </label>
                <input
                  onChange={buyerData}
                  value={buyer.name}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block font-[Inter] text-[11px] font-bold tracking-[0.14em] text-[#d0c5af] uppercase"
                >
                  Apellido
                </label>
                <input
                  onChange={buyerData}
                  value={buyer.lastName}
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Ingresa tu apellido"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="direccion"
                className="mb-2 block font-[Inter] text-[11px] font-bold tracking-[0.14em] text-[#d0c5af] uppercase"
              >
                Dirección
              </label>
              <input
                onChange={buyerData}
                value={buyer.direccion}
                id="direccion"
                name="direccion"
                type="text"
                placeholder="Calle 123"
                className={inputClasses}
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="mb-2 block font-[Inter] text-[11px] font-bold tracking-[0.14em] text-[#d0c5af] uppercase"
              >
                Email
              </label>
              <input
                onChange={buyerData}
                value={buyer.email}
                id="email"
                name="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                className={inputClasses}
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="confirmEmail"
                className="mb-2 block font-[Inter] text-[11px] font-bold tracking-[0.14em] text-[#d0c5af] uppercase"
              >
                Confirmar email
              </label>
              <input
                value={secondMail}
                onChange={(e) => setSecondMail(e.target.value)}
                id="confirmEmail"
                name="confirmEmail"
                type="email"
                placeholder="Repite tu email"
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-9 w-full cursor-pointer bg-[#f2ca50] px-6 py-4 font-[Inter] text-[11px] font-bold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd65d] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Cargando Compra" : "Finalizar compra"}
            </button>
            {errors && (
              <p className="mt-4 font-[Inter] text-sm text-red-400">{errors}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
