import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './index.css';
import gerarRelatorioPDF from '../../utils/gerarRelatorioPDF';

function Polo() {

  const provas = [
    { id: 1, nome: 'Disciplina 1 - A2', data: '10/11/2024', horario: '08:00:00', chaveDaProva: '01' },
    { id: 2, nome: 'Disciplina 1 - A3', data: '15/11/2024', horario: '09:00:00', chaveDaProva: '02' },
    { id: 3, nome: 'Disciplina 2 - A2', data: '20/11/2024', horario: '10:00:00', chaveDaProva: '03' },
    { id: 4, nome: 'Disciplina 2 - A3', data: '25/11/2024', horario: '08:00:00', chaveDaProva: '04' },
  ];

  const colunasProvas = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'data', headerName: 'Data', width: 130 },
    { field: 'horario', headerName: 'Horário', width: 100 },
    { field: 'chaveDaProva', headerName: 'Chave da prova', width: 150 },
  ];

  const agendamentos = [
    { id: 1, aluno: 'Weberson Serafim', prova: 'Disciplina 1 - A2', data: '10/11/2024', horario: '08:00:00' },
    { id: 2, aluno: 'Jorge Dias', prova: 'Disciplina 1 - A3', data: '15/11/2024', horario: '09:00:00' },
    { id: 3, aluno: 'Rafael Rodrigues', prova: 'Disciplina 2 - A2', data: '20/11/2024', horario: '10:00:00' },
    { id: 4, aluno: 'Matheus Santos', prova: 'Disciplina 2 - A3', data: '25/11/2024', horario: '08:00:00' },
  ];

  const colunasAgendamentos = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'aluno', headerName: 'Aluno', width: 200 },
    { field: 'prova', headerName: 'Prova', width: 200 },
    { field: 'data', headerName: 'Data', width: 130 },
    { field: 'horario', headerName: 'Horário', width: 100 },
  ];

  const alunos = [
    { id: 1, nome: 'Weberson Serafim', ra: 'E24680', curso: 'Engenharia de Software' },
    { id: 2, nome: 'Jorge Dias', ra: 'E13579', curso: 'Direito' },
    { id: 3, nome: 'Rafael Rodrigues', ra: 'E08642', curso: 'Análise e Desenvolvimento de Sistemas' },
    { id: 4, nome: 'Matheus Santos', ra: 'E97531', curso: 'Enfermagem' },
  ];

  const colunasAlunos = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'ra', headerName: 'RA', width: 130 },
    { field: 'curso', headerName: 'Curso', width: 150 },
  ];

  return (
    <Container maxWidth="xs" className="polo-container" >
      <br/>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Painel do polo
      </Typography>

      <Box sx={{ width: '100%', backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar provas</Typography>
            <div style={{ height: 200, width: '100%' }}>
              <DataGrid
                rows={provas}
                columns={colunasProvas}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar agendamentos</Typography>
            <div style={{ height: 200, width: '100%' }}>
              <DataGrid
                rows={agendamentos}
                columns={colunasAgendamentos}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar dados dos alunos</Typography>
            <div style={{ height: 200, width: '100%' }}>
              <DataGrid
                rows={alunos}
                columns={colunasAlunos}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <Button 
              className="botao-relatorio" 
              onClick={gerarRelatorioPDF}
              sx={{ ml: 2, color: '#1B6E58', '&:hover' : {opacity: 0.8}}} 
            >
              <Typography textTransform="capitalize">
                Gerar
              </Typography>
              <Typography textTransform="lowercase" ml={0.7}>
                relatório
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Polo;