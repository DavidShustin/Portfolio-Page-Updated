import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Home } from './pages/home';
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import injectContext from "./store/appContext";
import "../styles/layout.css"


import { Navbar } from "./component/navbar";
// import Waves from "./component/Waves";
import Background from "./component/Background";
import { Footer } from "./component/footer";
import { useEffect } from "react";

//create your first component
const Layout = () => {
    useEffect(() => {
        const testScroll = () => {
            console.log("📦 Layout scrollY:", window.scrollY);
        };

        window.addEventListener("scroll", testScroll);
        return () => window.removeEventListener("scroll", testScroll);
    }, []);
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div id="page-container">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Background />

                    <Navbar />
                    <div id="content-wrap">
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                    </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
