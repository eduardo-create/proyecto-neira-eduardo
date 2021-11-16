import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import { collection, getDocs, query } from "@firebase/firestore";
import ItemList from "./ItemList";

export const ItemListContainer = () => {

  const [itemList, setItemList] = useState(null);


  const { categoryId } = useParams();

  useEffect(() => {

    const db = getFirestore();

    const q = query(
      collection(db, "items")
    );
    getDocs(q).then((snapshot) => {
      setItemList(snapshot.docs.map(doc => doc.data()));
    })


  }, [categoryId]);




  return (
    <div>
      <h1 className="text-center">Nuestros Productos</h1>
      <div className="row justify-content-center">
        <ItemList itemList={itemList} />
      </div>
    </div>
  );
};

export default ItemListContainer;
