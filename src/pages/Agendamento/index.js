// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './Agendamento.css'; // Adicione o arquivo de CSS

// const Agendamento = () => {
//   const [data, setData] = useState(new Date());

//   const handleDateChange = (date) => {
//     setData(date);
//   };

//   return (
//     <div className="agendamento-container">
//       <header>
//         <img src="/images/images-removebg-preview.png" alt="Logo" className="logo" />
//         <h1>Agendamento de Avaliações</h1>
//       </header>
//       <p>Marque a data e o horário da sua avaliação abaixo:</p>

//       <div className="agendamento-form">
//         <label>Disciplina:</label>
//         <select>
//           <option value="disciplina1">Disciplina 1</option>
//           <option value="disciplina2">Disciplina 2</option>
//         </select>

//         <div className="calendar-container">
//           <label>Selecione a Data:</label>
//           <Calendar onChange={handleDateChange} value={data} />
//         </div>

//         <div className="data-hora">
//           <label>Horário da Aplicação:</label>
//           <button>08:00 às 09:20</button>
//         </div>

//         <div className="buttons">
//           <button className="salvar">Salvar</button>
//           <button className="reagendar">Reagendar</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Agendamento;

// import React, { useState } from "react";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './Agendamento.css';

// const Agendamento = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [selectedTime, setSelectedTime] = useState("08:00");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Combina data e hora em um único campo Date
//         const [hours, minutes] = selectedTime.split(":");
//         const agendamentoDate = new Date(selectedDate);
//         agendamentoDate.setHours(hours, minutes);

//         // Enviar 'agendamentoDate' para a API
//         console.log("Data e Hora do Agendamento: ", agendamentoDate);
//         // Adicionar código para envio à API
//     };

//     return (
//         <div className="agendamento-container">
//             <h2>Agendamento de Avaliações</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Disciplina:</label>
//                 <select>
//                     <option>Disciplina 1</option>
//                     <option>Disciplina 2</option>
//                 </select>

//                 <label>Selecione a Data:</label>
//                 <Calendar onChange={setSelectedDate} value={selectedDate} />

//                 <label>Horário da Aplicação:</label>
//                 <input 
//                     type="time" 
//                     value={selectedTime} 
//                     onChange={(e) => setSelectedTime(e.target.value)} 
//                 />

//                 <button type="submit">Salvar</button>
//                 <button type="button">Reagendar</button>
//             </form>
//         </div>
//     );
// };

// export default Agendamento;

// import React from 'react';
// import './Agendamento.css'; // Arquivo CSS

// const Agendamento = () => {
//   return (
//     <div className="agendamento-container">
//       <header>
//         <img src="/path/to/logo.png" alt="Logo" className="logo" />
//         <h1>Agendamento de Avaliações</h1>
//       </header>

//       <p>Marque a data e o horário da sua avaliação abaixo:</p>

//       <form>
//         <div className="form-group">
//           <label htmlFor="disciplina">Disciplina:</label>
//           <select id="disciplina">
//             <option value="1">Disciplina 1</option>
//             <option value="2">Disciplina 2</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="calendario">Selecione a Data:</label>
//           <div className="calendar-icon">
//             <img src="/path/to/calendar-icon.png" alt="Ícone Calendário" />
//           </div>
//           <input type="date" id="calendario" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="horario">Horário da Aplicação:</label>
//           <input type="time" id="horario" />
//         </div>

//         <div className="button-group">
//           <button type="submit">Salvar</button>
//           <button type="button">Reagendar</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Agendamento;

// 

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './index.css';
// import { FaClock } from 'react-icons/fa';
// import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
// import axios from 'axios';  // Adicione esta linha

// const Agendamento = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [selectedTime, setSelectedTime] = useState('08:00');
//     const [disciplina, setDisciplina] = useState('Disciplina 1'); // Adicione estado para a disciplina

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const [hours, minutes] = selectedTime.split(":");
//         const agendamentoDate = new Date(selectedDate);
//         agendamentoDate.setHours(hours, minutes);

//         const agendamento = {
//             data: agendamentoDate,
//             disciplina: disciplina,
//         };

//         // Enviar os dados do agendamento para a API
//         axios.post('http://localhost:8080/api/agendamentos', agendamento) // Substitua pelo endpoint correto da API
//             .then(response => {
//                 console.log('Agendamento criado com sucesso:', response.data);
//             })
//             .catch(error => {
//                 console.error('Erro ao criar agendamento:', error);
//             });
//     };

