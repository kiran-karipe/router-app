import './App.css';
import { Route, Switch } from 'react-router-dom';
import Products from './components/products';
import Posts from './components/posts';
import Dashboard from './components/dashboard';
import NavBar from './navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/products" render={(props) => <Products sortBy="newest" {...props}/>}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/admin" component={Dashboard}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
