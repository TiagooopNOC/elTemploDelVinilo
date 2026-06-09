import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import Error from "./Error";
import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [result, setResult] = useState({
    requestedId: null,
    detail: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "items", id);
    getDoc(docRef)
      .then((res) => {
        setResult({
          requestedId: id,
          detail: res.exists() ? { id: res.id, ...res.data() } : null,
        });
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setResult({ requestedId: id, detail: null });
      });
  }, [id]);

  if (result.requestedId !== id) {
    return <LoaderComponent />;
  }

  return result.detail ? <ItemDetail detail={result.detail} /> : <Error />;
};

export default ItemDetailContainer;
