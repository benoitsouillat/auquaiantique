import HomeHeader from "./components/HomeHeader";
import Home from "./components/Home";
import CarteHeader from "./components/CarteHeader";
import Carte from "./components/Carte";
import AboutusHeader from "./components/AboutusHeader";
import Logo from "./components/Logo";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <header>
        <Logo />
        <Routes>
          <Route path="/aboutus" element={<AboutusHeader />}></Route>
          <Route path="/carte" element={<CarteHeader />}></Route>
          <Route path="/auquaiantique" element={<HomeHeader />}></Route>
          <Route path="/login" element={<HomeHeader />}></Route>
          <Route path="/" element={<HomeHeader />}></Route>
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/carte" element={<Carte />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/auquaiantique" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
