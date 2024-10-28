import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './index.css';

function Polo() {
  // Dados das provas (mockados)
  const provas = [
    { id: 1, nome: 'Prova de Matemática', data: '10/11/2024', horario: '08:00', local: 'Sala 101' },
    { id: 2, nome: 'Prova de Português', data: '15/11/2024', horario: '14:00', local: 'Sala 202' },
    // ... adicione mais provas aqui
  ];

  const colunasProvas = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'data', headerName: 'Data', width: 130 },
    { field: 'horario', headerName: 'Horário', width: 100 },
    { field: 'local', headerName: 'Local', width: 150 },
  ];

  // Dados dos agendamentos (mockados)
  const agendamentos = [
    { id: 1, aluno: 'João Silva', prova: 'Prova de Matemática', data: '10/11/2024', horario: '08:00' },
    { id: 2, aluno: 'Maria Oliveira', prova: 'Prova de Português', data: '15/11/2024', horario: '14:00' },
    // ... adicione mais agendamentos aqui
  ];

  const colunasAgendamentos = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'aluno', headerName: 'Aluno', width: 200 },
    { field: 'prova', headerName: 'Prova', width: 200 },
    { field: 'data', headerName: 'Data', width: 130 },
    { field: 'horario', headerName: 'Horário', width: 100 },
  ];

  // Dados dos alunos (mockados)
  const alunos = [
    { id: 1, nome: 'João Silva', ra: '123456', curso: 'Engenharia' },
    { id: 2, nome: 'Maria Oliveira', ra: '789012', curso: 'Direito' },
    // ... adicione mais alunos aqui
  ];

  const colunasAlunos = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'ra', headerName: 'RA', width: 130 },
    { field: 'curso', headerName: 'Curso', width: 150 },
  ];

  return (
    <Container maxWidth="xs" className="polo-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="botoes-container"> {/* Adiciona a classe ao container dos botões */}
          <Button className="botao-menu">Menu</Button> {/* Adiciona a classe ao botão "Menu" */}
          <Button className="botao-sair">Sair</Button> {/* Adiciona a classe ao botão "Sair" */}
      </div>
      <div className="polo-logo"> {/* Adiciona a classe ao container da logo */}
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>

      <Box sx={{ width: '100%', backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar Provas</Typography>
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
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar Agendamentos</Typography>
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
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar Dados dos Alunos</Typography>
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

          {/* Componente para enviar relatórios */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Enviar Relatórios</Typography>
            {/* Implemente a lógica para enviar relatórios aqui */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Polo;