import './App.scss';
import React, {createContext, useState} from "react";
import HeadBar from "./HeadBar";
import MainContainer from "./MainContainer";
export const NameMenu = createContext(null);

function App() {

    const [menuItem,setMenuItem] = useState("about");


    return (
        <NameMenu.Provider value={[menuItem,setMenuItem]}>
        <div className="App" >
            <header>
                <HeadBar />
            </header>
            <main>
                <MainContainer/>
            </main>
            <footer>
                <div className={"footer"}>

                </div>
            </footer>
        </div>
        </NameMenu.Provider>
    );
}

export default App;
