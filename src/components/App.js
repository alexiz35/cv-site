//import logo from './logo.svg';
import './App.scss';
import React from "react";
import HeadBar from "./HeadBar";
import MainContainer from "./MainContainer";


function App() {
    return (
        <div className="App">
            <header>
                <HeadBar/>
            </header>
            <main>
                <MainContainer/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
