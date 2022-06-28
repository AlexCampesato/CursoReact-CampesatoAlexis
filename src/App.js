
import NavBar from './components/NavBar';
import './App.css';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CartContextProvider from './context/CartContext';

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
          </Routes>
        </div>
      </main>

    </div>

  </BrowserRouter>
  </CartContextProvider>);
}

export default App;
