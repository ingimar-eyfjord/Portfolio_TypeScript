import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./paths/landingPage";
import WorkDashboard from "./paths/workDashboard";
import Navigation from "./components/navigation";

// export interface AppIndexProps {
//   Navigation: React.FC;
//   function App(props: AppIndexProps): JSX.Element {
// }

function App(): JSX.Element {
  const [PathState, setPathState] = useState("Landing_page");
  useEffect(() => {
    setPathState("Work");
  }, []);

  async function onNavClick(e: string) {
    setPathState(e);
  }

  return (
    <div className="appContainer">
      <Navigation onNavClick={onNavClick}></Navigation>
      <h1>My React and TypeScript App!</h1>
      {PathState === "Landing_page" ? <LandingPage /> : ""}

      {PathState === "Work" ? <WorkDashboard /> : ""}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
