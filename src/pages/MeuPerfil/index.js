// import React from 'react';
// import './MeuPerfil.css';
// import { FaUserCircle, FaCamera } from 'react-icons/fa';

// const MeuPerfil = () => {
//   return (
//     <div className="perfil-container">
//       <div className="perfil-header">
//         <img src="/images/images-removebg-preview.png" alt="Logo" className="perfil-logo" />
//         <h1>Meu Perfil</h1>
//       </div>
//       <div className="perfil-form">
//         <div className="perfil-foto">
//           <FaCamera className="foto-icon" />
//           <FaUserCircle className="perfil-icon" />
//           <button className="carregar-btn">Carregar</button>
//         </div>
//         <input type="text" placeholder="Nome Completo" className="perfil-input" />
//         <input type="email" placeholder="E-mail" className="perfil-input" />
//         <input type="text" placeholder="Telefone" className="perfil-input" />
//         <input type="text" placeholder="RA" className="perfil-input" />
//         <input type="text" placeholder="Curso" className="perfil-input" />
//         <input type="text" placeholder="Período do Curso" className="perfil-input" />
//         <input type="text" placeholder="Cidade" className="perfil-input" />
//         <input type="text" placeholder="Polo" className="perfil-input" />
//         <button className="salvar-btn">Salvar Dados</button>
//       </div>
//     </div>
//   );
// };

// export default MeuPerfil;

// import React, { useState, useEffect } from 'react';
// import './index.css';
// import { FaUserCircle, FaCamera } from 'react-icons/fa';
// import axios from 'axios';

// const MeuPerfil = () => {
//   const [perfil, setPerfil] = useState({}); // Estado para armazenar os dados do perfil

//   // Função para buscar os dados do perfil do usuário
//   useEffect(() => {
//     axios.get('http://localhost:8080/api/perfil') // URL da sua API
//       .then(response => {
//         setPerfil(response.data); // Define os dados do perfil com a resposta da API
//       })
//       .catch(error => {
//         console.error('Erro ao buscar os dados do perfil:', error);
//       });
//   }, []);

//   return (
//     <div className="perfil-container">
//       <div className="perfil-header">
//         <img src="/images/images-removebg-preview.png" alt="Logo" className="perfil-logo" />
//         <h1>Meu Perfil</h1>
//       </div>
//       <div className="perfil-form">
//         <div className="perfil-foto">
//           <FaCamera className="foto-icon" />
//           <FaUserCircle className="perfil-icon" />
//         </div>
//         <input type="text" placeholder="Nome Completo" className="perfil-input" value={perfil.nome || 'Carregando...'} readOnly />
//         <input type="email" placeholder="E-mail" className="perfil-input" value={perfil.email || 'Carregando...'} readOnly />
//         <input type="text" placeholder="Telefone" className="perfil-input" value={perfil.telefone || 'Carregando...'} readOnly />
//         <input type="text" placeholder="RA" className="perfil-input" value={perfil.ra || 'Carregando...'} readOnly />
//         <input type="text" placeholder="Curso" className="perfil-input" value={perfil.curso || 'Carregando...'} readOnly />
//         <input type="text" placeholder="Período do Curso" className="perfil-input" value={perfil.periodo || 'Carregando...'} readOnly />
//         <input type="text" placeholder="Cidade" className="perfil-input" value={perfil.cidade || 'Carregando...'} readOnly />
//         <input type="text" placeholder="Polo" className="perfil-input" value={perfil.polo || 'Carregando...'} readOnly />
//         <button className="voltar-btn">Voltar</button>
//       </div>
//     </div>
//   );
// };

// export default MeuPerfil;

import React, { useState, useEffect } from 'react';
import './index.css';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Avatar, 
  Box 
} from '@mui/material';

const MeuPerfil = () => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/perfil')
      .then(response => {
        setPerfil(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados do perfil:', error);
      });
  }, []);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate('/Menu'); 
  };

  return (
    <Container maxWidth="sm" className="perfil-container"> 
      <Box className="perfil-header" display="flex" flexDirection="column" alignItems="center">
        <img src="/images/images-removebg-preview.png" alt="Logo" className="perfil-logo" />
        <Typography variant="h4" component="h1">
          Meu Perfil
        </Typography>
      </Box>

      <Box className="perfil-form" mt={3}>
        <Avatar className="perfil-icon">
          <FaUserCircle /> 
        </Avatar>
        <TextField 
          label="Nome Completo" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.nome || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField 
          label="E-mail" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.email || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField 
          label="Telefone" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.telefone || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField 
          label="RA" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.ra || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField 
          label="Curso" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.curso || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField 
          label="Período do Curso" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.periodo || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField 
          label="Cidade" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.cidade || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField 
          label="Polo" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={perfil.polo || 'Carregando...'} 
          InputProps={{
            readOnly: true,
          }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          className="voltar-btn"
          fullWidth
          onClick={handleReturn}
        >
          Voltar
        </Button>
      </Box>
    </Container>
  );
};

export default MeuPerfil;