
import ProductList from './pages/ProductList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ProductCreate from './pages/ProductCreate';
import Cart from './pages/Cart';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CartProvider from './store/CartProvider';

const App = () => {
 
    return (
    <CartProvider>
        <Router>
                 <NavBar />
            <Switch>
                <Route path='/' exact>
                   <ProductList />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
               
                 <Route path='/products/category/:category' >
                    <ProductList />
                </Route>
              
                <Route path='/products/create' >
                    <ProductCreate />
                </Route>
                   <Route path='/products/:id' >
                     <ProductDetail/>
                </Route>
                   <Route path='/cart' >
                     <Cart/>
                </Route>
            </Switch>
           <Footer />
        </Router>
    </CartProvider>
    )
}
export default App
