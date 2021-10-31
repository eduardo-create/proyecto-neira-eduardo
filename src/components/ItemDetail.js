

function ItemDetail({ product }) {

    return (
        <div className="container mt-5">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img className="img-fluid" src={product.image} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <p className="card-title fw-bold fs-2 d-inline">{product.name}</p>
                            <p className="fw-bold fs-3 text-success d-lg-inline d-sm-inline float-lg-end float-sm-end">$ {product.price}</p>
                            <p className="text-muted">Cantidad disponible {product.quantity}</p>
                            <p className="card-text">{product.description}</p>
                            <div className="btn-group" style={{ width: "130px" }}>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-dash"></i></button>
                                <div className="form-control" >
                                    <label htmlFor="input-number" aria-label="cantidad"></label>
                                    <input className="col-12" id="input-number" small="0" min="1" max="4" value="1" border="0" />
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-plus"></i></button>
                            </div>
                            <div className="pt-3 d-grid">
                                <button type="button" className="btn btn-success d-block fs-4">añadir <i className="bi bi-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail