import React from 'react';
import evento1 from '../assets/evento1.jpg';
import '../stylesheets/layout/event_details.scss';

const EventDetails = () => {
  return (
    <div className="event-details">
      <div className="event-details__content">
        <img src={evento1} alt="Evento" className="event-details__image" />
        <div className="event-details__info">
          <h1>Detalles del Evento</h1>
          <p><strong>Fecha:</strong> 07/10/2024</p>
          <p><strong>Hora Inicio:</strong> 12:30</p>
          <p><strong>Hora Fin:</strong> 13:40</p>
          <p><strong>Público:</strong> Abierto</p>
          <p><strong>Modalidad:</strong> Presencial</p>
          <p><strong>Ubicación:</strong> Campus Vitacura</p>
          <p><strong>Temática:</strong> Salud</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
