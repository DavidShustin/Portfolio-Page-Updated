// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// css
import "../styles/index.css";

// app
import Layout from "./layout";

// render first so a failed metrics import never blanks the page
ReactDOM.render(<Layout />, document.querySelector("#app"));

// ---- Vercel Speed Insights (safe dynamic import) ----
if (process.env.NODE_ENV === "production") {
  import("@vercel/speed-insights").then((mod) => {
    // handle both possible export shapes
    const inject =
      (mod && (mod.inject || mod.default?.inject)) || null;
    if (typeof inject === "function") {
      inject();
    } else {
      // optional: console.warn("Speed Insights 'inject' not available");
    }
  }).catch(() => {
    // swallow errors so the page never crashes
  });
}
