//import react into the bundle


import React from "react";
import ReactDOM from "react-dom";

//import bootstrap into the bundle, dont forget to do npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';




//include your index.scss file into the bundle
import "../styles/index.css";


//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';