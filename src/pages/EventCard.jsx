import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Asegúrate de ajustar la ruta
import '../stylesheets/layout/EventCard.scss';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Obtener el estado de autenticación

  const handleDetailsClick = () => {
    navigate('/event-details');
  };

  const handleEditClick = () => { // Idealmente podriamos agregar tambien un boton de editar en la pagina de eventos
    navigate('/edit');
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} className="event-card__image" />
      <h3 className="event-card__title">{event.name}</h3>
      <button className="event-card__details-button" onClick={handleDetailsClick}>
        Más detalles
      </button>
      {isLoggedIn && ( 
        <button className="event-card__edit-button" onClick={handleEditClick}>
          Editar
        </button>
      )}
    </div>
  );
};

export default EventCard;
