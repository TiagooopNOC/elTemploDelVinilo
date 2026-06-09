import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const Catalogo = () => {
  const { categoryId } = useParams();
  const title = categoryId || "Nuestro Catalogo";

  return (
    <div className="bg-[#131313] font-[Playfair_Display] text-[48px] text-[#e5e2e1]">
      <h2 className="p-10">{title}</h2>
      <ItemListContainer />
    </div>
  );
};
export default Catalogo;
