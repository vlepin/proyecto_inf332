import React from 'react';
import '../stylesheets/layout/delete_page.scss'; 

const DeletePage = () => {
  const handleConfirmDeletion = (event) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar este evento?")) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Eliminar Evento</h1>
        <form action="exito.html" method="POST">
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
                  type="submit"
                  name="eventId"
                  value={event.id}
                  className="btn btn-danger btn-sm"
                  onClick={handleConfirmDeletion}
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
