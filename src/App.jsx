import NavBar from './components/nav-bar/navbar';
import ItemListContainer from './components/item-list-container/item-list-container';
import ItemCount from './components/item-count/item-count';
import ItemDetailContainer from './components/item-detail-container/item-detail-container';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount initial = {1} stock = {13} onAdd = {(quantity) => console.log (`Cantidad Agregada`, quantity)}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
