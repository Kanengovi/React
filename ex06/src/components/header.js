import { Badge, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Header = (props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div className="header">
      <Link to="/home">
        <Button variant="contained">Home</Button>
      </Link>
      <h2>{email}</h2>
      <Link to="/cart">
        <IconButton aria-label="cart">
          <Badge badgeContent={props.cart.length ?? 0} color="primary">
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;