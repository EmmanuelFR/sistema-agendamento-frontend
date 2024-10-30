// import React from 'react';
// import { Container, Typography, Box, Grid, Button } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import './index.css';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import html2canvas from 'html2canvas';

// async function gerarRelatorioPDF() {
//   const doc = new jsPDF();

//   // Adicionar margens
//   const marginLeft = 20;
//   const marginTop = 20;
//   const marginRight = 20;
//   const marginBottom = 20;

//   // Definir fonte
//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(12);

//   // Adicionar logo (substitua pelo caminho da sua logo)
//   const logoImg = new Image();
//   logoImg.src = '/images/images-removebg-preview.png'; 
//   await logoImg.decode(); // Aguardar a imagem carregar
//   doc.addImage(logoImg, 'PNG', marginLeft, marginTop + 10, 50, 50);

//   // Adicionar nome do polo
//   doc.text('Polo EAD UNIFAA - Valença', marginLeft, marginTop);

//   // Capturar conteúdo HTML (ajuste o ID do elemento)
//   const input = document.getElementById('relatorio-content');
//   const canvas = await html2canvas(input);
//   const imgData = canvas.toDataURL('image/png');

//   // Calcular altura da imagem considerando as margens
//   const imgProps = doc.getImageProperties(imgData);
//   const pdfWidth = doc.internal.pageSize.getWidth() - marginLeft - marginRight;
//   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//   // Adicionar a imagem do conteúdo HTML ao PDF com margens
//   doc.addImage(imgData, 'PNG', marginLeft, marginTop + 70, pdfWidth, pdfHeight); // Ajustar posição vertical conforme necessário

//   // Salvar o PDF
//   doc.save("Relatorio.pdf");
// }

// function Polo() {
//   // Dados das provas (mockados)
//   const provas = [
//     { id: 1, nome: 'Disciplina 1 - A2', data: '10/11/2024', horario: '08:00:00', local: 'Sala 101' },
//     { id: 2, nome: 'Disciplina 1 - A3', data: '15/11/2024', horario: '09:00:00', local: 'Sala 202' },
//     { id: 3, nome: 'Disciplina 2 - A2', data: '20/11/2024', horario: '10:00:00', local: 'Sala 101' },
//     { id: 4, nome: 'Disciplina 2 - A3', data: '25/11/2024', horario: '08:00:00', local: 'Sala 202' },
//   ];

//   const colunasProvas = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'nome', headerName: 'Nome', width: 200 },
//     { field: 'data', headerName: 'Data', width: 130 },
//     { field: 'horario', headerName: 'Horário', width: 100 },
//     { field: 'local', headerName: 'Local', width: 150 },
//   ];

//   // Dados dos agendamentos (mockados)
//   const agendamentos = [
//     { id: 1, aluno: 'Weberson Serafim', prova: 'Disciplina 1 - A2', data: '10/11/2024', horario: '08:00:00' },
//     { id: 2, aluno: 'Jorge Dias', prova: 'Disciplina 1 - A3', data: '15/11/2024', horario: '09:00:00' },
//     { id: 3, aluno: 'Rafael Rodrigues', prova: 'Disciplina 2 - A2', data: '20/11/2024', horario: '10:00:00' },
//     { id: 4, aluno: 'Matheus Santos', prova: 'Disciplina 2 - A3', data: '25/11/2024', horario: '08:00:00' },
//   ];

//   const colunasAgendamentos = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'aluno', headerName: 'Aluno', width: 200 },
//     { field: 'prova', headerName: 'Prova', width: 200 },
//     { field: 'data', headerName: 'Data', width: 130 },
//     { field: 'horario', headerName: 'Horário', width: 100 },
//   ];

//   // Dados dos alunos (mockados)
//   const alunos = [
//     { id: 1, nome: 'Weberson Serafim', ra: 'E24680', curso: 'Engenharia de Software' },
//     { id: 2, nome: 'Jorge Dias', ra: 'E13579', curso: 'Direito' },
//     { id: 3, nome: 'Rafael Rodrigues', ra: 'E08642', curso: 'Análise e Desenvolvimento de Sistemas' },
//     { id: 4, nome: 'Matheus Santos', ra: 'E97531', curso: 'Enfermagem' },
//   ];

