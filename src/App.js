import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="2xl:container m-auto ">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
