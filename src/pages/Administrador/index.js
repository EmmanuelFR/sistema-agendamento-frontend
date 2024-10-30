// import React, { useState } from 'react';
// import { 
//   Container,
//   TextField, 
//   Button, 
//   Box, 
//   Typography, 
//   FormControl, 
//   InputLabel, 
//   Select, 
//   MenuItem 
// } from '@mui/material';

// function Administrador() {
//   const [modulos, setModulos] = useState([]); // Estado para armazenar os módulos

//   const handleAdicionarModulo = () => {
//     setModulos([...modulos, { 
//       nome: '', 
//       periodoInicio: '', 
//       periodoFim: '', 
//       horarios: [], 
//       diasSemana: [] 
//     }]);
//   };

//   const handleRemoverModulo = (index) => {
//     const novosModulos = [...modulos];
//     novosModulos.splice(index, 1);
//     setModulos(novosModulos);
//   };

//   const handleMudancaModulo = (index, campo, valor) => {
//     const novosModulos = [...modulos];
//     novosModulos[index][campo] = valor;
//     setModulos(novosModulos);
//   };

//   const handleAdicionarHorario = (index) => {
//     const novosModulos = [...modulos];
//     novosModulos[index].horarios.push('');
//     setModulos(novosModulos);
//   };

//   const handleRemoverHorario = (indexModulo, indexHorario) => {
//     const novosModulos = [...modulos];
//     novosModulos[indexModulo].horarios.splice(indexHorario, 1);
//     setModulos(novosModulos);
//   };

//   const handleMudancaHorario = (indexModulo, indexHorario, valor) => {
//     const novosModulos = [...modulos];
//     novosModulos[indexModulo].horarios[indexHorario] = valor;
//     setModulos(novosModulos);
//   };

//   const handleMudancaDiasSemana = (index, valor) => {
//     const novosModulos = [...modulos];
//     novosModulos[index].diasSemana = valor;
//     setModulos(novosModulos);
//   };

//   const handleSubmit = () => {
//     // Lógica para salvar os dados dos módulos no banco de dados
//     console.log(modulos);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Configurar Horários e Datas das Provas
//       </Typography>

//       <Button variant="contained" onClick={handleAdicionarModulo}>
//         Adicionar Módulo
//       </Button>

//       {modulos.map((modulo, index) => (
//         <Box key={index} mt={3} p={2} border={1} borderColor="grey.300">
//           <Typography variant="h6" gutterBottom>
//             Módulo {index + 1}
//           </Typography>

//           <TextField 
//             label="Nome do Módulo" 
//             fullWidth 
//             value={modulo.nome} 
//             onChange={(e) => handleMudancaModulo(index, 'nome', e.target.value)}
//             aria-label={`Nome do módulo ${index + 1}`}
//           />

//           <Box display="flex" mt={2}>
//             <TextField 
//               label="Período Início" 
//               type="date" 
//               value={modulo.periodoInicio} 
//               onChange={(e) => handleMudancaModulo(index, 'periodoInicio', e.target.value)} 
//               InputLabelProps={{ shrink: true }} 
//               sx={{ mr: 2 }} 
//             />

//             <TextField 
//               label="Período Fim" 
//               type="date" 
//               value={modulo.periodoFim} 
//               onChange={(e) => handleMudancaModulo(index, 'periodoFim', e.target.value)} 
//               InputLabelProps={{ shrink: true }} 
//             />
//           </Box>

//           <Typography variant="subtitle1" mt={2}>
//             Horários Disponíveis:
//           </Typography>

//           {modulo.horarios.map((horario, indexHorario) => (
//             <Box key={indexHorario} display="flex" alignItems="center" mt={1}>
//               <TextField 
//                 label="Horário" 
//                 value={horario} 
//                 onChange={(e) => handleMudancaHorario(index, indexHorario, e.target.value)} 
//                 sx={{ mr: 2 }} 
//               />
//               <Button 
//                 variant="outlined" 
//                 color="error" 
//                 onClick={() => handleRemoverHorario(index, indexHorario)}
//               >
//                 Remover
//               </Button>
//             </Box>
//           ))}

