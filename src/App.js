import React from "react";

/*components*/
import Nav from "./components/Nav/index";
import Banner from "./components/Banner/index";
import SymptomsSection from "./components/SymptomsSection/index";
import StatsSection from "./components/StatsSection/index";
import ContagionSection from "./components/ContagionSection/index";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <StatsSection />
      <SymptomsSection />
      <ContagionSection />
    </div>
  );
}

export default App;
