import HomeHeader from "./components/HomeHeader";
import Home from "./components/Home";
import CarteHeader from "./components/CarteHeader";
import Carte from "./components/Carte";
import Logo from "./components/Logo";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <header>
        <Logo />
        <Routes>
          <Route path="/carte" element={<CarteHeader />}></Route>
          <Route path="/" element={<HomeHeader />}></Route>
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="/carte" element={<Carte />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>

    </div>
  );
}

export default App;
