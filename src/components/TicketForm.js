import React, { useState } from 'react';
import './TicketForm.css'; // Si tienes estilos específicos para el formulario

const TicketForm = ({ onAddTicket }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newTicket = {
      id: Date.now(),
      title,
      description,
      status: 'open',
    };

    onAddTicket(newTicket);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Crear Ticket</button>
    </form>
  );
};

export default TicketForm;
