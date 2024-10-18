import React from 'react';
import './index.css';

const Logout = () => {
  return (
    <div className="logout-page-container">
      <header className="logout-header">
        <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
      </header>

      <div className="logout-content">
       
        <h2>LOGOUT</h2>
        <p>Deseja realmente encerrar sua sessão?</p>

        <div className="buttons">
          <button className="btn-sim">Sim</button>
          <button className="btn-nao">Não</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;