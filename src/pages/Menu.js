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

import React from 'react';
import { FaUser, FaCalendarAlt, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Menu.css'; // Importa o arquivo CSS

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-logo">
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      <ul className="menu-items">
        <li>
          <FaUser className="menu-icon" />
          <Link to="/perfil" className="menu-link">Meu Perfil</Link>
        </li>
        <li>
          <FaCalendarAlt className="menu-icon" />
          <Link to="/agendamento" className="menu-link">Agendamento de Avaliações</Link>
        </li>
        <li>
          <FaCalendarAlt className="menu-icon" />
          <Link to="/reagendamento" className="menu-link">Reagendamento de Avaliações</Link>
        </li>
        <li>
          <FaHeadset className="menu-icon" />
          <Link to="/suporte" className="menu-link">Suporte</Link>
        </li>
      </ul>
      <div className="menu-logout">
        <FaSignOutAlt className="menu-logout-icon" />
        <Link to="/logout" className="menu-link">Sair</Link>
      </div>
    </div>
  );
}

export default Menu;