import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
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
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
