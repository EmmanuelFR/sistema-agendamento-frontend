import React, { useState } from 'react';
import './index.css';
import { FaLock } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function RedefinirSenha() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Enviando senha atual: ", senhaAtual);  // Adiciona log
      console.log("Enviando nova senha: ", novaSenha);    // Adiciona log
  
      const response = await axios.post("http://localhost:8080/api/redefinir-senha", {
        senhaAtual,
        novaSenha,
      });
      
      if (response.status === 200) {
        alert("Senha redefinida com sucesso!");
        navigate('/Login');
      } else {
        alert("Erro ao redefinir senha: " + response.data);
      }
    } catch (error) {
      alert("Erro ao redefinir senha: Verifique sua senha atual.");
      console.error("Erro ao redefinir a senha:", error);
    }
  };  

  return (
    <div className="redefinir-senha-container">
      <div className="login-logo">
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      

      <div className="teste">
      <h2 className="redefinir-titulo">
        <FaLock />
        Redefinir Senha
      </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="senhaAtual">Senha atual</label>
            <input
              type="password"
              id="senhaAtual"
              placeholder="Senha atual"
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="novaSenha">Nova Senha</label>
            <input
              type="password"
              id="novaSenha"
              placeholder="Nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-alterar-senha">Alterar Senha</button>
        </form>
      </div>
    </div>
  );
}

export default RedefinirSenha;