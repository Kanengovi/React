import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const AddProduct = ({add}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [describe, setDescribe] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !describe) return;
        const product = {
            id: Date.now(),
            name,
            price,
            describe,
        }

       add(product);

        navigate('/productlist');
    }
    return (
        <div>
            <div className="header">
            <Link to='/' className="link">Home</Link>
            <Link to='/productlist' className="link">Product List</Link>
            <Link to='/addproduct' className="link">Add Product</Link>
            </div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />

                <input 
                placeholder="Describe"
                value={describe}
                onChange={(e) => setDescribe(e.target.value)}
                />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddProduct;