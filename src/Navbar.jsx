const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Sybil's Store</h1>
            <div className="links">
                <a href="">Home</a>
                <a href="/cart" className="cart" style={{
                    color: "white",
                    backgroundColor: "#b64a4a",
                    borderRadius: "8px",
                    ":hover": {
                        backgroundColor: "#ee8e8e"
                    }
                }}>Cart</a>
            </div>
        </nav>
     );
}
 
export default Navbar;