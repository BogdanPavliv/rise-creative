import React from "react";
import classes from "./Tag.module.scss";

const Tag = ({children}) => {
    return (
      <div className={classes.tag}>{children}</div>
    )
};

export default Tag;