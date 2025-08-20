import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={product.image} alt={product.title} sx={{ objectFit: 'contain' }} />
      <CardContent>
        <Typography variant="h6" noWrap>{product.title}</Typography>
        <Typography>${product.price}</Typography>
        <Button component={Link} to={`/product/${product.id}`} variant="outlined" sx={{ mt: 1 }}>
          Xem chi tiết
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
