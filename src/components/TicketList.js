import React from 'react';
import TicketItem from './TicketItem';
import './TicketList.css'; // Si tienes estilos específicos para la lista

const TicketList = ({ tickets, onDeleteTicket }) => {
  return (
    <ul>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} onDeleteTicket={onDeleteTicket} />
      ))}
    </ul>
  );
};

export default TicketList;
