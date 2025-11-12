// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// import bootstrap into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// include your index.css
import "../styles/index.css";

// put this near the top of the file
import { inject } from "@vercel/speed-insights";

if (process.env.NODE_ENV === "production") {
  inject(); // adds the Speed Insights script for real-user metrics
}

// import your layout
import Layout from "./layout";

// import Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/react";

// render your React application
ReactDOM.render(
    <>
        <Layout />
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
    </>,
    document.querySelector("#app")
);