//           <Button variant="contained" sx={{ mt: 1 }} onClick={() => handleAdicionarHorario(index)}>
//             Adicionar Horário
//           </Button>

//           <FormControl fullWidth sx={{ mt: 2 }}>
//             <InputLabel>Dias da Semana</InputLabel>
//             <Select
//               multiple
//               value={modulo.diasSemana}
//               onChange={(e) => handleMudancaDiasSemana(index, e.target.value)}
//               renderValue={(selected) => selected.join(', ')}
//             >
//               {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((dia) => (
//                 <MenuItem key={dia} value={dia}>
//                   {dia}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <Button 
//             variant="outlined" 
//             color="error" 
//             onClick={() => handleRemoverModulo(index)} 
//             sx={{ mt: 2 }}
//           >
//             Remover Módulo
//           </Button>
//         </Box>
//       ))}

//       <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3 }}>
//         Salvar
//       </Button>
//     </Container>
//   );
// }

// export default Administrador;

// import React, { useState } from 'react';
// import { 
//   Container,
//   TextField, 
//   Button, 
//   Box, 
//   Typography, 
//   FormControl, 
//   InputLabel, 
//   Select, 
//   MenuItem, 
//   AppBar, 
//   Toolbar,
//   IconButton
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import LogoutIcon from '@mui/icons-material/Logout';

// function Administrador() {
//   const [modulos, setModulos] = useState([]); 

//   const handleAdicionarModulo = () => {
//     setModulos([...modulos, { 
//       nome: '', 
//       periodoInicio: '', 
//       periodoFim: '', 
//       horarios: [], 
//       diasSemana: [] 
//     }]);
//   };

//   const handleRemoverModulo = (index) => {
//     const novosModulos = [...modulos];
//     novosModulos.splice(index, 1);
//     setModulos(novosModulos);
//   };

//   const handleMudancaModulo = (index, campo, valor) => {
//     const novosModulos = [...modulos];
//     novosModulos[index][campo] = valor;
//     setModulos(novosModulos);
//   };

//   const handleAdicionarHorario = (index) => {
//     const novosModulos = [...modulos];
//     novosModulos[index].horarios.push('');
//     setModulos(novosModulos);
//   };

//   const handleRemoverHorario = (indexModulo, indexHorario) => {
//     const novosModulos = [...modulos];
//     novosModulos[indexModulo].horarios.splice(indexHorario, 1);
//     setModulos(novosModulos);
//   };

//   const handleMudancaHorario = (indexModulo, indexHorario, valor) => {
//     const novosModulos = [...modulos];
//     novosModulos[indexModulo].horarios[indexHorario] = valor;
//     setModulos(novosModulos);
//   };

//   const handleMudancaDiasSemana = (index, valor) => {
//     const novosModulos = [...modulos];
//     novosModulos[index].diasSemana = valor;
//     setModulos(novosModulos);
//   };

//   const handleSubmit = () => {
//     console.log(modulos);
//   };

//   return (
//     <Container>
//       {/* AppBar para logo, botão de menu e botão de sair */}
//       <AppBar position="static" color="transparent" elevation={0}>
//   <Toolbar>
//     <IconButton edge="start" color="inherit" aria-label="menu">
//       <MenuIcon />
//     </IconButton>
    
//     <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
//       <img src="/images/images-removebg-preview.png" alt="Logo do Sistema de Agendamento" style={{ height: 50, background: 'none' }} />
//     </Box>
    
//     <IconButton edge="end" color="inherit" aria-label="logout">
//       <LogoutIcon />
//     </IconButton>
//   </Toolbar>
// </AppBar>


//       <Typography variant="h4" gutterBottom align="center" mt={3}>
//         Configurar Horários e Datas das Provas
//       </Typography>

//       <Button variant="contained" onClick={handleAdicionarModulo} sx={{ mt: 3 }}>
//         Adicionar Módulo
//       </Button>

//       {modulos.map((modulo, index) => (
//         <Box key={index} mt={3} p={2} border={1} borderColor="grey.300">
//           <Typography variant="h6" gutterBottom>
//             Módulo {index + 1}
//           </Typography>

