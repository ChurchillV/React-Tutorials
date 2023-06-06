const Home = () => {
    const handleClick = (event) => {
        console.log("Hello Vince", event.target);
    }

    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={() => handleClick(event)}>Click Me</button>
        </div> 
     );
}
 
export default Home;