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

import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Agendamento.css';
import { FaClock } from "react-icons/fa";
import { FiMenu, FiLogOut } from "react-icons/fi";
import logo from "../images/images-removebg-preview.png";

const Agendamento = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("08:00");

    const handleSubmit = (e) => {
        e.preventDefault();
        const [hours, minutes] = selectedTime.split(":");
        const agendamentoDate = new Date(selectedDate);
        agendamentoDate.setHours(hours, minutes);

        console.log("Data e Hora do Agendamento: ", agendamentoDate);
        // Enviar para a API
    };

    return (
        <div className="agendamento-container">
            <header className="agendamento-header">
                <FiMenu className="menu-icon" />
                <img src={logo} alt="Logo" className="logo" />
                <FiLogOut className="logout-icon" />
            </header>
            <h2><i className="icon-calendario"></i>Agendamento de Avaliações</h2>
            <p>Marque a data e o horário da sua avaliação abaixo:</p>
            <form onSubmit={handleSubmit}>
                <label>Disciplina:</label>
                <select>
                    <option>Disciplina 1</option>
                    <option>Disciplina 2</option>
                </select>

                <label>Selecione a Data:</label>
                <Calendar onChange={setSelectedDate} value={selectedDate} />

                <label>Horário da Aplicação: <FaClock /></label>
                <input 
                    type="time" 
                    value={selectedTime} 
                    onChange={(e) => setSelectedTime(e.target.value)} 
                />

                <div className="buttons">
                    <button type="submit">Salvar</button>
                    <button type="button">Reagendar</button>
                </div>
            </form>
        </div>
    );
};

export default Agendamento;