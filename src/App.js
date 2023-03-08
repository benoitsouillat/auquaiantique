import Carte from "./components/Carte";
import Home from "./components/Home";
import Logo from "./components/Logo";
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <header>
        <Logo />
        <Routes>
          <Route path="/carte" element={<Carte/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </header>

    </div>
  );
}

export default App;
