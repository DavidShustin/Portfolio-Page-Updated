// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// import bootstrap into the bundle
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// include your css
import "../styles/index.css";

// import your layout
import Layout from "./layout";

// ✅ framework-agnostic Speed Insights injector (works with React 16)
import { inject } from "@vercel/speed-insights";

if (process.env.NODE_ENV === "production") {
  inject(); // adds the Vercel Speed Insights script
}

// render your React application
ReactDOM.render(<Layout />, document.querySelector("#app"));
