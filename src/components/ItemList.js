import { useState, useEffect } from "react"
import Item from "./Item"
import Loading from "./Loading"

const myPromise = () => {
    return new Promise((resolve) => {

        setTimeout(() => resolve(
            [{ id: 1, name: 'Hornillo dos piezas', description: 'Valor presentado por unidad. Aromatizá tus ambientes siempre. La esencia se puede usar mezclada con agua o pura si se desea obtener una fragancia más intensa. Revisar que el hornito tenga esencia para que no se queme al tener la vela calentando la parte superior de la cerámica.', price: 300, quantity: 3, image: 'https://static.olistshops.com/images/467adc91-babb-419c-8a6d-8ea23ad42e9b.JPEG' },
            { id: 2, name: 'Reloj de pared', description: 'Ideal para decorar tus espacios y súper útil para poder ver el tiempo en cualquier momento. Tamaño 28cm.', price: 790, quantity: 1, image: 'https://static.olistshops.com/images/47a21f34-664e-4cbc-928d-742c200980a2.JPEG' },
            { id: 3, name: 'Fuente de agua aljibe', description: 'Las fuentes de agua nos ayudan a mejorar la energía de nuestra casa, a armonizarla y también a generar lo que se denomina "la energía en movimiento", que ubicada en el lugar correcto trae excelentes resultados.', price: 3500, quantity: 2, image: 'https://static.olistshops.com/images/a553fce4-ab1c-4bc4-a37f-893c4314d838.JPEG' },
            { id: 4, name: 'Fuente de agua bonsai', description: 'Una de las claves para trabajar con el Feng Shui, está directamente relacionada con los 5 elementos y sus diferentes ciclos, con ellos atraemos la energía buena.', price: 3000, quantity: 7, image: 'https://static.olistshops.com/images/6d43126a-1e13-4ff2-8acf-70824ad41561.JPEG' }]
        ), 2000)
    })
}

export const ItemList = () => {

    const [dataShow, setDataShow] = useState([]);
    const [loading, setLoading] = useState(true);




    const executePromise = () => {
        myPromise().then(data => {
            setDataShow(data);
            setLoading(false);
        })
    }

    useEffect(() => {

        executePromise();
    }, [])

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


                            <div className="col-md-4 mt-4">
                                <Item key={items.id} items={items} />
                            </div>




                        ))
                    )



            }
        </>

    );
}

export default ItemList;



