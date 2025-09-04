import './App.css'

import {Route, Routes} from "react-router-dom";

import LadingPage from "./pages/LadingPage/LadingPage.jsx";
import CharacterList from "./pages/CharactersList/CharacterList.jsx";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails.jsx";
import Game from "./pages/Game/Game.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {

  return (
    <>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<LadingPage />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="/game"  element={<Game />} />
            </Routes>
        </main>
        <Footer />
    </>
  )
}

export default App
