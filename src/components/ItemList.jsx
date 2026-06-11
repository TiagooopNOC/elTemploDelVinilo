import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-12 bg-[#131313] px-5 pb-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-x-10 xl:grid-cols-4">
      {products.map((product) => (
        <Item key={product.id} product={product}></Item>
      ))}
    </div>
  );
};

export default ItemList;
