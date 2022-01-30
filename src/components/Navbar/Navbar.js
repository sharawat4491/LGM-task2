// Navigation Component
import React from "react";
import classes from "./Navbar.module.css";

function navigation(props) {
  return (
    <nav className={classes.Nav}>
      <h2 className={classes.Brand}>Lets Grow More</h2>
      {props.clicksts ? (
        <a href="https://twitter.com/iamrealbhuvi">
          <button className={classes.Follow}>Get Users</button>
        </a>
      ) : (
        <button className={classes.Userbtn} onClick={props.onclicked}>
          Get Users
        </button>
      )}
    </nav>
  );
}

export default navigation;
