import React from "react";
import classes from "./TagCenter.module.scss";

const TagCenter = ({children}) => {
    return (
      <div className={classes.tag_center}>{children}</div>
    )
};

export default TagCenter;