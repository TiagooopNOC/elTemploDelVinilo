const ItemCount = ({ stock, cont, setCont }) => {
  const sumar = () => {
    if (cont < stock) {
      setCont(cont + 1);
    }
  };

  const restar = () => {
    if (cont > 1) {
      setCont(cont - 1);
    }
  };

  return (
    <div className="flex min-w-28 items-center justify-between gap-5 font-[Inter] text-sm text-white">
      <button
        className="cursor-pointer px-1 text-[#d0c5af] transition-colors hover:text-[#f2ca50]"
        onClick={restar}
      >
        -
      </button>
      <p className="min-w-5 text-center text-[#f2ca50]">{cont}</p>
      <button
        className="cursor-pointer px-1 text-[#d0c5af] transition-colors hover:text-[#f2ca50]"
        onClick={sumar}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
