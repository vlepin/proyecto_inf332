import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../stylesheets/layout/request_page.scss'; // Asegúrate de crear este archivo

const RequestsPage = () => {
  const navigate = useNavigate(); // Crea la instancia de navigate

  const handleViewDetails = () => {
    navigate('/request-detail'); // Redirige a la página genérica de detalles de la solicitud
  };

  return (
    <div>
      <div className="container">
        <h1>Solicitudes</h1>
        <ul className="list-group">
          {[ // Lista de solicitudes
            { id: 1, name: "Solicitud de Permiso para Evento Cultural" },
            { id: 2, name: "Solicitud de Fondo de Ayuda Estudiantil" },
            { id: 3, name: "Solicitud de Asesoría Académica" },
            { id: 4, name: "Solicitud de Espacio en Sala de Clases" },
            { id: 5, name: "Solicitud de Certificado de Estudios" },
          ].map(event => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={event.id}>
              {event.name}
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={handleViewDetails} // Llama a la función para ver detalles
              >
                Ver Detalles
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RequestsPage;
