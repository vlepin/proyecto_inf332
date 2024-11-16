import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa useParams y useNavigate
import '../stylesheets/layout/detail_request.scss'; // Asegúrate de crear este archivo
import evento1 from '../assets/evento1.jpg';// Asegúrate de que la ruta sea correcta para tu imagen

const RequestDetailPage = () => {
  const { id } = useParams(); // Obtiene el ID de la solicitud (puedes dejarlo si planeas usarlo más tarde)
  const navigate = useNavigate();

  const handleAccept = () => {
    // Lógica para aceptar la solicitud
    alert(`Solicitud ${id} aceptada.`);
    navigate('/requests'); // Redirige a la página de solicitudes
  };

  const handleReject = () => {
    // Lógica para rechazar la solicitud
    alert(`Solicitud ${id} rechazada.`);
    navigate('/requests'); // Redirige a la página de solicitudes
  };

  return (
    <div>
      <div className="container">
        <h1>Detalles de la Solicitud</h1>
        
        {/* Información de la persona que realiza la solicitud */}
        <h2>Información del Solicitante</h2>
        <p><strong>Nombre:</strong> Juan</p>
        <p><strong>Teléfono:</strong> +56999999999</p>
        <p><strong>Correo:</strong> correo@correo.cl</p>

        {/* Información del evento */}
        <h2>Detalles del Evento</h2>
        <img src={evento1} alt="Evento" className="event-image" />
        <p><strong>Nombre del Evento:</strong> 1° Festival por la Salud Mental</p>
        <p><strong>Fecha:</strong> 7-10-2024</p>
        <p><strong>Hora de Inicio:</strong> 12:30</p>
        <p><strong>Hora de Fin:</strong> 13:40</p>
        <p><strong>Descripción:</strong> Evento enfocado en la salud mental de nuestra comunidad, incluye actividades y talleres </p>
        <p><strong>Ubicación:</strong> Auditorio Central, Campus San Joaquín, Santiago</p>
        <p><strong>Público:</strong> Cerrado</p>
        <p><strong>Entrada:</strong> Gratuita</p>
        <p><strong>Modalidad:</strong> Presencial</p>
        <p><strong>Tema:</strong> Salud</p>

        <div className="button-group">
          <button className="btn btn-success" onClick={handleAccept}>Aceptar</button>
          <button className="btn btn-danger" onClick={handleReject}>Rechazar</button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailPage;
