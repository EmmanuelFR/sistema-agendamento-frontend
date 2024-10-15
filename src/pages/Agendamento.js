import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Agendamento.css'; // Adicione o arquivo de CSS

const Agendamento = () => {
  const [data, setData] = useState(new Date());

  const handleDateChange = (date) => {
    setData(date);
  };

  return (
    <div className="agendamento-container">
      <header>
        <img src="/images/images-removebg-preview.png" alt="Logo" className="logo" />
        <h1>Agendamento de Avaliações</h1>
      </header>
      <p>Marque a data e o horário da sua avaliação abaixo:</p>

      <div className="agendamento-form">
        <label>Disciplina:</label>
        <select>
          <option value="disciplina1">Disciplina 1</option>
          <option value="disciplina2">Disciplina 2</option>
        </select>

        <div className="calendar-container">
          <label>Selecione a Data:</label>
          <Calendar onChange={handleDateChange} value={data} />
        </div>

        <div className="data-hora">
          <label>Horário da Aplicação:</label>
          <button>08:00 às 09:20</button>
        </div>

        <div className="buttons">
          <button className="salvar">Salvar</button>
          <button className="reagendar">Reagendar</button>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;