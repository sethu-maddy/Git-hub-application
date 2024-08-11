import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import { Githubprovider } from "./Context/Github_Cotext";
import User from "./pages/User_ind";
function App() {
  return (
    <Githubprovider>
      <Router>
        <div className="h-screen flex flex-col justify-between">
          <Navbar />
          <main className="container mx-auto px-3 pb-12 text-white text-lg">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/user/:login" element={<User />}></Route>
              <Route exact path="/*" element={<Notfound />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Githubprovider>
  );
}

export default App;
