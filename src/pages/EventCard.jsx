import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/layout/EventCard.scss'; 

const EventCard = ({ event }) => {
  const navigate = useNavigate(); // Hook para redirigir a otra página

  const handleDetailsClick = () => {
    navigate('/event-details'); // Redirige a la página de detalles genérica
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} className="event-card__image" />
      <h3 className="event-card__title">{event.name}</h3>
      <button className="event-card__details-button" onClick={handleDetailsClick}>
        Más detalles
      </button>
    </div>
  );
};

export default EventCard;
