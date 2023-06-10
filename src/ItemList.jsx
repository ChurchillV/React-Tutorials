const ItemList = ({ items, title }) => {
    return ( 
        <div className="item-list">
            <h1>{title}</h1>
            {items.map((item) => (
                <div className="item-preview" key={ item.id }>
                    <h2>{ item.product_name }</h2>
                    <p>Price: { item.price }</p>
                </div>
            ))}
        </div>
     );
}
 
export default ItemList;