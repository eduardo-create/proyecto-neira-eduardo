import { collection, getDocs, getFirestore, query } from "@firebase/firestore"
import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import Item from "./Item"
import Loading from "./Loading"



export const ItemList = () => {

    const [dataShow, setDataShow] = useState(null);
    const [loading, setLoading] = useState(true);


    const { itemdId } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const q = query(
            collection(db, "items"),

        );
        getDocs(q).then((snapshot) => {
            setDataShow(snapshot.docs.map((doc) => doc.data()));
            setLoading(false);
        });
    }, [itemdId]);

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

                        dataShow.map(items => (


                            <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 mt-4">
                                <NavLink className="nav-link" to={`{/Product/category:${items.category}/${items.name}`}>
                                    <Item key={items.name} items={items} />
                                </NavLink>
                            </div>




                        ))
                    )



            }
        </>

    );
}

export default ItemList;



