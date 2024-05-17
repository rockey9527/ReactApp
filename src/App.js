import React, {Fragment} from "react";
import Login from './pages/login'
import Home from './pages/home'
import City from './pages/city'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <Fragment>
      {/* <div className="App">
        <h1>This is React App</h1>
      </div>
      <div>
        <h1>This is REact App-other 666</h1>
      </div> */}
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/city" component={City}/>
          <Route exat path="/" component={Home} />
          <Redirect to={'/home'}></Redirect>
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
