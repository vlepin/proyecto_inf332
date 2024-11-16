import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/layout/edit_page.scss';

const EditPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmSave = window.confirm("¿Estás seguro de que deseas guardar los cambios?");
        if (confirmSave) {
            console.log("Cambios guardados.");
            navigate('/home');
        } else {
            console.log("Cambios no guardados.");
        }
    };

    return (
        <div className="container">
            <h1>Editar Evento</h1>
            <form onSubmit={handleSubmit}>
                <input type="hidden" id="eventId" name="eventId" value="12345" />

                {/* Nombre del Evento */}
                <div className="form-group">
                    <label htmlFor="eventName">Nombre del Evento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventName"
                        name="eventName"
                        defaultValue="1° Festival por la Salud Mental"
                        required
                    />
                </div>

                {/* Fecha del Evento */}
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="eventDate">Fecha del Evento</label>
                    <input
                        type="date"
                        className="form-control"
                        id="eventDate"
                        name="eventDate"
                        defaultValue="07-10-2024"
                        required
                    />
                </div>

                {/* Hora de inicio y fin en una fila */}
                
                    <div className="form-group half-width">
                        <label htmlFor="eventTime">Hora de Inicio</label>
                        <input
                            type="time"
                            className="form-control"
                            id="eventTime"
                            name="eventTime"
                            defaultValue="12:30"
                            required
                        />
                    </div>
                    <div className="form-group half-width">
                        <label htmlFor="eventEndTime">Hora de Fin</label>
                        <input
                            type="time"
                            className="form-control"
                            id="eventEndTime"
                            name="eventEndTime"
                            defaultValue="13:40"
                            required
                        />
                    </div>
                </div>

                {/* Descripción */}
                <div className="form-group">
                    <label htmlFor="eventDescription">Descripción</label>
                    <textarea
                        className="form-control"
                        id="eventDescription"
                        name="eventDescription"
                        rows="2"
                        required
                    >
                        Evento enfocado en la salud mental de nuestra comunidad, incluye actividades y talleres
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
                        defaultValue="Auditorio Central, Campus San Joaquín, Santiago"
                        required
                    />
                </div>
                
                <div className="form-row">
                {/* Público */}
                <div className="form-group">
                    <label htmlFor="eventPublic">Público</label>
                    <select className="form-control" id="eventPublic" name="eventPublic" required>
                        <option value="abierto">Abierto</option>
                        <option value="cerrado"selected>Cerrado</option>
                    </select>
                </div>

                {/* Entrada */}
                <div className="form-group">
                    <label htmlFor="eventTicket">Entrada</label>
                    <select className="form-control" id="eventTicket" name="eventTicket" required>
                        <option value="gratuito" selected>Entrada gratuita</option>
                        <option value="pagado">Entrada con cargo</option>
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
                        <option value="cultura">Cultura, arte y recreación</option>
                        <option value="salud"selected>Salud</option>
                        <option value="inclusion">Inclusión</option>
                        <option value="admision">Admisión</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>

                </div>

                {/* Botón de modificar */}
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditPage;
