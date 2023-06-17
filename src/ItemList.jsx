import 'bootstrap';

function ItemList ({ items, title, removeFromCart }) {
    return ( 
        <div className="product-range col-sm-4">
                <h1>{title}</h1>
                <div className="item-list">
                {items.map((item) => (
                    <div className="item-preview" key={ item.id }>
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