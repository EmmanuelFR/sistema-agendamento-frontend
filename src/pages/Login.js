import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';

// function Login() {
//   return (
//     <div className="login-container">
//       <div className="login-logo">
//       <img src="/images/images-removebg-preview.png" alt="Logo" />
//       </div>
//       <h1>Login</h1>
//       <form className="form-login">
//         <div className="input-group">
//           <label htmlFor="email">E-mail / RA</label>
//           <input type="text" id="email" name="email" placeholder="Digite seu E-mail ou RA" />
//         </div>
//         <div className="input-group">
//           <label htmlFor="senha">Senha</label>
//           <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
//         </div>
//         <div className="forgot-password">
//           <a href="/esqueci-senha">Esqueceu a senha? <span>Clique Aqui!</span></a>
//         </div>
//         <div>
//         <button type="submit" className="login-btn">Entrar</button>
//         </div>
//         <div>
//         <button type="button" className="jacad-btn">JACAD UniFAA</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        senha,
      });
      console.log(response.data); // Ação após o login
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      <h1>Login</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-mail / RA</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu E-mail ou RA"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="forgot-password">
          <a href="/RedefinirSenha">Esqueceu a senha? <span>Clique Aqui!</span></a>
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