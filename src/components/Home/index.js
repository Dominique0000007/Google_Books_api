import React from "react";
import Header from '../Header/index'
import Footer from '../Footer/index'
import HomeMain from "../../components/HomeMain";
import Home from "../Home";
export default function Home() {
    return (
        <div>
            <Header />
            <HomeMain />
            <Footer /> 
        </div>
    );
}