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
          <div className="event-details__highlight">
            <p><strong>Fecha:</strong> 07/10/2024</p>
            <p><strong>Hora Inicio:</strong> 12:30</p>
            <p><strong>Hora Fin:</strong> 13:40</p>
            <p><strong>Ubicación:</strong> Auditorio Central, Campus San Joaquín, Santiago</p>
          </div>
          <div className="event-details__other-info">
            <p><strong>Descripción:</strong> Evento enfocado en la salud mental de nuestra comunidad, incluye actividades y talleres</p>
            <p><strong>Público:</strong> Cerrado</p>
            <p><strong>Entrada:</strong> Gratuita</p>
            <p><strong>Modalidad:</strong> Presencial</p>
            <p><strong>Temática:</strong> Salud</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
