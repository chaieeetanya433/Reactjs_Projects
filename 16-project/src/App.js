import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/Header.scss";
import Home from "./components/Home";
import "./styles/Home.scss";
import Footer from "./components/Footer"
import "./styles/Footer.scss";
import Contact from "./components/Contact"
import "./styles/Contact.scss";
import Services from "./components/Services.jsx"
import "./styles/mediaquery.scss"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