//           <TextField 
//             label="Nome do Módulo" 
//             fullWidth 
//             value={modulo.nome} 
//             onChange={(e) => handleMudancaModulo(index, 'nome', e.target.value)} 
//             aria-label={`Nome do módulo ${index + 1}`} 
//           />

//           <Box display="flex" mt={2}>
//             <TextField 
//               label="Período Início" 
//               type="date" 
//               value={modulo.periodoInicio} 
//               onChange={(e) => handleMudancaModulo(index, 'periodoInicio', e.target.value)} 
//               InputLabelProps={{ shrink: true }} 
//               sx={{ mr: 2 }} 
//             />

//             <TextField 
//               label="Período Fim" 
//               type="date" 
//               value={modulo.periodoFim} 
//               onChange={(e) => handleMudancaModulo(index, 'periodoFim', e.target.value)} 
//               InputLabelProps={{ shrink: true }} 
//             />
//           </Box>

//           <Typography variant="subtitle1" mt={2}>
//             Horários Disponíveis:
//           </Typography>

//           {modulo.horarios.map((horario, indexHorario) => (
//             <Box key={indexHorario} display="flex" alignItems="center" mt={1}>
//               <TextField 
//                 label="Horário" 
//                 type="time"
//                 value={horario} 
//                 onChange={(e) => handleMudancaHorario(index, indexHorario, e.target.value)} 
//                 sx={{ mr: 2 }} 
//               />
//               <Button 
//                 variant="outlined" 
//                 color="error" 
//                 onClick={() => handleRemoverHorario(index, indexHorario)}
//               >
//                 Remover
//               </Button>
//             </Box>
//           ))}

//           <Button variant="contained" onClick={() => handleAdicionarHorario(index)} sx={{ mt: 1 }}>
//             Adicionar Horário
//           </Button>

//           <FormControl fullWidth sx={{ mt: 2 }}>
//             <InputLabel>Dias da Semana</InputLabel>
//             <Select
//               multiple
//               value={modulo.diasSemana}
//               onChange={(e) => handleMudancaDiasSemana(index, e.target.value)}
//               renderValue={(selected) => (selected && selected.length > 0 ? selected.join(', ') : "Selecionar dias")}
//             >
//               {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((dia) => (
//                 <MenuItem key={dia} value={dia}>
//                   {dia}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <Button 
//             variant="outlined" 
//             color="error" 
//             onClick={() => handleRemoverModulo(index)} 
//             sx={{ mt: 2 }}
//           >
//             Remover Módulo
//           </Button>
//         </Box>
//       ))}

//       <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3, display: 'none' }}>
//         Salvar
//       </Button>
//     </Container>
//   );
// }

// export default Administrador;

// import React, { useState } from 'react';
// import { 
//     Container,
//     TextField, 
//     Button, 
//     Box, 
//     Typography, 
//     FormControl, 
//     InputLabel, 
//     Select, 
//     MenuItem, 
//     AppBar, 
//     Toolbar,
//     IconButton,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import LogoutIcon from '@mui/icons-material/Logout';

// function Administrador() {
//     const [modulos, setModulos] = useState([]); 
//     const [alunos, setAlunos] = useState([]);
//     const [openAlunoModal, setOpenAlunoModal] = useState(false);

//     const handleAdicionarModulo = () => {
//         setModulos([...modulos, { 
//             nome: '', 
//             periodoInicio: '', 
//             periodoFim: '', 
//             horarios: [], 
//             diasSemana: [] 
//         }]);
//     };

//     const handleRemoverModulo = (index) => {
//         const novosModulos = [...modulos];
//         novosModulos.splice(index, 1);
//         setModulos(novosModulos);
//     };

//     const handleMudancaModulo = (index, campo, valor) => {
//         const novosModulos = [...modulos];
//         novosModulos[index][campo] = valor;
//         setModulos(novosModulos);
//     };

//     const handleAdicionarHorario = (index) => {
//         const novosModulos = [...modulos];
//         novosModulos[index].horarios.push('');
//         setModulos(novosModulos);
//     };

//     const handleRemoverHorario = (indexModulo, indexHorario) => {
//         const novosModulos = [...modulos];
//         novosModulos[indexModulo].horarios.splice(indexHorario, 1);
//         setModulos(novosModulos);
//     };

