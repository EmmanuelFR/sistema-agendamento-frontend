import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Container, Typography, Button, Box, Select, MenuItem, InputLabel, FormControl, IconButton, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Reagendamento = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [disciplina, setDisciplina] = useState('Disciplina 1');
    const [agendamentos, setAgendamentos] = useState([]);
    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        buscarAgendamentos(); // Pega os agendamentos ao carregar a página
    }, []);

    const buscarAgendamentos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/reagendamentos'); // Endpoint separado para reagendamentos
            setAgendamentos(response.data);
        } catch (error) {
            console.error('Erro ao buscar agendamentos:', error);
        }
    };

    const handleReagendar = async (e) => {
        e.preventDefault();

        if (!selectedDateTime || !disciplina || !agendamentoSelecionado) {
            alert('Preencha todos os campos e selecione um agendamento para reagendar.');
            return;
        }

        const novoAgendamento = {
            id: agendamentoSelecionado.id,  // Mantém o ID do agendamento a ser reagendado
            data: selectedDateTime.toISOString(),
            disciplina: disciplina,
            cancelado: false  // Marca o novo agendamento como ativo
        };

        try {
            // Faz a requisição para o novo endpoint
            await axios.put(`http://localhost:8080/api/agendamentos/${agendamentoSelecionado.id}/reagendar`, novoAgendamento);
            
            alert('Reagendamento realizado com sucesso');
            buscarAgendamentos();  
            setSelectedDateTime(null); 
            setDisciplina('Disciplina 1');
            setAgendamentoSelecionado(null);
        } catch (error) {
            console.error('Erro ao reagendar:', error);
            // Aqui você pode adicionar um tratamento de erro mais amigável para o usuário, 
            // como exibir uma mensagem de erro na tela.
        }
    };

    const selecionarAgendamento = (agendamento) => {
        setAgendamentoSelecionado(agendamento);  // Define o agendamento que será reagendado
    };

    return (
        <Container maxWidth="sm" className="page-container">
            <Box className="agendamento-header" display="flex" justifyContent="space-between" alignItems="center">
                <IconButton className="menu-icon-agendamento" onClick={() => navigate('/Menu')}>
                    <AiOutlineMenu size={28} />
                </IconButton>
                <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
                <IconButton className="logout-icon" onClick={() => navigate('/Logout')}>
                    <AiOutlineLogout size={28} />
                </IconButton>
            </Box>

            <Typography variant="h4" component="h2" gutterBottom>
                Reagendamento de Avaliações
            </Typography>

            <Box component="form" onSubmit={handleReagendar} noValidate className="calendario" sx={{mt: 1}}>
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
                        label="Nova Data e Hora da Aplicação"
                        value={selectedDateTime}
                        onChange={setSelectedDateTime}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <Box display="flex" justifyContent="center" mt={3}>
                    <Button type="submit" variant="contained" color="primary">
                        Salvar
                    </Button>
                </Box>
            </Box>

            {/* Tabela de Agendamentos */}
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
                        {agendamentos.map((agendamento) => (
                            <TableRow
                                key={agendamento.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                onClick={() => selecionarAgendamento(agendamento)}
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

export default Reagendamento;