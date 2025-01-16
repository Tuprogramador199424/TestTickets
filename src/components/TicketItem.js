import React from 'react';
import './TicketItem.css'; // Si tienes estilos específicos para el elemento

const TicketItem = ({ ticket, onDeleteTicket }) => {
  return (
    <li>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Estado: {ticket.status}</p>
      <button onClick={() => onDeleteTicket(ticket.id)}>Eliminar</button>
    </li>
  );
};

export default TicketItem;
