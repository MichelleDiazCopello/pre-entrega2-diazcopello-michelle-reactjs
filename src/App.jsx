import NavBar from './components/nav-bar/navbar';
import ItemListContainer from './components/item-list-container/item-list-container';
import ItemDetailContainer from './components/item-detail-container/item-detail-container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element= {<ItemListContainer/>}/>
          <Route path= '/category/:categoryID' element= {<ItemListContainer/>}/>
          <Route path= '/item/:itemID' element= {<ItemDetailContainer/>}/>
          <Route path= '*' element= {<h1> 404 NOT FOUND </h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
