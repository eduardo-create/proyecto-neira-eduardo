import React from 'react'

export const Item = ({ items }) => {
    return (

        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={items.image} alt={items.name} />
            <div className="card-body">
                <h5 className="card-title text-muted">{items.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{items.price}$</h6>
                <p className="card-text text-muted"> Stock {items.quantity} </p>
                <button className="btn btn-outline-success">Ver más</button>
            </div>
        </div>

    )
}

export default Item;
