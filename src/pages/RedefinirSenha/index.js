import React, { useState } from 'react';
import './index.css';
import { FaLock } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, TextField, Container } from '@mui/material';

function RedefinirSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/redefinir-senha", {
        novaSenha,
        confirmarSenha,
      });
      if (response.status === 200) {
        alert("Senha redefinida com sucesso!");
        navigate('/Login');
      } else {
        alert("Erro ao redefinir senha: " + response.data);
      }
    } catch (error) {
      alert("Erro: preencha os campos corretamente.");
      console.error("Erro ao redefinir a senha:", error);
    }
  };  

  return (
    <Container className='container-base'>
      <div className="redefinir-senha-container">
        <Card className="card-container" style={{ maxWidth: 400, margin: '0 auto', padding: '20px 30px' }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              <FaLock style={{ marginRight: '10px' }} />
              Redefinir senha
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nova senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />
              <TextField
                label="Confirmar senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: '20px', backgroundColor: '#155846', '&:hover' : {opacity: 0.8}}}
              >
                <Typography textTransform="capitalize">
                  Alterar
                </Typography>
                <Typography textTransform="lowercase" ml={0.7}>
                  senha
                </Typography>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

export default RedefinirSenha;