//     const handleMudancaHorario = (indexModulo, indexHorario, valor) => {
//         const novosModulos = [...modulos];
//         novosModulos[indexModulo].horarios[indexHorario] = valor;
//         setModulos(novosModulos);
//     };

//     const handleMudancaDiasSemana = (index, valor) => {
//         const novosModulos = [...modulos];
//         novosModulos[index].diasSemana = valor;
//         setModulos(novosModulos);
//     };

//     const handleSubmit = () => {
//         console.log(modulos);
//     };

//     // Funções para gerenciar alunos
//     const handleAdicionarAluno = () => {
//         setOpenAlunoModal(true);
//     };

//     const handleFecharAlunoModal = () => {
//         setOpenAlunoModal(false);
//     };

//     const handleSalvarAluno = () => {
//       // 1. Coletar os dados do formulário
//       // 2. Validar os dados (opcional)
//       // 3. Salvar os dados no banco de dados (usando fetch, axios ou similar)
//       // 4. Fechar o modal: setOpenAlunoModal(false);
//     };

//     return (
//         <Container>
//             {/* AppBar para logo, botão de menu e botão de sair */}
//             <AppBar position="static" color="transparent" elevation={0}>
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu">
//                         <MenuIcon />
//                     </IconButton>

//                     <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
//                         <img src="/images/images-removebg-preview.png" alt="Logo do Sistema de Agendamento" style={{ height: 50, background: 'none' }} />
//                     </Box>

//                     <IconButton edge="end" color="inherit" aria-label="logout">
//                         <LogoutIcon />
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>

//             <Typography variant="h4" gutterBottom align="center" mt={3}>
//                 Configurar Horários e Datas das Provas
//             </Typography>

//             <Box display="flex" justifyContent="space-between" mt={3}>
//             <Button variant="contained" onClick={handleAdicionarModulo} sx={{ flexGrow: 0 }}>
//               Adicionar Módulo
//             </Button>
//             <Button variant="contained" onClick={handleAdicionarAluno}> 
//               Adicionar Aluno
//             </Button>
//           </Box>

//             {modulos.map((modulo, index) => (
//                 <Box key={index} mt={3} p={2} border={1} borderColor="grey.300">
//                     {/* ... (código para exibir os módulos) ... */}
//                 </Box>
//             ))}

//             {/* Modal para adicionar aluno */}
//             <Dialog open={openAlunoModal} onClose={handleFecharAlunoModal}>
//                 <DialogTitle>Adicionar Aluno</DialogTitle>
//                 <DialogContent>
//                     {/* Formulário para adicionar aluno */}
//                     <TextField label="RA" fullWidth margin="dense" /> 
//                     <TextField label="Nome" fullWidth margin="dense" /> 
//                     <TextField label="Curso" fullWidth margin="dense" /> 
//                     <TextField label="Disciplinas Cursadas" fullWidth margin="dense" /> 
//                     <TextField label="E-mail" fullWidth margin="dense" /> 
//                     <TextField label="Contato" fullWidth margin="dense" /> 
//                     {/* Outros campos que você julgar pertinentes */}
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleFecharAlunoModal}>Cancelar</Button>
//                     <Button onClick={handleSalvarAluno}>Salvar</Button> 
//                 </DialogActions>
//             </Dialog>

//             <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3, display: 'none' }}>
//                 Salvar
//             </Button>
//         </Container>
//     );
// }

// export default Administrador;

