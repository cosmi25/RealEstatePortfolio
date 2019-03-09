import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Owners from "./pages/Owners";
import Tenants from "./pages/Tenants";
//import Reports from "./pages/Reports";
import Properties from "./pages/Properties";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Wrapper>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/owners" component={Owners} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/tenants" component={Tenants} />
        <Route exact path="/properties" component={Properties} />
        {/* <Route exact path="/reports" component={Reports} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
