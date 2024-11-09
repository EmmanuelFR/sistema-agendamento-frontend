import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, MenuItem, Link } from '@mui/material';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from '../../ForgotPassword';


function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("aluno");
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2}}>Login</Typography>
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
          <Link onClick={handleClickOpen} style={{ textDecoration: 'none', color: '#1B6E58' }}>Esqueceu a senha? Clique aqui!</Link>
        </Box>
        <Button type="submit" sx={{ backgroundColor: '#155846', color: 'white', marginBottom: 2,'&:hover' : {opacity: 0.8}}} variant="contained" fullWidth>
          <Typography textTransform="capitalize">
            Entrar
          </Typography>
        </Button>
        <Button variant="contained" sx={{ backgroundColor: '#1B6E58', color: 'white', '&:hover' : {opacity: 0.8}}} fullWidth onClick={handleJacadClick}>
          JACAD UNIFAA
        </Button>
      </Box>

      <ForgotPassword open={open} handleClose={handleClose} />

    </Container>
  );
}

export default Login;