//     return (
//         <div className="page-container">
//             <header className="agendamento-header">
//                 <div className="menu-icon-agendamento">
//                     <AiOutlineMenu size={28} />
//                     <span>Menu</span>
//                 </div>
//                 <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
//                 <div className="logout-icon">
//                     <AiOutlineLogout size={28} />
//                     <span>Sair</span>
//                 </div>
//             </header>

//             <h2>Agendamento de Avaliações</h2>
//             <form onSubmit={handleSubmit} className="calendario">
//                 <label>Disciplina:</label>
//                 <select value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
//                     <option value="Disciplina 1">Disciplina 1</option>
//                     <option value="Disciplina 2">Disciplina 2</option>
//                 </select>

//                 <label>Selecione a Data:</label>
//                 <Calendar onChange={setSelectedDate} value={selectedDate} />

//                 <label>Horário da Aplicação: <FaClock /></label>
//                 <input 
//                     type="time" 
//                     value={selectedTime} 
//                     onChange={(e) => setSelectedTime(e.target.value)} 
//                 />

//                 <div className="buttons">
//                     <button type="submit">Salvar</button>
//                     <button type="button">Reagendar</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Agendamento;

// import React, { useState, useEffect } from 'react';
// import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { Container, Typography, Button, Box, Select, MenuItem, InputLabel, FormControl, IconButton, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './index.css';

// const Agendamento = () => {
//     const [selectedDateTime, setSelectedDateTime] = useState(null);
//     const [disciplina, setDisciplina] = useState('Disciplina 1');
//     const [agendamentos, setAgendamentos] = useState([]); // Estado para armazenar os agendamentos
//     const [agendamentosFiltrados, setAgendamentosFiltrados] = useState([]); // Estado para armazenar os agendamentos filtrados
//     const navigate = useNavigate();
//     const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

//     const selecionarAgendamento = (agendamento) => {
//         setAgendamentoSelecionado(agendamento);
//       };

//     useEffect(() => {
//         buscarAgendamentos();
//     }, []);    

//     // const buscarAgendamentos = async () => {
//     //     try {
//     //         const response = await axios.get('http://localhost:8080/api/agendamentos');
//     //         setAgendamentos(response.data);  // Salvar os dados retornados
//     //     } catch (error) {
//     //         console.error('Erro ao buscar agendamentos:', error);
//     //     }
//     // };    

//     const buscarAgendamentos = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/agendamentos');
//             setAgendamentos(response.data); 

//             // Filtrar agendamentos para exibir apenas os não cancelados e seus reagendamentos
//             const agendamentosFiltrados = response.data.filter(agendamento => {
//                 if (agendamento.cancelado) {
//                     // Se o agendamento estiver cancelado, verifica se ele tem um reagendamento
//                     return response.data.some(reagendamento => 
//                         reagendamento.agendamentoOriginal && reagendamento.agendamentoOriginal.id === agendamento.id
//                     );
//                 }
//                 return true; // Se não estiver cancelado, exibe na tabela
//             });

//             // Atualiza o estado com os agendamentos filtrados
//             setAgendamentos(agendamentosFiltrados);

//         } catch (error) {
//             console.error('Erro ao buscar agendamentos:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!selectedDateTime || !disciplina) {
//             alert('Preencha todos os campos');
//             return;
//         }
        
//         if (!selectedDateTime) {
//             alert('Selecione uma data e hora');
//             return;
//         }        

//         const agendamento = {
//           data: selectedDateTime.toISOString(), // Converter data para o formato correto
//           disciplina: disciplina,
//         };

//         console.log('Data/Hora selecionada:', selectedDateTime.toISOString());
//         console.log('Agendamento:', agendamento);

//         try {
//             const response = await axios.post('http://localhost:8080/api/agendamentos', agendamento);
//             if (response.status === 200) {  
//                 console.log('Agendamento salvo:', response.data);

//                 buscarAgendamentos();  // Atualiza a tabela após o sucesso da criação do agendamento
//                 setSelectedDateTime(null);
//                 setDisciplina('Disciplina 1');
//             }
//         } catch (error) {
//             console.error('Erro ao criar agendamento:', error);
//         }
//     };         

//     const handleReagendar = () => {
//         navigate('/Reagendamento'); // Redireciona para a página de Reagendamento
//     };

//     const handleVoltar = () => {
//         navigate('/Menu'); // Redireciona para a página de Menu
//     };

