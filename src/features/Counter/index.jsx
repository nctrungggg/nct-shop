import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

CounterFeature.propTypes = {};
const useStyles = makeStyles({
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    padding: "0 30px",
    margin: " 0 10px 0 0",
    cursor: "pointer",
  },
});

function CounterFeature(props) {
  // style MUI
  const classes = useStyles();

  // lấy state trong redux ra
  const count = useSelector((state) => state.count);

  // tạo dispatch để gửi action đi
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      <h1> Counter: {count}</h1>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleIncreaseClick}
        >
          Increase
        </Button>
        /
        <Button className={classes.btn} onClick={handleDecreaseClick}>
          De crease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
