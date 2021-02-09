import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// Step 1: In Step 1 above, there are two components that we are importing from React Router. We use them in turn.


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}; 

// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );

ReactDOM.render((
  <Router>
    <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
); 

// Step 2: The Router (our alias for BrowserRouter) component is the base for our application's routing. 
// It is where we declare how React Router will be used. Notice that nested inside the Router component we use the Route component. 
// The Route component has two props in our example: path and component. 
// The Route component is in charge of saying: "when the URL matches this specified path, render this specified component".