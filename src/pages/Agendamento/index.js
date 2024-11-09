import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Container, Typography, Button, Box, Select, MenuItem, InputLabel, FormControl, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Snackbar, Alert, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

const Agendamento = () => {
    const [selectedHorario, setSelectedHorario] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [disciplina, setDisciplina] = useState('');
    const [agendamentos, setAgendamentos] = useState([]);
    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
    const [modalReagendamentoAberto, setModalReagendamentoAberto] = useState(false);
    const [novaDataHora, setNovaDataHora] = useState(null);

    const [snackbarSuccessAgendamento, setSnackbarSuccessAgendamento] = useState(false);
    const [snackbarErrorAgendamento, setSnackbarErrorAgendamento] = useState(false);
    const [snackbarSuccessReagendamento, setSnackbarSuccessReagendamento] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const horariosDisponiveis = [
        '08:00 às 09:00',
        '09:00 às 10:00',
        '10:00 às 11:00'
    ];

    const navigate = useNavigate();

    const buscarAgendamentos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/agendamentos');
            setAgendamentos(response.data);
        } catch (error) {
            console.error('Erro ao buscar agendamentos:', error);
        }
    };

    useEffect(() => { 
        buscarAgendamentos(); 
    }, []);

    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleAgendar = async (e) => {
        e.preventDefault();

        if (!selectedDateTime || !selectedHorario) {
            alert('Preencha uma data e um horário.');
            return;
        }

        const dataHora = `${selectedDateTime.format('YYYY-MM-DD')}T${selectedHorario}:00`;

        const provaJaAgendada = agendamentos.some(
            (agendamento) => agendamento.disciplina === disciplina
        );

        if (provaJaAgendada) {
            showSnackbar("Essa prova já foi agendada", "error");
            return;
        }

        const provaNoMesmoHorario = agendamentos.some(
            (agendamento) => agendamento.dataHora === dataHora && !agendamento.cancelado
        );

        if (provaNoMesmoHorario) {
            showSnackbar("Prova já agendada neste dia e horário", "error");
            return;
        }

        const agendamento = {
            dataHora,
            disciplina: disciplina,
        };

        try {
            const response = await axios.post("http://localhost:8080/api/agendamentos", agendamento, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                buscarAgendamentos();
                setSnackbarSuccessAgendamento(true);
            } else if (response.status === 409) {
                setSnackbarErrorAgendamento(true);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setSnackbarErrorAgendamento(true);
        }
    };

    const handleReagendar = (agendamento) => {
        setAgendamentoSelecionado(agendamento);
        setNovaDataHora(dayjs(agendamento.dataHora));
        setModalReagendamentoAberto(true);
    };

    const handleSalvarReagendamento = async () => {
        try {
            if (!novaDataHora) {
                alert('Preencha a nova data e hora.');
                return;
            }

            const novaDataHoraDayjs = dayjs(novaDataHora);
            const dataHoraFormatada = novaDataHoraDayjs.format('YYYY-MM-DDTHH:mm:ss');

            const novoAgendamento = {
                dataHora: dataHoraFormatada, 
                disciplina: agendamentoSelecionado.disciplina
            };

            const response = await axios.put(`http://localhost:8080/api/agendamentos/reagendar/${agendamentoSelecionado.id}`, novoAgendamento);

            if (response.status === 200) {
                await buscarAgendamentos();

                setModalReagendamentoAberto(false);
                setSnackbarSuccessReagendamento(true);
            }
        } catch (error) {
            console.error('Erro ao reagendar:', error);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarSuccessAgendamento(false);
        setSnackbarErrorAgendamento(false);
        setSnackbarSuccessReagendamento(false);
        setSnackbarOpen(false);
    };

    function formatarTexto(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
      }

    return (
        <Container>

            <Box>
                <Typography variant="h4" gutterBottom align="center">
                    Agendamento de avaliações
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" gap='15px'>

                <FormControl fullWidth >
                    <InputLabel id="disciplina-label">Disciplina</InputLabel>
                    <Select
                        labelId="disciplina-label"
                        value={disciplina}
                        onChange={(e) => setDisciplina(e.target.value)}
                        label="Disciplina"
                    >
                        <MenuItem value="Disciplina 1 - A2">Disciplina 1 - A2</MenuItem>
                        <MenuItem value="Disciplina 1 - A3">Disciplina 1 - A3</MenuItem>
                        <MenuItem value="Disciplina 2 - A2">Disciplina 2 - A2</MenuItem>
                        <MenuItem value="Disciplina 2 - A3">Disciplina 2 - A3</MenuItem>
                    </Select>
                </FormControl>
             
                <FormControl fullWidth >
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                    <DatePicker
                        label="Data"
                        value={selectedDateTime}
                        onChange={(newValue) => setSelectedDateTime(newValue)}
                        renderInput={(params) => <TextField {...params} value={selectedDateTime ? dayjs(selectedDateTime).format('DD/MM/YYYY') : ''} />}
                    />
                    </LocalizationProvider>
                </FormControl>

                <FormControl fullWidth >
                    <InputLabel id="horario-label">Horário</InputLabel>
                    <Select
                        labelId="horario-label"
                        id="horario"
                        value={selectedHorario}
                        label="Horário"
                        onChange={(e) => setSelectedHorario(e.target.value)}
                    >
                        <MenuItem value="08:00">08:00 - 09:00</MenuItem>
                        <MenuItem value="09:00">09:00 - 10:00</MenuItem>
                        <MenuItem value="10:00">10:00 - 11:00</MenuItem>
                    </Select>
                </FormControl>
                </Box>

                <Box display="flex" justifyContent="space-between" mt={3}>
                    <Button variant="contained" color="primary" onClick={handleAgendar} sx={{ backgroundColor: '#155846', '&:hover': {opacity: 0.8}}}>
                        <Typography textTransform="capitalize">
                            Agendar
                        </Typography>
                    </Button>
                </Box>
          

            <TableContainer component={Paper} sx={{ mt: 3 }}>
                <Table sx={{ minWidth: 550 }} aria-label="tabela de agendamentos">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Disciplina</TableCell>
                            <TableCell>Data e hora</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Ação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agendamentos.map((agendamento) => (
                            <TableRow key={agendamento.id}>
                                <TableCell>{agendamento.id}</TableCell>                                 
                                <TableCell>{agendamento.disciplina}</TableCell>
                                <TableCell>
                                    {agendamento.dataHora ? new Date(agendamento.dataHora).toLocaleString() : 'Data inválida'}
                                </TableCell>
                                <TableCell>
                                    {agendamento.cancelado ? (
                                        <Typography sx={{ color: 'red' }}>Cancelado</Typography>
                                    ) : (
                                        <Typography sx={{ color: '#1976D2' }}>Agendado</Typography>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {agendamento.cancelado ? ( // Renderização condicional aqui
                                        <></> // Renderiza nada se cancelado
                                    ) : (
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            className="reagendar-button green-button"
                                            sx={{
                                                borderColor: 'green',
                                                color: 'green',
                                                backgroundColor: '#d4f5e9',
                                                '&:hover': {
                                                    backgroundColor: '#b2e0cc',
                                                    borderColor: 'green',
                                                },
                                            }}
                                            onClick={() => handleReagendar(agendamento)}
                                        >
                                            <Typography textTransform="capitalize">
                                                Reagendar
                                            </Typography>
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {modalReagendamentoAberto && (
            <Modal open={modalReagendamentoAberto} onClose={() => setModalReagendamentoAberto(false)}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}>
              <Typography variant="h6" gutterBottom>
                Reagendar avaliação
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                    <DatePicker
                        label="Data"
                        value={novaDataHora}
                        onChange={(newValue) => setNovaDataHora(newValue)} 
                        renderInput={(params) => <TextField {...params} fullWidth />} 
                    />
                    </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel id="novo-horario-label">Horário</InputLabel>
                    <Select
                        label="Horário"
                        labelId="novo-horario-label"
                        id="novo-horario"
                        value={novaDataHora ? novaDataHora.format('HH:mm') : ''}
                        onChange={(e) => {
                        const [hora, minuto] = e.target.value.split(':');
                        setNovaDataHora(novaDataHora.set('hour', hora).set('minute', minuto));
                        }}
                    >
                        {horariosDisponiveis.map((horario) => (
                        <MenuItem key={horario} value={horario.substring(0, 5)}>
                            {horario}
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button variant="contained" color="primary" onClick={handleSalvarReagendamento} sx={{ ml: 2, backgroundColor: '#155846', '&:hover' : {opacity: 0.8}}}> 
                    <Typography textTransform="capitalize">
                        Salvar
                    </Typography>
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => setModalReagendamentoAberto(false)} sx={{ ml: 2, borderColor: '#155846', color: '#155846', '&:hover' : {opacity: 0.8}}}>
                    <Typography textTransform="capitalize">
                        Cancelar
                    </Typography>
                </Button>
              </Box>
            </Box>
          </Modal>          
            )}

            <Snackbar open={snackbarSuccessAgendamento} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Agendamento realizado com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar open={snackbarErrorAgendamento} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    Limite de agendamentos para esse horário atingido.
                </Alert>
            </Snackbar>

            <Snackbar open={snackbarSuccessReagendamento} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Reagendamento realizado com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar 
                open={snackbarOpen} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

        </Container>
    );
};

export default Agendamento;