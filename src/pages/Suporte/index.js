import React from 'react'; 
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { Container, Typography, Button, Box, Card, CardContent } from '@mui/material';
import './index.css';


const Suporte = () => {

  const handleFaleConosco = () => {
    window.location.href = "https://unifaa.edu.br/contato"; 
  };

  const handleWhatsapp = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=552424530770"; 
  };

  return (
    <Container maxWidth="sm" className="container-base">

      <Typography variant="h4" align="center" gutterBottom>
        Suporte
      </Typography>
      <Typography variant="body1" align="center">
        Precisa de ajuda? Escolha um canal e envie sua mensagem!
      </Typography>

      <Box mt={4} className="support-options">
        <Card className="support-option">
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center"> 
              <AiOutlineMail size={60} />
              <Box> 
                <Typography variant="h6" align="center">Fale conosco</Typography>
                <Button variant="contained" color="primary" onClick={handleFaleConosco} align="center" sx={{ backgroundColor: '#155846', '&:hover' : {opacity: 0.8}}}>
                  <Typography textTransform="capitalize">
                    Enviar
                  </Typography>
                  <Typography textTransform="lowercase" ml={0.7}>
                    mensagem
                  </Typography>
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card className="support-option">
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center"> 
              <AiOutlineWhatsApp size={60} />
              <Box> 
                <Typography variant="h6" align="center">WhatsApp (8h às 17h)</Typography>
                <Box display="flex" justifyContent="center">
                  <Button variant="contained" color="primary" onClick={handleWhatsapp} align="center" sx={{ backgroundColor: '#155846', '&:hover' : {opacity: 0.8}}}>
                  <Typography textTransform="capitalize">
                        Enviar
                    </Typography>
                    <Typography textTransform="lowercase" ml={0.7}>
                        mensagem
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

    </Container>
  );
};

export default Suporte;