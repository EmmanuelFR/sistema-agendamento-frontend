import React from 'react';
import { FaUser, FaCalendarAlt, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import { Button, Card, Typography } from '@mui/material';

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <div className="containerBase">
      <Typography variant="h4" className="menu-title">
        Menu
      </Typography>
      
      <div align="center">
        <Card className="menu-card">
          <ul className="menu-items">
            <li>
              <FaUser className="menu-icon-home" />
              <Link to="/MeuPerfil" className="menu-link">Meu Perfil</Link>
            </li>
            <li>
              <FaCalendarAlt className="menu-icon-home" />
              <Link to="/Agendamento" className="menu-link">Agendamento de Avaliações</Link>
            </li>
            <li>
              <FaHeadset className="menu-icon-home" />
              <Link to="/Suporte" className="menu-link">Suporte</Link>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default Menu;