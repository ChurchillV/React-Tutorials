import { useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
    const [items, setItems] = useState([
        {product_name: "Necklace", type: "necklace", price: "50.00", id: "1"},
        {product_name: "Bracelet", type: "bracelet", price: "40.00", id: "2"},
        {product_name: "Anklet", type: "necklace", price: "30.00", id: "3"}
    ])
    const [name, setName] = useState('Vince');
    let toggle = true;
    const handleClick = () => {
        if (toggle) {
            setName('Keyshia');
            toggle = false;
            console.log(toggle);
        }
        else {
            setName('Vince');
            toggle = true;
            console.log(toggle);
        }
    }

    const removeFromCart = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    return (
        <div className="home">
            <h1>Home</h1>
            <p>Hello { name }! Welcome to Sybil's store</p>
            <button onClick={handleClick}>Click Me</button>
                <ItemList items = {items} title= "Available Jewellery" removeFromCart={removeFromCart}/>
                <ItemList items = {items.filter((item) => item.type === "necklace")} title= "Necklaces" removeFromCart={removeFromCart}/>
        </div> 
     );
}
 
export default Home;