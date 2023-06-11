import Necklace from "./images/necklace.jpg";

const ItemList = ({ items, title }) => {
    return ( 
        <div className="item-list">
            <h1>{title}</h1>
            {items.map((item) => (
                <div className="item-preview" key={ item.id }>
                    <div className="image">
                        <img src={ Necklace } alt="image of item" />
                    </div>
                    <h2>{ item.product_name }</h2>
                    <p>$ { item.price }</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
     );
}
 
export default ItemList;