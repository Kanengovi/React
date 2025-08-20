import { useParams } from "react-router-dom";
import Header from "./header";
import { Button, Grid } from "@mui/material";

const Detail = (props) => {
  const { id } = useParams();

  const product = props.products.find((p) => String(p.id) === id);
  if (!product) return <h1>Product not Found</h1>;

  return (
    <div className="container">
      <Header cart={props.cart} />
      <Grid container spacing={2} className="detailGrid">
        <Grid size={8}>
          <h1>{product.title}</h1>
          <h3>{(product.category).toUpperCase()}</h3>
          <p>{product.description}</p>

          <h3 className="price">Price: ${product.price}</h3>
          <Button variant="contained" onClick={() => props.add(product)}>Add to Cart</Button>
        </Grid>
        <Grid size={4}>
          <img className="imgGrid" src={product.image} alt={product.title} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Detail;