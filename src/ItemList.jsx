function ItemList ({ items, title, removeFromCart }) {
    return ( 
        <div className="product-range">
                <h1>{title}</h1>
                <div className="item-list row">
                {items.map((item) => (
                    <div className="item-preview col-sm-4" key={ item.id }>
                        <h2>{ item.product_name }</h2>
                        <p>$ { item.price }</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ItemList;