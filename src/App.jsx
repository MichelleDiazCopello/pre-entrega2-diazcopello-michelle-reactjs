import NavBar from './components/nav-bar/navbar';
import ItemListContainer from './components/item-list-container/item-list-container';
import ItemCount from './components/item-count/item-count';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount initial = {1} stock = {13} onAdd = {(quantity) => console.log (`Cantidad Agregada`, quantity)}/>
    </div>
  );
}

export default App;
