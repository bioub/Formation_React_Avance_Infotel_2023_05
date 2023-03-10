import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import About from './About';
import Hello from './Hello';

const HelloWithRouter = withRouter(Hello);
// <Component match={} ... />

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          {/* <Route path="/hello/:name">
            <Hello />
          </Route> */}
          <Route path="/hello/:name" component={Hello} />
          {/* <Route path="/hello/:name">
            <HelloWithRouter />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
