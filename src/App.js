import React from "react";
import Nav from "./components/Navbar";
import About from "./components/About";

export default function App () {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Nav />
            <About />
        </main>
    );
}