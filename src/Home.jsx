import { useState } from "react";

const Home = () => {
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

    return (
        <div className="home">
            <h1>Home</h1>
            <p>Hello { name }! Welcome to Sybil's store</p>
            <button onClick={handleClick}>Click Me</button>
        </div> 
     );
}
 
export default Home;