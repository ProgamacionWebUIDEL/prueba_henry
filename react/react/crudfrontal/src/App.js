import logo from './logo.svg';
import './App.css';
import Create from './Create';

import Create_alimento from './Create_alimento';
function App() {
  return (
    <div className="main">
    <div>
    <h2>CRUD con REACTJS ---------H23Y</h2>
    
    <h2>MASCOTAS</h2>
      <Create></Create>
    <h2>alimentos</h2>
      <Create_alimento></Create_alimento>
      </div>
    </div>
  );
}

export default App;
