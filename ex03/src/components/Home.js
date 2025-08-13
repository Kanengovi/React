import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="header">
            <Link to='/' className="link">Home</Link>
            <Link to='/productlist' className="link">Product List</Link>
            <Link to='/addproduct' className="link">Add Product</Link>
            </div>
            <h1>WELCOME, PRODUCT PAGE</h1>
        </div>
    )
}

export default Home;