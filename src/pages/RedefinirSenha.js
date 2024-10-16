import React from 'react';
import './RedefinirSenha.css';
import { FaLock } from 'react-icons/fa';

function RedefinirSenha() {
  return (
    <div className="redefinir-senha-container">
      <div className="login-logo">
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      <h2 className="redefinir-titulo">
      <FaLock />
        Redefinir Senha
      </h2>

      <form>
        <div className="input-container">
          <label htmlFor="senhaAtual">Senha atual</label>
          <input type="password" id="senhaAtual" placeholder="Senha atual" />
        </div>

        <div className="input-container">
          <label htmlFor="novaSenha">Nova Senha</label>
          <input type="password" id="novaSenha" placeholder="Nova senha" />
        </div>

        <button type="submit" className="btn-alterar-senha">Alterar Senha</button>
      </form>
    </div>
  );
}

export default RedefinirSenha;