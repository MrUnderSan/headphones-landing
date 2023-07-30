import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Colour} from "./layout/section/colour/Colour";
import {Good} from "./layout/section/good/Good";
import {Latest} from "./layout/section/latest/Latest";
import {Box} from "./layout/section/box/Box";
import {Subscribe} from "./layout/section/subscribe/Subscribe";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Colour/>
            <Good/>
            <Latest/>
            <Box/>
            <Subscribe/>
            <Footer/>

        </div>
    );
}

export default App;
