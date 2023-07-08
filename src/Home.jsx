import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import 'bootstrap';
const Home = () => {
    const [items, setItems] = useState(null);
    const [name, setName] = useState('Vince');
    const [toggle, setToggle] = useState(true);
    const [isPending, setIsPending] = useState(true);
    const handleClick = () => {
        if (toggle) {
            setName('Keyshia');
            setToggle(false);
            console.log(toggle);
        }
        else {
            setName('Vince');
            setToggle(true);
            console.log(toggle);
        }
    }

    const removeFromCart = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

//Runs everytime a render occurs
    useEffect(() => {
        setTimeout(() => {
            console.log(name);
        fetch('http://localhost:7000/items')
            .then(res => {
               return res.json();
            })
            .then(data => {
                setItems(data);
                setIsPending(false);
            })
        }, 1000);
    }, [name]);


    return (
        <div className="home">
            {isPending && <div className="waiting-message">Fetching Data...</div>}
            <div className="hero-section">
                <h1>Home</h1>
                <p>Hello { name }! Welcome to Sybil's store</p>
                <button onClick={handleClick}>Click Me</button>
            </div>
            <div className= "catalogue row">
               {items &&  <ItemList items = {items} title= "Jewellery" removeFromCart={removeFromCart}/>}
            </div>
            <div className="catalogue row">
                {items && <ItemList items = {items.filter((item) => item.type === "necklace")} title= "Necklaces" removeFromCart={removeFromCart}/>}
            </div>
            </div>
     );
}
 
export default Home;