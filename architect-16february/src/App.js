import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
