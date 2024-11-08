import React from 'react'; 
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import { Container, Typography, Button, Box, IconButton, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './index.css';


const Suporte = () => {

  const navigate = useNavigate();

  const handleFaleConosco = () => {
    window.location.href = "https://unifaa.edu.br/contato"; 
  };

  const handleWhatsapp = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=552424530770"; 
  };

  const handleVoltar = () => {
    navigate('/Menu'); 
  };

const handleLogout = () => {
    navigate('/Logout'); 
  };

  return (
    <Container maxWidth="sm" className="container-base">

      <Typography variant="h4" align="center" gutterBottom>
        Suporte
      </Typography>
      <Typography variant="body1" align="center">
        Precisa de ajuda? Escolha um canal e envie sua mensagem!
      </Typography>

      {/* <Box mt={4} className="support-options">
        <Card className="support-option">
          <CardContent>
            <Box display="flex" alignItems="center">
              <AiOutlineMail size={70} />
              <Box ml={2}>
                <Typography variant="h6" align="center">Fale Conosco</Typography>
                <Button variant="contained" color="primary" onClick={handleFaleConosco} align="center">
                  Enviar Mensagem
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card className="support-option">
          <CardContent>
            <Box display="flex" alignItems="center">
              <AiOutlineWhatsApp size={70} />
              <Box ml={2}>
                <Typography variant="h6" align="center">Whatsapp (08:00 às 17:00)</Typography>
                <Button variant="contained" color="primary" onClick={handleWhatsapp} align="center">
                  Enviar Mensagem
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box> */}

      <Box mt={4} className="support-options">
        <Card className="support-option">
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center"> 
              <AiOutlineMail size={60} />
              <Box> 
                <Typography variant="h6" align="center">Fale Conosco</Typography>
                <Button variant="contained" color="primary" onClick={handleFaleConosco} align="center">
                  Enviar Mensagem
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
                <Typography variant="h6" align="center">WhatsApp (08:00 às 17:00)</Typography>
                <Box display="flex" justifyContent="center">
                  <Button variant="contained" color="primary" onClick={handleWhatsapp} align="center">
                    Enviar Mensagem
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