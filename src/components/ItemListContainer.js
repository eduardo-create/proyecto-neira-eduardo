import ItemList from "./ItemList";

export const ItemListContainer = () => {
  return (
    <div className="container justify-content-center">
      <h1 className="text-center">Nuestros Productos</h1>
      <div className="row">
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
