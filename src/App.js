import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Contacts from "./pages/contacts";
import Portfolio from "./pages/portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  document.title = "Portfolio";
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contacts" component={Contacts} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
