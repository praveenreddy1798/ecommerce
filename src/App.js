
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import Home from './components/Home';
import Cart from './components/Cart';
import store from './store/index'
import Details from './components/Details';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
   <div>
     <Nav />
     <Route exact path="/" component={Home} />
     <Route path="/cart" component={Cart} />
     <Route path="/details/:id" component={Details} />
   </div>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
