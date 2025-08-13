import { Link } from "react-router-dom";


const ProductList = ({products}) => {
    return (
        <div>
            <div className="header">
            <Link to='/' className="link">Home</Link>
            <Link to='/productlist' className="link">Product List</Link>
            <Link to='/addproduct' className="link">Add Product</Link>
            </div>
            <div className="listBody">
                {products.map((p) => (
                    <div key={p.id} className="listItem">
                        <h3>{p.name}</h3>
                        <h4>${p.price}</h4>
                        <Link to={`/productdetail/${p.id}`} className="link"><button>See More</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;