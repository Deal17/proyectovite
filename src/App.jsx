import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambiamos a Routes
import Navbar from './components/NavBar/navbar';
import ListProducts from './components/ItemListContainer/ItemListContainer';

import './App.css';

function App() {
  const greetingMessage = "Hola desde la ruta de productos"; // Define el mensaje de saludo

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<ListProducts greeting={greetingMessage} />} />
        {/* <Route path="/nombreruta" element={<componente />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
