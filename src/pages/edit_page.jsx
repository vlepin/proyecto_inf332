import React from 'react';
import '../stylesheets/layout/edit_page.scss'; // Asegúrate de tener este archivo para estilos

const EditPage = () => {
    return (
        <div className="container">
            <h1>Editar Evento</h1>
            <form action="exito.html" method="POST">
                {/* ID del Evento (oculto) */}
                <input type="hidden" id="eventId" name="eventId" value="12345" /> {/* Aquí se almacena el ID del evento a modificar */}

                {/* Nombre del Evento */}
                <div className="form-group">
                    <label htmlFor="eventName">Nombre del Evento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventName"
                        name="eventName"
                        defaultValue="Nombre del Evento Existente"
                        required
                    />
                </div>

                {/* Fecha del Evento */}
                <div className="form-group">
                    <label htmlFor="eventDate">Fecha del Evento</label>
                    <input
                        type="date"
                        className="form-control"
                        id="eventDate"
                        name="eventDate"
                        defaultValue="2024-09-10"
                        required
                    />
                </div>

                {/* Hora de inicio */}
                <div className="form-group">
                    <label htmlFor="eventTime">Hora de Inicio</label>
                    <input
                        type="time"
                        className="form-control"
                        id="eventTime"
                        name="eventTime"
                        defaultValue="10:00"
                        required
                    />
                </div>

                {/* Hora de fin */}
                <div className="form-group">
                    <label htmlFor="eventEndTime">Hora de Fin</label>
                    <input
                        type="time"
                        className="form-control"
                        id="eventEndTime"
                        name="eventEndTime"
                        defaultValue="12:00"
                        required
                    />
                </div>

                {/* Descripción */}
                <div className="form-group">
                    <label htmlFor="eventDescription">Descripción</label>
                    <textarea
                        className="form-control"
                        id="eventDescription"
                        name="eventDescription"
                        rows="5"
                        required
                    >
                        Descripción existente del evento
                    </textarea>
                </div>

                {/* Ubicación */}
                <div className="form-group">
                    <label htmlFor="eventLocation">Ubicación</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventLocation"
                        name="eventLocation"
                        defaultValue="Ubicación existente"
                        required
                    />
                </div>

                {/* Público */}
                <div className="form-group">
                    <label htmlFor="eventPublic">Público</label>
                    <select className="form-control" id="eventPublic" name="eventPublic" required>
                        <option value="abierto" selected>Abierto</option>
                        <option value="cerrado">Cerrado</option>
                    </select>
                </div>

                {/* Modalidad */}
                <div className="form-group">
                    <label htmlFor="eventModality">Modalidad</label>
                    <select className="form-control" id="eventModality" name="eventModality" required>
                        <option value="presencial" selected>Presencial</option>
                        <option value="online">Online</option>
                        <option value="mixta">Mixta</option>
                    </select>
                </div>

                {/* Temática */}
                <div className="form-group">
                    <label htmlFor="eventTheme">Temática</label>
                    <select className="form-control" id="eventTheme" name="eventTheme" required>
                        <option value="cultura" selected>Cultura, arte y recreación</option>
                        <option value="salud">Salud</option>
                        <option value="inclusion">Inclusión</option>
                        <option value="admision">Admisión</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>

                {/* Botón de modificar */}
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditPage;
