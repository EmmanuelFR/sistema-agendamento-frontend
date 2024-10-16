// import React from 'react';
// import './MeuPerfil.css';
// import { FaUserCircle, FaCamera } from 'react-icons/fa';

// const MeuPerfil = () => {
//   return (
//     <div className="perfil-container">
//       <div className="perfil-header">
//         <img src="/images/images-removebg-preview.png" alt="Logo" className="perfil-logo" />
//         <h1>Meu Perfil</h1>
//       </div>
//       <div className="perfil-form">
//         <div className="perfil-foto">
//           <FaCamera className="foto-icon" />
//           <FaUserCircle className="perfil-icon" />
//           <button className="carregar-btn">Carregar</button>
//         </div>
//         <input type="text" placeholder="Nome Completo" className="perfil-input" />
//         <input type="email" placeholder="E-mail" className="perfil-input" />
//         <input type="text" placeholder="Telefone" className="perfil-input" />
//         <input type="text" placeholder="RA" className="perfil-input" />
//         <input type="text" placeholder="Curso" className="perfil-input" />
//         <input type="text" placeholder="Período do Curso" className="perfil-input" />
//         <input type="text" placeholder="Cidade" className="perfil-input" />
//         <input type="text" placeholder="Polo" className="perfil-input" />
//         <button className="salvar-btn">Salvar Dados</button>
//       </div>
//     </div>
//   );
// };

// export default MeuPerfil;

import React from 'react';
import './MeuPerfil.css';
import { FaUserCircle, FaCamera } from 'react-icons/fa';

const MeuPerfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img src="/images/images-removebg-preview.png" alt="Logo" className="perfil-logo" />
        <h1>Meu Perfil</h1>
      </div>
      <div className="perfil-form">
        <div className="perfil-foto">
          <FaCamera className="foto-icon" />
          <FaUserCircle className="perfil-icon" />
        </div>
        <input type="text" placeholder="Nome Completo" className="perfil-input" value="Nome Completo" readOnly />
        <input type="email" placeholder="E-mail" className="perfil-input" value="email@exemplo.com" readOnly />
        <input type="text" placeholder="Telefone" className="perfil-input" value="(99) 99999-9999" readOnly />
        <input type="text" placeholder="RA" className="perfil-input" value="123456" readOnly />
        <input type="text" placeholder="Curso" className="perfil-input" value="Engenharia de Software" readOnly />
        <input type="text" placeholder="Período do Curso" className="perfil-input" value="6º Período" readOnly />
        <input type="text" placeholder="Cidade" className="perfil-input" value="Cidade Exemplo" readOnly />
        <input type="text" placeholder="Polo" className="perfil-input" value="Polo Exemplo" readOnly />
        <button className="voltar-btn">Voltar</button>
      </div>
    </div>
  );
};

export default MeuPerfil;