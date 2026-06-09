import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = () => {
  const [result, setResult] = useState({
    categoryId: null,
    products: [],
  });
  const { categoryId } = useParams();

  useEffect(() => {
    const prodCollection = categoryId
      ? query(collection(db, "items"), where("categoria", "==", categoryId))
      : collection(db, "items");
    getDocs(prodCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setResult({ categoryId: categoryId ?? "", products: list });
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setResult({ categoryId: categoryId ?? "", products: [] });
      });
  }, [categoryId]);

  const loader = result.categoryId !== (categoryId ?? "");

  return (
    <>
      {loader ? (
        <LoaderComponent />
      ) : (
        <section className="min-h-[32rem]  bg-[#131313]">
          <ItemList products={result.products}></ItemList>
        </section>
      )}
    </>
  );
};

export default ItemListContainer;
