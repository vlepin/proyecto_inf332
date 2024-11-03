import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../stylesheets/layout/delete_page.scss'; 

const DeletePage = () => {
  const navigate = useNavigate(); // Crea la instancia de navigate

  const handleConfirmDeletion = (event, eventId) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    if (window.confirm("¿Estás seguro de que deseas eliminar este evento?")) {
      // Aquí puedes agregar la lógica para eliminar el evento.
      // Simularemos la eliminación y redireccionamos a la página de inicio.

      console.log(`Evento con ID ${eventId} eliminado.`); // Simula la eliminación del evento
      navigate('/home'); // Redirige a la página de inicio
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Eliminar Evento</h1>
        <form>
          <ul className="list-group">
            {[
              { id: 1, name: "Jornada de Salud Integral y promoción del autocuidado Sede Concepción" },
              { id: 2, name: "Hablemos de Inclusión, Ley TEA en Educación Superior Campus Casa Central Valparaíso" },
              { id: 3, name: "Conmemoración Día Mundial de la prevención del Suicidio Campus Vitacura" },
              { id: 4, name: "Muestra Costumbrista Sede Concepción" },
              { id: 5, name: "Vitacumbia Endiciochá Campus Vitacura" },
              { id: 6, name: "Fonda El Sansano Campus San Joaquín" },
              { id: 7, name: "Colecta de sangre Campus Casa Central Valparaíso" },
            ].map(event => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={event.id}>
                {event.name}
                <button
                  type="button" // Cambia a tipo "button"
                  className="btn btn-danger btn-sm"
                  onClick={(e) => handleConfirmDeletion(e, event.id)} // Pasa el evento y el id
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default DeletePage;
