import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import NewsLatter from "./component/NewsLatter";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLatter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
