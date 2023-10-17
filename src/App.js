import SesionIniciada from './components/SesionIniciada';
import './App.css';
import Login from './components/Login';
import Datos from './components/Datos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import MiComponente from './components/Micomponente';
import Compras from './components/Compras';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SesionIniciada/>} />
      <Route path="/sesion-iniciada" element={<Compras />} />
      <Route path="/datos" element={<Datos />} />
    </Routes>
  </Router>
  );
}

export default App;
