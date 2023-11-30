import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/navbar';
import ItemListContainer from './components/item-list-container/item-list-container';
import ItemDetailContainer from './components/item-detail-container/item-detail-container';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
          <NavBar/>
          <Routes>
            <Route path= '/' element= {<ItemListContainer greeting={ 'Todos nuestros productos' }/>}/>
            <Route path= '/category/:categoryID' element= {<ItemListContainer greeting={ 'Productos por Categoría' }/>}/>
            <Route path= '/item/:itemID' element= {<ItemDetailContainer/>}/>
            <Route path= '*' element= {<h1> 404 NOT FOUND </h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
