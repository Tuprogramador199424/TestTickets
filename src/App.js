import React, { useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import './App.css'; // Asegúrate de que tus estilos globales estén aquí

const App = () => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  return (
    <div>
      <h1>Sistema de Tickets</h1>
      <TicketForm onAddTicket={addTicket} />
      <TicketList tickets={tickets} onDeleteTicket={deleteTicket} />
    </div>
  );
};

export default App;
