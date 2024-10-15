import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-logo">
      <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      <h1>Login</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">E-mail / RA</label>
          <input type="text" id="email" name="email" placeholder="Digite seu E-mail ou RA" />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
        </div>
        <div className="forgot-password">
          <a href="/esqueci-senha">Esqueceu a senha? <span>Clique Aqui!</span></a>
        </div>
        <div>
        <button type="submit" className="login-btn">Entrar</button>
        </div>
        <div>
        <button type="button" className="jacad-btn">JACAD UniFAA</button>
        </div>
      </form>
    </div>
  );
}

export default Login;   