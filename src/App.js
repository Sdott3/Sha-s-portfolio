import React from "react";
import Nav from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

export default function App () {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Nav />
            <About />
            <Contact />
            <Portfolio />
        </main>
    );
}