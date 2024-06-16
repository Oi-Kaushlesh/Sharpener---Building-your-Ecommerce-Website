import "./App.css";
import Footer from "./components/Footer";
import NavbarHeader from "./components/Navbar";
import StorePage from "./components/pages/StorePage";
import AboutPage from "./components/pages/AboutPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <StorePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
