// import React, { useState } from 'react';
// import './index.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Importa o hook

// function Login() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const navigate = useNavigate(); // Inicializa o hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/login", {
//         email: email,
//         senha: senha,
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log(response.data); 
//       if (response.status === 200) {
//         // Login bem-sucedido, faça a navegação ou ação desejada
//         alert("Login bem-sucedido!");
//         navigate('/Menu'); // Redireciona para a página Menu
//       } else {
//         // Tratar erro de login
//         alert("Erro no login: Credenciais inválidas");
//       }
//     } catch (error) {
//       console.error("Erro no login:", error);
//       alert("Erro ao tentar realizar o login.");
//     }
// };

//   // Função para redirecionar para o link do JACAD UNIFAA
//   const handleJacadClick = () => {
//     window.location.href = "https://faa.jacad.com.br/academico/aluno-v2/login"; // Substitua pelo link correto
//   };

//   return (
//     <div className="login-container">
//       <div className="login-logo">
//         <img src="/images/images-removebg-preview.png" alt="Logo" />
//       </div>
//       <h1>Login</h1>
//       <form className="form-login" onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="email">E-mail / RA</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             placeholder="Digite seu E-mail ou RA"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="senha">Senha</label>
//           <input
//             type="password"
//             id="senha"
//             name="senha"
//             placeholder="Digite sua senha"
//             value={senha}
//             onChange={(e) => setSenha(e.target.value)}
//           />
//         </div>
//         <div className="forgot-password">
//           <a href="/RedefinirSenha">Esqueceu a senha? <span>Clique Aqui!</span></a>
//         </div>
//         <div>
//           <button type="submit" className="login-btn">Entrar</button>
//         </div>
//         <div>
//           {/* Adiciona a função onClick para o botão JACAD */}
//           <button type="button" className="jacad-btn" onClick={handleJacadClick}> 
//             JACAD UNIFAA
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, MenuItem } from '@mui/material'; // Importações corretas do Material-UI
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("aluno");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: email,
        senha: senha,
        tipoUsuario: tipoUsuario
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert("Login bem-sucedido!");
        if (tipoUsuario === "aluno") {
          navigate('/Menu');
        } else if (tipoUsuario === "administrador") {
          navigate('/Administrador');
        } else if (tipoUsuario === "polo") {
          navigate('/Polo');
        }
      } else {
        alert("Erro no login: Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro ao tentar realizar o login.");
    }
  };

  const handleJacadClick = () => {
    window.location.href = "https://faa.jacad.com.br/academico/aluno-v2/login";
  };

  return (
    <Container maxWidth="xs" className="login-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box className="login-logo" sx={{ marginBottom: 2 }}>
        <img src="/images/images-removebg-preview.png" alt="Logo" style={{ width: '150px' }} />
      </Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Login</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2 }}>
        <TextField
          label="E-mail / RA"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {/* Campo para o tipo de usuário */}
        <TextField
          label="Tipo de Usuário"
          variant="outlined"
          fullWidth
          margin="normal"
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
          select
        >
          <MenuItem value="aluno">Aluno</MenuItem>
          <MenuItem value="administrador">Administrador</MenuItem>
          <MenuItem value="polo">Polo</MenuItem>
        </TextField>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <a href="/RedefinirSenha" style={{ textDecoration: 'none', color: '#2C8ED6' }}>Esqueceu a senha? Clique aqui!</a>
        </Box>
        <Button type="submit" sx={{ backgroundColor: '#1F6F5C', color: 'white', marginBottom: 2 }} variant="contained" fullWidth>
          Entrar
        </Button>
        <Button variant="contained" sx={{ backgroundColor: '#007BFF', color: 'white' }} fullWidth onClick={handleJacadClick}>
          JACAD UNIFAA
        </Button>
      </Box>
    </Container>
  );
}

export default Login;