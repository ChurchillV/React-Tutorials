import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import 'bootstrap';
const Home = () => {
    const [items, setItems] = useState([
        {product_name: "Necklace", type: "necklace", price: "50.00", id: "1"},
        {product_name: "Bracelet", type: "bracelet", price: "40.00", id: "2"},
        {product_name: "Anklet", type: "necklace", price: "30.00", id: "3"}
    ])
    const [name, setName] = useState('Vince');
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        if (toggle) {
            setName('Keyshia');
            setToggle(false);
            console.log(toggle);
        }
        else {
            setName('Vince');
            setToggle(true)
            console.log(toggle);
        }
    }

    const removeFromCart = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

//Runs everytime a render occurs
    useEffect(() => {
        console.log('UseEffect ran');
        console.log(name);
    }, [name]);


    return (
        <div className="home">
            <h1>Home</h1>
            <p>Hello { name }! Welcome to Sybil's store</p>
            <button onClick={handleClick}>Click Me</button>
            <div className= "catalogue row">
                <ItemList items = {items} title= "Jewellery" removeFromCart={removeFromCart}/>
            </div>
            <div className="catalogue row">
                <ItemList items = {items.filter((item) => item.type === "necklace")} title= "Necklaces" removeFromCart={removeFromCart}/>
            </div>
            </div>
     );
}
 
export default Home;