//     const handleLogout = () => {
//         navigate('/Logout'); // Redireciona para a página de Logout
//     };

//     return (
//         <Container maxWidth="sm" className="page-container">
//             <Box className="agendamento-header" display="flex" justifyContent="space-between" alignItems="center">
//                 <IconButton className="menu-icon-agendamento" onClick={handleVoltar}>
//                     <AiOutlineMenu size={28} />
//                 </IconButton>
//                 <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
//                 <IconButton className="logout-icon" onClick={handleLogout}>
//                     <AiOutlineLogout size={28} />
//                 </IconButton>
//             </Box>

//             <Typography variant="h4" component="h2" gutterBottom>
//                 Agendamento de Avaliações
//             </Typography>

//             <Box component="form" onSubmit={handleSubmit} noValidate className="calendario" sx={{mt: 1}}>
//                 <FormControl fullWidth margin="normal">
//                     <InputLabel id="disciplina-label">Disciplina</InputLabel>
//                     <Select
//                         labelId="disciplina-label"
//                         id="disciplina"
//                         value={disciplina}
//                         label="Disciplina"
//                         onChange={(e) => setDisciplina(e.target.value)}>
//                         <MenuItem value="Disciplina 1">Disciplina 1</MenuItem>
//                         <MenuItem value="Disciplina 2">Disciplina 2</MenuItem>
//                     </Select>
//                 </FormControl>

//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DateTimePicker
//                         label="Data e Hora da Aplicação"
//                         value={selectedDateTime}
//                         onChange={setSelectedDateTime}
//                         renderInput={(params) => <TextField {...params} />}
//                     />
//                 </LocalizationProvider>

//                 <Box display="flex" justifyContent="space-between" mt={3}>
//                     <Button type="submit" variant="contained" color="primary">
//                         Salvar
//                     </Button>
//                     <Button type="button" variant="contained" color="secondary" onClick={handleReagendar}>
//                         Reagendar
//                     </Button>
//                 </Box>
//             </Box>

//             {/* Tabela de Agendamentos */}
//             {/* <TableContainer component={Paper} sx={{mt: 3}}>
//                 <Table sx={{minWidth: 650}} aria-label="tabela de agendamentos">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Disciplina</TableCell>
//                             <TableCell align="left">Data e Hora</TableCell>
//                             <TableCell align="left">Cancelado</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {agendamentos.map((agendamento) => (
//                             <TableRow key={agendamento.id} sx={{'&:last-child td, &:last-child th': {border: 0}}} onClick={() => selecionarAgendamento(agendamento)}>
//                                 <TableCell component="th" scope="row">
//                                     {agendamento.disciplina}
//                                 </TableCell>
//                                 <TableCell align="left">
//                                     {new Date(agendamento.data).toLocaleString()}
//                                 </TableCell>
//                                 <TableCell align="left">{agendamento.cancelado ? 'Sim' : 'Não'}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer> */}

//             <TableContainer component={Paper} sx={{mt: 3}}>
//                         <Table sx={{minWidth: 650}} aria-label="tabela de agendamentos">
//                             {/* ... outros códigos ... */}
//                             <TableBody>
//                                 {agendamentosFiltrados.map((agendamento) => ( // Usando agendamentosFiltrados aqui
//                                     <TableRow 
//                                         key={agendamento.id}
//                                         sx={{'&:last-child td, &:last-child th': {border: 0}}} 
//                                         onClick={() => selecionarAgendamento(agendamento)}
//                                         style={{ cursor: 'pointer' }}
//                                     >
//                                         <TableCell component="th" scope="row">
//                                             {agendamento.disciplina}
//                                         </TableCell>
//                                         <TableCell align="left">
//                                             {new Date(agendamento.data).toLocaleString()}
//                                         </TableCell>
//                                         <TableCell align="left">{agendamento.cancelado ? 'Sim' : 'Não'}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//             </TableContainer>
//         </Container>
//     );
// };

