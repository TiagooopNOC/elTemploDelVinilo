import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 bg-[#131313] px-8 pb-12">
      {products.map((product) => (
        <Item key={product.id} product={product}></Item>
      ))}
    </div>
  );
};

export default ItemList;
