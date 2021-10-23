
import ProductList from './pages/ProductList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ProductCreate from './pages/ProductCreate';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
const App = () => {
   const [isAdmin,setIsAdmin]=useState(false)
    return (
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
              
                <Route path='/products/create' exact>
                    <ProductCreate />
                </Route>
                   <Route path='/products/:id' exact>
                     <ProductDetail/>
                </Route>
            </Switch>
           <Footer />
        </Router>
    )
}
export default App
