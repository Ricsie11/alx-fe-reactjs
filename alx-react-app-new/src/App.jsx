import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import UserContext from "./UserContext";
import ProfilePage from "./ProfilePage";
import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";

function App() {
  const userData = {
    name: "John Doe",
    email: "john@example.com",
  };
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
      <UserContext.Provider value={userData}>
        <ProfilePage />
        <UserDetails />
        <UserInfo />
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App;
