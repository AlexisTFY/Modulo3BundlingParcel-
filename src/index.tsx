import React from "react";
import ReactDOM from "react-dom";
import { RandomComponent } from "./randomComponent";
import classes from "./global.scss";


ReactDOM.render(
<div>
    <div className={classes.title}>
    <span>Módulo 3 - Bundling (Opcional)</span>
</div>  
<RandomComponent />
</div>, document.getElementById("root"));


