const Home = () => {
    const handleClick = (event) => {
        console.log("Hello Vince", event.target);
    }

    return (
        <div className="home">
            <h1>Home</h1>
        </div> 
     );
}
 
export default Home;