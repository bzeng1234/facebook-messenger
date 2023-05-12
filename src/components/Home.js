import React from "react";
import '../styles/home.css'
import Header from "./Header";
import Messenger from "./Messenger";

function Home({user}) {
    return (
        <div className="home">
            <Header user={user}/>
            <Messenger />
        </div>
    );
};

export default Home;