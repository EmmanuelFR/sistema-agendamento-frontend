import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Logout = () => {

  const navigate = useNavigate();

  const handleSim = () => {
    navigate('/Login'); 
  };

  const handleNao = () => {
    navigate('/Menu'); 
  };

  return (
    <Container maxWidth="sm" className="containerBase">

      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Logout
      </Typography>

      <Typography variant="body1" align="center">
        Deseja realmente encerrar sua sessão?
      </Typography>

      <Box display="flex" justifyContent="center" mt={3} gap={2}>
        <Button variant="contained" sx={{ backgroundColor: '#155846', '&:hover' : {opacity: 0.8}}} className="btn-sim" onClick={handleSim}>
          <Typography textTransform="capitalize">
            Sim
          </Typography>
        </Button>
        <Button variant="outlined" sx={{ borderColor: '#1B6E58', color: '#1B6E58', '&:hover' : {opacity: 0.8}}} className="btn-nao" onClick={handleNao}>
          <Typography textTransform="capitalize">
            Não
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default Logout;