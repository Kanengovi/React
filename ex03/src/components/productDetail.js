import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const ProductDetail = ({products}) => {
    const {id} = useParams();

    const product = products.find((p) => String(p.id) === id);

    if (!product) return (<h1>Product not Found</h1>)

    return (
        <div>
            <div className="header">
            <Link to='/' className="link">Home</Link>
            <Link to='/productlist' className="link">Product List</Link>
            <Link to='/addproduct' className="link">Add Product</Link>
            </div>
            <h2>Product Detail</h2>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Describe: {product.describe}</p>
        </div>
    )
}

export default ProductDetail;