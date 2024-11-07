import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import RedefinirSenha from './pages/RedefinirSenha';
import Menu from './pages/Menu';
import MeuPerfil from './pages/MeuPerfil';
import Agendamento from './pages/Agendamento';
import Suporte from './pages/Suporte';
import Logout from './pages/Logout';
import Polo from './pages/Polo';
import Administrador from './pages/Administrador';
import ToolbarComponent from './Toolbar';
import './App.css';

function App() {

  const location = useLocation();

  const getLogoutPath = () => {
    const currentPath = location.pathname;
    if (currentPath === '/Administrador' || currentPath === '/Polo') {
      return '/Login';
    } else {
      return '/Logout';
    }
  };

  return (
    <div className="containerBase">
    {/* <ToolbarComponent logoutPath={getLogoutPath()} /> */}
      <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<> <ToolbarComponent logoutPath={getLogoutPath()} /> <Login /> </>} />
        <Route path="/RedefinirSenha" element={<> <ToolbarComponent logoutPath={getLogoutPath()} /> <RedefinirSenha /> </>} />
        <Route path="/Menu" element={<> <ToolbarComponent showLogout showUserName logoutPath={getLogoutPath()} /> <Menu /> </>} />
        <Route path="/MeuPerfil" element={<> <ToolbarComponent showMenu showLogout showUserName logoutPath={getLogoutPath()} /> <MeuPerfil /> </>} />
        <Route path="/Agendamento" element={<> <ToolbarComponent showMenu showLogout showUserName logoutPath={getLogoutPath()} /> <Agendamento /> </>} />
        <Route path="/Suporte" element={<> <ToolbarComponent showMenu showLogout showUserName logoutPath={getLogoutPath()} /> <Suporte /> </>} />
        <Route path="/Logout" element={<> <ToolbarComponent showUserName logoutPath={getLogoutPath()} /> <Logout /> </>} />
        <Route path="/Polo" element={<> <ToolbarComponent showLogout showUserName logoutPath={getLogoutPath()} /> <Polo /> </>} />
        <Route path="/Administrador" element={<> <ToolbarComponent showLogout showUserName logoutPath={getLogoutPath()} /> <Administrador /> </>} />
      </Routes>
    </div>
  );
}

export default App;