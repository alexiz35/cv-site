//import logo from './logo.svg';
import './App.scss';
import React, {createContext} from "react";
import HeadBar from "./HeadBar";
import MainContainer from "./MainContainer";


function App() {
    //let scroll = 0;

    const menuItem = "About";
    const NameMenu = createContext(null);


    return (
        <NameMenu.Provider value={menuItem}>
        <div className="App" >
            <header>
                <HeadBar />
            </header>
            <main>
                <MainContainer/>
            </main>
            <footer>

            </footer>
        </div>
        </NameMenu.Provider>
    );
}

export default App;
