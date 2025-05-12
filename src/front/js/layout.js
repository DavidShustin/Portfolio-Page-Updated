import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Home } from './pages/home';
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import Waves from "./component/Waves";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div className="layout-container">
            <BrowserRouter basename={basename}>
                <ScrollToTop>

                        {/* Wave background here */}
                    <Waves lineColor="#4ade80" backgroundColor="#121212" />

                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
