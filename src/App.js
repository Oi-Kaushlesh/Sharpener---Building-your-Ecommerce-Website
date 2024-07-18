// App.js
import "./App.css";
import Footer from "./components/Footer";
import NavbarHeader from "./components/NavbarHeader";
import StorePage from "./components/pages/StorePage";
import AboutPage from "./components/pages/AboutPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ContactUs from "./components/pages/ContactUs";
import ProductPage from "./components/pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarHeader />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/store/:productId">
          <ProductPage />
        </Route>
        <Route path="/store">
          <StorePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
