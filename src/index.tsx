import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import LandingPage from './paths/landingPage'
import WorkDashboard from './paths/workDashboard'

const App = () => (
<div className="appContainer">
    <h1>My React and TypeScript App!</h1>
    <LandingPage/>
    <WorkDashboard/>
</div>
  );

ReactDOM.render(
  <App />,
  document.getElementById("root")
);