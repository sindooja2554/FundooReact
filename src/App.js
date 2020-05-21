import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/VerfiyUser";
import Forgot from "./components/ForgotPassword";
import Reset from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import Archive from "./components/Archive";
import Trash from "./components/Trash";
import Label from "./components/Label";

function App() {
  return (
    <div className="App">
      {/* A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. */}
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/forgot" exact component={Forgot} />
          <Route path="/reset/:token" exact component={Reset} />
          <Route path="/verify/:token" exact component={Verify} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/archive" exact component={Archive} />
          <Route path="/dashboard/trash" exact component={Trash} />
          <Route path="/dashboard/label/:key" exact component={Label} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
