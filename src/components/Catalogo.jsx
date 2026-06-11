import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {
  const { categoryId } = useParams();
  const title = categoryId || "Nuestro Catalogo";

  return (
    <div className="bg-[#131313] font-[Playfair_Display] text-[#e5e2e1]">
      <h2 className="px-5 py-8 text-4xl sm:px-8 sm:text-[42px] lg:p-10 lg:text-[48px]">
        {title}
      </h2>
      <ItemListContainer />
    </div>
  );
};
export default Catalogo;
