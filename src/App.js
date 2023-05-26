import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Work from "./Components/Work";


function App() {
  return (
    <div className="App">
      <Home />
      <br/>
      <Form/>
      <About />
      <Work />    
      <Contact />
      <Footer />
      
    </div>
  );
}



export default App;
