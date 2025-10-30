import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
