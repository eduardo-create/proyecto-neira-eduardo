import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { getFirestore } from "../firebase/index";


function ItemDetailContainer() {

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemName } = useParams();
    console.log(itemName);

    useEffect(() => {

        const dataBase = getFirestore()

        const dataBaseQuery = dataBase.collection("items").doc(itemName).get()

        dataBaseQuery
            .then(item => setDetails({ id: item.name, ...item.data() }))
            .catch(error => alert("Error:", error))
            .finally(() => setLoading(false))

    }, [itemName])





    return (
        <>
            {
                loading
                    ?
                    (
                        <Loading />
                    )
                    :
                    (

                        <div>
                            {details.map(product => (
                                <div key={itemName}>
                                    <ItemDetail product={product} />
                                </div>

                            ))}
                        </div>
                    )
            }
        </>
    )
}

export default ItemDetailContainer
