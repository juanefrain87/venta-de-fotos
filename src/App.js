import SesionIniciada from './components/SesionIniciada';
import './App.css';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sesion-iniciada" element={<SesionIniciada />} />
    </Routes>
  </Router>
  );
}

export default App;
