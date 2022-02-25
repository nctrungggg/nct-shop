import Button from "@material-ui/core/Button";
import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
Home.propTypes = {};

function Home(props) {
  const history = useHistory();
  const toProduct = () => {
    history.push("/products");
  };
  return (
    <div>
      <h1>NCT HOME </h1>
      <Button variant="contained" color="primary" onClick={toProduct}>
        Products
      </Button>
    </div>
  );
}

export default Home;