// export default Agendamento;

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { 
    Container, 
    Typography, 
    Button, 
    Box, 
    Select, 
    MenuItem, 
    InputLabel, 
    FormControl, 
    IconButton, 
    TextField, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper 
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Agendamento = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [disciplina, setDisciplina] = useState('Disciplina 1');
    const [agendamentos, setAgendamentos] = useState([]);
    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
    const navigate = useNavigate();
    const [agendamentosFiltrados, setAgendamentosFiltrados] = useState([]); // Estado para armazenar os agendamentos filtrados


    const selecionarAgendamento = (agendamento) => {
        setAgendamentoSelecionado(agendamento); // Armazena o agendamento clicado no estado
    };

    useEffect(() => {
        buscarAgendamentos(); 
    }, []);

    const buscarAgendamentos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/agendamentos');
            setAgendamentos(response.data); 

            // Filtrar agendamentos para exibir apenas os não cancelados e seus reagendamentos
            const agendamentosFiltrados = response.data.filter(agendamento => {
                if (agendamento.cancelado) {
                    // Se o agendamento estiver cancelado, verifica se ele tem um reagendamento
                    return response.data.some(reagendamento => 
                        reagendamento.agendamentoOriginal && reagendamento.agendamentoOriginal.id === agendamento.id
                    );
                }
                return true; // Se não estiver cancelado, exibe na tabela
            });

            // Atualiza o estado com os agendamentos filtrados
            setAgendamentosFiltrados(agendamentosFiltrados);

        } catch (error) {
            console.error('Erro ao buscar agendamentos:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedDateTime || !disciplina) {
            alert('Preencha todos os campos');
            return;
        }

        if (!selectedDateTime) {
            alert('Selecione uma data e hora');
            return;
        }

        const agendamento = {
            data: selectedDateTime.toISOString(), 
            disciplina: disciplina,
        };

        console.log('Data/Hora selecionada:', selectedDateTime.toISOString());
        console.log('Agendamento:', agendamento);

        try {
            const response = await axios.post('http://localhost:8080/api/agendamentos', agendamento);
            if (response.status === 200) {
                console.log('Agendamento salvo:', response.data);

                buscarAgendamentos(); 
                setSelectedDateTime(null);
                setDisciplina('Disciplina 1');
            }
        } catch (error) {
            console.error('Erro ao criar agendamento:', error);
        }
    };

    const handleReagendar = () => {
        navigate('/Reagendamento'); 
    };

    const handleVoltar = () => {
        navigate('/Menu'); 
    };

    const handleLogout = () => {
        navigate('/Logout'); 
    };

    return (
        <Container maxWidth="sm" className="page-container">
            <Box className="agendamento-header" display="flex" justifyContent="space-between" alignItems="center">
                <IconButton className="menu-icon-agendamento" onClick={handleVoltar}>
                    <AiOutlineMenu size={28} />
                </IconButton>
                <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
                <IconButton className="logout-icon" onClick={handleLogout}>
                    <AiOutlineLogout size={28} />
                </IconButton>
            </Box>

            <Typography variant="h4" component="h2" gutterBottom>
                Agendamento de Avaliações
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate className="calendario" sx={{mt: 1}}>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="disciplina-label">Disciplina</InputLabel>
                    <Select
                        labelId="disciplina-label"
                        id="disciplina"
                        value={disciplina}
                        label="Disciplina"
                        onChange={(e) => setDisciplina(e.target.value)}>
                        <MenuItem value="Disciplina 1">Disciplina 1</MenuItem>
                        <MenuItem value="Disciplina 2">Disciplina 2</MenuItem>
                    </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Data e Hora da Aplicação"
                        value={selectedDateTime}
                        onChange={setSelectedDateTime}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <Box display="flex" justifyContent="space-between" mt={3}>
                    <Button type="submit" variant="contained" color="primary">
                        Salvar
                    </Button>
                    <Button type="button" variant="contained" color="secondary" onClick={handleReagendar}>
                        Reagendar
                    </Button>
                </Box>
            </Box>

            <TableContainer component={Paper} sx={{mt: 3}}>
                <Table sx={{minWidth: 650}} aria-label="tabela de agendamentos">
                    <TableHead>
                        <TableRow>
                            <TableCell>Disciplina</TableCell>
                            <TableCell align="left">Data e Hora</TableCell>
                            <TableCell align="left">Cancelado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agendamentosFiltrados.map((agendamento) => (
                            <TableRow
                            key={agendamento.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            onClick={() => selecionarAgendamento(agendamento)} // Adiciona o evento onClick aqui
                            style={{ cursor: 'pointer', backgroundColor: agendamentoSelecionado?.id === agendamento.id ? '#e0f7fa' : 'transparent' }}
                            >
                                <TableCell component="th" scope="row">
                                    {agendamento.disciplina}
                                </TableCell>
                                <TableCell align="left">
                                    {new Date(agendamento.data).toLocaleString()}
                                </TableCell>
                                <TableCell align="left">{agendamento.cancelado ? 'Sim' : 'Não'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Agendamento;