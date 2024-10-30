import React, { useState } from 'react';
import { 
  Container,
  TextField, 
  Button, 
  Box, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem 
} from '@mui/material';

function Administrador() {
  const [modulos, setModulos] = useState([]); // Estado para armazenar os módulos

  const handleAdicionarModulo = () => {
    setModulos([...modulos, { 
      nome: '', 
      periodoInicio: '', 
      periodoFim: '', 
      horarios: [], 
      diasSemana: [] 
    }]);
  };

  const handleRemoverModulo = (index) => {
    const novosModulos = [...modulos];
    novosModulos.splice(index, 1);
    setModulos(novosModulos);
  };

  const handleMudancaModulo = (index, campo, valor) => {
    const novosModulos = [...modulos];
    novosModulos[index][campo] = valor;
    setModulos(novosModulos);
  };

  const handleAdicionarHorario = (index) => {
    const novosModulos = [...modulos];
    novosModulos[index].horarios.push('');
    setModulos(novosModulos);
  };

  const handleRemoverHorario = (indexModulo, indexHorario) => {
    const novosModulos = [...modulos];
    novosModulos[indexModulo].horarios.splice(indexHorario, 1);
    setModulos(novosModulos);
  };

  const handleMudancaHorario = (indexModulo, indexHorario, valor) => {
    const novosModulos = [...modulos];
    novosModulos[indexModulo].horarios[indexHorario] = valor;
    setModulos(novosModulos);
  };

  const handleMudancaDiasSemana = (index, valor) => {
    const novosModulos = [...modulos];
    novosModulos[index].diasSemana = valor;
    setModulos(novosModulos);
  };

  const handleSubmit = () => {
    // Lógica para salvar os dados dos módulos no banco de dados
    console.log(modulos);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Configurar Horários e Datas das Provas
      </Typography>

      <Button variant="contained" onClick={handleAdicionarModulo}>
        Adicionar Módulo
      </Button>

      {modulos.map((modulo, index) => (
        <Box key={index} mt={3} p={2} border={1} borderColor="grey.300">
          <Typography variant="h6" gutterBottom>
            Módulo {index + 1}
          </Typography>

          <TextField 
            label="Nome do Módulo" 
            fullWidth 
            value={modulo.nome} 
            onChange={(e) => handleMudancaModulo(index, 'nome', e.target.value)} 
          />

          <Box display="flex" mt={2}>
            <TextField 
              label="Período Início" 
              type="date" 
              value={modulo.periodoInicio} 
              onChange={(e) => handleMudancaModulo(index, 'periodoInicio', e.target.value)} 
              InputLabelProps={{ shrink: true }} 
              sx={{ mr: 2 }} 
            />

            <TextField 
              label="Período Fim" 
              type="date" 
              value={modulo.periodoFim} 
              onChange={(e) => handleMudancaModulo(index, 'periodoFim', e.target.value)} 
              InputLabelProps={{ shrink: true }} 
            />
          </Box>

          <Typography variant="subtitle1" mt={2}>
            Horários Disponíveis:
          </Typography>

          {modulo.horarios.map((horario, indexHorario) => (
            <Box key={indexHorario} display="flex" alignItems="center" mt={1}>
              <TextField 
                label="Horário" 
                value={horario} 
                onChange={(e) => handleMudancaHorario(index, indexHorario, e.target.value)} 
                sx={{ mr: 2 }} 
              />
              <Button 
                variant="outlined" 
                color="error" 
                onClick={() => handleRemoverHorario(index, indexHorario)}
              >
                Remover
              </Button>
            </Box>
          ))}

          <Button variant="contained" mt={1} onClick={() => handleAdicionarHorario(index)}>
            Adicionar Horário
          </Button>

          <FormControl fullWidth mt={2}>
            <InputLabel>Dias da Semana</InputLabel>
            <Select
              multiple
              value={modulo.diasSemana}
              onChange={(e) => handleMudancaDiasSemana(index, e.target.value)}
              renderValue={(selected) => selected.join(', ')}
            >
              {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((dia) => (
                <MenuItem key={dia} value={dia}>
                  {dia}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button 
            variant="outlined" 
            color="error" 
            onClick={() => handleRemoverModulo(index)} 
            sx={{ mt: 2 }}
          >
            Remover Módulo
          </Button>
        </Box>
      ))}

      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3 }}>
        Salvar
      </Button>
    </Container>
  );
}

export default Administrador;