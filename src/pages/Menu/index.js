// import React from 'react';
// import { FaUser, FaCalendarAlt, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import './Menu.css'; // Importa o arquivo CSS

// function Menu() {
//   return (
//     <div className="menu-container">
//       <div className="menu-logo">
//         <img src="/images/images-removebg-preview.png" alt="Logo" />
//       </div>
//       <ul className="menu-items">
//         <li>
//           <FaUser className="menu-icon" />
//           <Link to="/perfil">Meu Perfil</Link>
//         </li>
//         <li>
//           <FaCalendarAlt className="menu-icon" />
//           <Link to="/agendamento">Agendamento de Avaliações</Link>
//         </li>
//         <li>
//           <FaCalendarAlt className="menu-icon" />
//           <Link to="/reagendamento">Reagendamento de Avaliações</Link>
//         </li>
//         <li>
//           <FaHeadset className="menu-icon" />
//           <Link to="/suporte">Suporte</Link>
//         </li>
//       </ul>
//       <div className="menu-logout">
//         <FaSignOutAlt className="menu-logout-icon" />
//         <Link to="/logout">Sair</Link>
//       </div>
//     </div>
//   );
// }

// export default Menu;

// import React from 'react';
// import { FaSignOutAlt } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import './Menu.css'; // Importa o arquivo CSS
// import axios from 'axios';

// function Menu() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Ação de logout (simulado)
//     navigate('/logout');  // Redireciona para a página de logout
//   };

//   return (
//     <div className="menu-container">
//       <div className="menu-logo">
//         <img src="/images/images-removebg-preview.png" alt="Logo" />
//       </div>
//       <ul className="menu-items">
//         <li>
//           <Link to="/MeuPerfil" className="menu-link">Meu Perfil</Link>
//         </li>
//         <li>
//           <Link to="/Agendamento" className="menu-link">Agendamento de Avaliações</Link>
//         </li>
//         <li>
//           <Link to="/Reagendamento" className="menu-link">Reagendamento de Avaliações</Link>
//         </li>
//         <li>
//           <Link to="/Suporte" className="menu-link">Suporte</Link>
//         </li>
//       </ul>
//       <div className="menu-logout" onClick={handleLogout}>
//         <FaSignOutAlt className="menu-logout-icon" />
//         <span className="menu-link">Sair</span>
//       </div>
//     </div>
//   );
// }

// export default Menu;

// import React from 'react';
// import { FaUser, FaCalendarAlt, FaCalendarCheck, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import './Menu.css'; // Importa o arquivo CSS
// import axios from 'axios';

// function Menu() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Ação de logout (simulado)
//     navigate('/logout');  // Redireciona para a página de logout
//   };

//   return (
//     <div className="menu-container">
//       <div className="menu-logo">
//         <img src="/images/images-removebg-preview.png" alt="Logo" />
//       </div>
//       <ul className="menu-items">
//         <li>
//           <FaUser className="menu-icon" />
//           <Link to="/MeuPerfil" className="menu-link">Meu Perfil</Link>
//         </li>
//         <li>
//           <FaCalendarAlt className="menu-icon" />
//           <Link to="/Agendamento" className="menu-link">Agendamento de Avaliações</Link>
//         </li>
//         <li>
//           <FaCalendarCheck className="menu-icon" />
//           <Link to="/Reagendamento" className="menu-link">Reagendamento de Avaliações</Link>
//         </li>
//         <li>
//           <FaHeadset className="menu-icon" />
//           <Link to="/Suporte" className="menu-link">Suporte</Link>
//         </li>
//       </ul>
//       <div className="menu-logout" onClick={handleLogout}>
//         <FaSignOutAlt className="menu-logout-icon" />
//         <span className="menu-link">Sair</span>
//       </div>
//     </div>
//   );
// }

// export default Menu;

// import React from 'react';
// import { FaUser, FaCalendarAlt, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { Card, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
// import './index.css'; // Importa o arquivo CSS

// function Menu() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Ação de logout (simulado)
//     navigate('/logout');  // Redireciona para a página de logout
//   };

//   return (
//     <div className="menu-container">
//       <Card className="menu-card" variant="outlined">
//         <div className="menu-logo">
//           <img src="/images/images-removebg-preview.png" alt="Logo" />
//         </div>
//         <List>
//           <ListItem button component={Link} to="/MeuPerfil">
//             <ListItemIcon><FaUser className="menu-icon-home" /></ListItemIcon>
//             <ListItemText primary="Meu Perfil" />
//           </ListItem>
//           <ListItem button component={Link} to="/Agendamento">
//             <ListItemIcon><FaCalendarAlt className="menu-icon-home" /></ListItemIcon>
//             <ListItemText primary="Agendamento de Avaliações" />
//           </ListItem>
//           <ListItem button component={Link} to="/Reagendamento">
//             <ListItemIcon><FaCalendarAlt className="menu-icon-home" /></ListItemIcon>
//             <ListItemText primary="Reagendamento de Avaliações" />
//           </ListItem>
//           <ListItem button component={Link} to="/Suporte">
//             <ListItemIcon><FaHeadset className="menu-icon-home" /></ListItemIcon>
//             <ListItemText primary="Suporte" />
//           </ListItem>
//         </List>
//       </Card>
//       <IconButton className="menu-logout" onClick={handleLogout} color="primary">
//         <FaSignOutAlt />
//         <span className="menu-link">Sair</span>
//       </IconButton>
//     </div>
//   );
// }

// export default Menu;

import React from 'react';
import { FaUser, FaCalendarAlt, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'; // Importa o arquivo CSS
import { Button, Card, Typography } from '@mui/material'; // Importando componentes do Material-UI

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ação de logout (simulado)
    navigate('/logout');  // Redireciona para a página de logout
  };

  return (
    <div className="menu-container">
      <Button className="menu-sair" sx={{ position: 'fixed', top: '20px', right: '20px'
  }} onClick={handleLogout}>
        <FaSignOutAlt className="menu-logout-icon" />
        Sair
      </Button>
      <div className="menu-logo">
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      <Typography variant="h4" className="menu-title">
        Menu
      </Typography>
      
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
          {/* <li>
            <FaCalendarAlt className="menu-icon-home" />
            <Link to="/Reagendamento" className="menu-link">Reagendamento de Avaliações</Link>
          </li> */}
          <li>
            <FaHeadset className="menu-icon-home" />
            <Link to="/Suporte" className="menu-link">Suporte</Link>
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default Menu;