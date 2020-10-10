import React, { Component, Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));
const AddProject = lazy(() => import("./components/AddProject"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const NotFound = lazy(() => import("./components/NotFound"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/add-project" exact component={AddProject} />
              <Route path="/project/:id" exact component={ProjectDetails} />
              <Route path="*" exact component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;
