import "./app.scss"
import Contact from "./components/contact/contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar.jsx";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services.jsx";


function App() {
  return <div>
    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    <section id="About"><Services></Services></section>
    <div id ="Portfolio"><Portfolio ></Portfolio></div>
    
    <section id="Contact"><Contact></Contact></section>

  </div>;
}

export default App;
