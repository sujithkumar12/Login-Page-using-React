import React from "react";
import Card from "../UI/Card";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome to My First Page...</h1>
    </Card>
  );
};

export default Home;
