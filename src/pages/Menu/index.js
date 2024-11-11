import React from 'react';
import { FaUser, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.css';
import { Card, Typography } from '@mui/material';

function Menu() {

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
              <Link to="/MeuPerfil" className="menu-link">Meu perfil</Link>
            </li>
            <li>
              <FaCalendarAlt className="menu-icon-home" />
              <Link to="/Agendamento" className="menu-link">Agendamento de avaliações</Link>
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