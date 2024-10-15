import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import RedefinirSenha from './pages/RedefinirSenha';
import Menu from './pages/Menu';
import MeuPerfil from './pages/MeuPerfil';
import Agendamento from './pages/Agendamento';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Agendamento" element={<Agendamento />} />
        <Route path="/RedefinirSenha" element={<RedefinirSenha />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/MeuPerfil" element={<MeuPerfil />} />
      </Routes>
    </Router>
  );
}

export default App;