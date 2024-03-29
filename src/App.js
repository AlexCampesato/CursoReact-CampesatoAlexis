
import NavBar from './components/NavBar';
import './App.css';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import AddItemContainer from './components/AddItemContainer';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>

    <div>
      <header>
        
        <NavBar />
      </header>

      <main>
        <div className='desktop-container'>
          <Routes>
            <Route 
              path="/"
              element={<ItemListContainer />}
            />
            <Route
              path="/producto/:ItemId"
              element={ <ItemDetailContainer />}
            />
            <Route
            path='/cart'
            element={<Cart/>}/>
            <Route
            exact
            path="/item/add"
            element={<AddItemContainer />} />  
            <Route
             path="/category/:categoryId"
             element={<ItemListContainer />}
            />
            
    
          </Routes>
         
        </div>
      </main>

    </div>

  </BrowserRouter>
  </CartContextProvider>);
}

export default App;