//   const colunasAlunos = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'nome', headerName: 'Nome', width: 200 },
//     { field: 'ra', headerName: 'RA', width: 130 },
//     { field: 'curso', headerName: 'Curso', width: 150 },
//   ];

//   return (
//     <Container maxWidth="xs" className="polo-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//       <div className="botoes-container"> {/* Adiciona a classe ao container dos botões */}
//           <Button className="botao-menu">Menu</Button> {/* Adiciona a classe ao botão "Menu" */}
//           <Button className="botao-sair">Sair</Button> {/* Adiciona a classe ao botão "Sair" */}
//       </div>
//       <div className="polo-logo"> {/* Adiciona a classe ao container da logo */}
//         <img src="/images/images-removebg-preview.png" alt="Logo" />
//       </div>
//       <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//         Painel do Polo
//       </Typography>

//       <Box sx={{ width: '100%', backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar Provas</Typography>
//             <div style={{ height: 200, width: '100%' }}>
//               <DataGrid
//                 rows={provas}
//                 columns={colunasProvas}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//                 checkboxSelection
//               />
//             </div>
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar Agendamentos</Typography>
//             <div style={{ height: 200, width: '100%' }}>
//               <DataGrid
//                 rows={agendamentos}
//                 columns={colunasAgendamentos}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//                 checkboxSelection
//               />
//             </div>
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Visualizar Dados dos Alunos</Typography>
//             <div style={{ height: 200, width: '100%' }}>
//               <DataGrid
//                 rows={alunos}
//                 columns={colunasAlunos}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//                 checkboxSelection
//               />
//             </div>
//           </Grid>

//           {/* Componente para enviar relatórios */}
//           <Grid item xs={12}>
//           </Grid>
//         </Grid>

//         {/* Conteúdo do relatório */}
//         <div id="relatorio-content" style={{ display: 'block' }}>
//           <h2>Relatório do Polo</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Aluno</th>
//                 <th>Prova</th>
//                 <th>Data</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Weberson Serafim</td>
//                 <td>Disciplina 1 - A2</td>
//                 <td>10/11/2024</td>
//               </tr>
//               <tr>
//                 <td>Jorge Dias</td>
//                 <td>Disciplina 1 - A3</td>
//                 <td>15/11/2024</td>
//               </tr>
//               <tr>
//                 <td>Rafael Rodrigues</td>
//                 <td>Disciplina 2 - A2</td>
//                 <td>20/11/2024</td>
//               </tr>
//               <tr>
//                 <td>Matheus Santos</td>
//                 <td>Disciplina 2 - A3</td>
//                 <td>25/11/2024</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <Button className="botao-relatorio" onClick={gerarRelatorioPDF}>
//             Enviar Relatório
//         </Button>

//       </Box>
//     </Container>
//   );
// }

// export default Polo;

import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './index.css';
import gerarRelatorioPDF from '../../utils/gerarRelatorioPDF';
function Polo() {
  // Dados das provas (mockados) - Substitua pelos seus dados reais
  const provas = [
    { id: 1, nome: 'Disciplina 1 - A2', data: '10/11/2024', horario: '08:00:00', local: 'Sala 101' },
    { id: 2, nome: 'Disciplina 1 - A3', data: '15/11/2024', horario: '09:00:00', local: 'Sala 202' },
    { id: 3, nome: 'Disciplina 2 - A2', data: '20/11/2024', horario: '10:00:00', local: 'Sala 101' },
    { id: 4, nome: 'Disciplina 2 - A3', data: '25/11/2024', horario: '08:00:00', local: 'Sala 202' },
  ];

  const colunasProvas = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'data', headerName: 'Data', width: 130 },
    { field: 'horario', headerName: 'Horário', width: 100 },
    { field: 'local', headerName: 'Local', width: 150 },
  ];

  // Dados dos agendamentos (mockados) - Substitua pelos seus dados reais
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

  // Dados dos alunos (mockados) - Substitua pelos seus dados reais
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
    <Container maxWidth="xs" className="polo-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="botoes-container"> 
        <Button className="botao-menu">Menu</Button> 
        <Button className="botao-sair">Sair</Button> 
      </div>
      <div className="polo-logo"> 
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Painel do Polo
      </Typography>

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

          {/* Botão para gerar o relatório */}
          <Grid item xs={12}>
            <Button 
              className="botao-relatorio" 
              onClick={gerarRelatorioPDF} 
            >
              Gerar Relatório
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Polo;