import React, { useState } from 'react';
import { 
    Container, TextField, Button, Box, Typography, AppBar, Toolbar, IconButton, 
    Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

function Administrador() {
    const [modulos, setModulos] = useState([]); 
    const [alunos, setAlunos] = useState([]);
    const [openAlunoModal, setOpenAlunoModal] = useState(false);

    const [novoAluno, setNovoAluno] = useState({
        ra: '', nome: '', curso: '', disciplinas: '', email: '', contato: ''
    });

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

    const handleMudancaHorario = (indexModulo, indexHorario, valor) => {
        const novosModulos = [...modulos];
        novosModulos[indexModulo].horarios[indexHorario] = valor;
        setModulos(novosModulos);
    };

    const handleAdicionarAluno = () => {
        setOpenAlunoModal(true);
    };

    const handleFecharAlunoModal = () => {
        setOpenAlunoModal(false);
        setNovoAluno({ ra: '', nome: '', curso: '', disciplinas: '', email: '', contato: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoAluno(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSalvarAluno = () => {
        setAlunos([...alunos, novoAluno]);
        handleFecharAlunoModal();
    };

    const handleSubmit = () => {
        console.log("Módulos:", modulos);
        console.log("Alunos:", alunos);
    };

    return (
        <Container>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <img src="/images/images-removebg-preview.png" alt="Logo do Sistema de Agendamento" style={{ height: 50 }} />
                    </Box>
                    <IconButton edge="end" color="inherit" aria-label="logout">
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Typography variant="h4" gutterBottom align="center" mt={3}>
                Configurar Horários e Datas das Provas
            </Typography>

            <Box display="flex" justifyContent="space-between" mt={3}>
                <Button variant="contained" onClick={handleAdicionarModulo} sx={{ flexGrow: 0 }}>
                    Adicionar Módulo
                </Button>
                <Button variant="contained" onClick={handleAdicionarAluno}> 
                    Adicionar Aluno
                </Button>
            </Box>

            {modulos.map((modulo, index) => (
                <Box key={index} mt={3} p={2} border={1} borderColor="grey.300">
                    <Typography variant="h6">Módulo {index + 1}</Typography>
                    <TextField 
                        label="Nome do Módulo" 
                        fullWidth 
                        margin="dense" 
                        value={modulo.nome} 
                        onChange={(e) => handleMudancaModulo(index, 'nome', e.target.value)} 
                    />
                    <TextField 
                        label="Período Início" 
                        fullWidth 
                        margin="dense" 
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={modulo.periodoInicio} 
                        onChange={(e) => handleMudancaModulo(index, 'periodoInicio', e.target.value)} 
                    />
                    <TextField 
                        label="Período Fim" 
                        fullWidth 
                        margin="dense" 
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={modulo.periodoFim} 
                        onChange={(e) => handleMudancaModulo(index, 'periodoFim', e.target.value)} 
                    />
                    <Typography variant="subtitle1" mt={2}>Horários</Typography>
                    {modulo.horarios.map((horario, i) => (
                        <TextField 
                            key={i} 
                            label={`Horário ${i + 1}`} 
                            fullWidth 
                            margin="dense" 
                            value={horario} 
                            onChange={(e) => handleMudancaHorario(index, i, e.target.value)} 
                        />
                    ))}
                    <Button variant="outlined" onClick={() => handleAdicionarHorario(index)}>
                        Adicionar Horário
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => handleRemoverModulo(index)} sx={{ mt: 2 }}>
                        Remover Módulo
                    </Button>
                </Box>
            ))}

            <Dialog open={openAlunoModal} onClose={handleFecharAlunoModal}>
                <DialogTitle>Adicionar Aluno</DialogTitle>
                <DialogContent>
                    <TextField label="RA" fullWidth margin="dense" name="ra" value={novoAluno.ra} onChange={handleInputChange} />
                    <TextField label="Nome" fullWidth margin="dense" name="nome" value={novoAluno.nome} onChange={handleInputChange} />
                    <TextField label="Curso" fullWidth margin="dense" name="curso" value={novoAluno.curso} onChange={handleInputChange} />
                    <TextField label="Disciplinas Cursadas" fullWidth margin="dense" name="disciplinas" value={novoAluno.disciplinas} onChange={handleInputChange} />
                    <TextField label="E-mail" fullWidth margin="dense" name="email" value={novoAluno.email} onChange={handleInputChange} />
                    <TextField label="Contato" fullWidth margin="dense" name="contato" value={novoAluno.contato} onChange={handleInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFecharAlunoModal}>Cancelar</Button>
                    <Button onClick={handleSalvarAluno}>Salvar</Button>
                </DialogActions>
            </Dialog>

            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3 }}>
                Salvar
            </Button>
        </Container>
    );
}

export default Administrador;