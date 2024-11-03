import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../stylesheets/layout/register_page.scss';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventEndTime: '',
    eventDescription: '',
    eventLocation: '',
    eventPublic: 'abierto',
    eventModality: 'presencial',
    eventTheme: 'cultura'
  });

  const navigate = useNavigate(); // Crea la instancia de navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del evento:', formData);
    alert("¡Evento registrado con éxito!");
    
    // Aquí puedes agregar la lógica para guardar el evento, si es necesario

    // Redirige a la página de inicio después de registrar el evento
    navigate('/home');
  };

  return (
    <div className="container">
      <h1>Registrar Evento</h1>
      <form onSubmit={handleSubmit}>
        {/* Nombre del Evento */}
        <div className="form-group">
          <label htmlFor="eventName">Nombre del Evento</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
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
            value={formData.eventDate}
            onChange={handleChange}
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
            value={formData.eventTime}
            onChange={handleChange}
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
            value={formData.eventEndTime}
            onChange={handleChange}
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
            value={formData.eventDescription}
            onChange={handleChange}
            required
          />
        </div>

        {/* Ubicación */}
        <div className="form-group">
          <label htmlFor="eventLocation">Ubicación</label>
          <input
            type="text"
            className="form-control"
            id="eventLocation"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            required
          />
        </div>

        {/* Público */}
        <div className="form-group">
          <label htmlFor="eventPublic">Público</label>
          <select
            className="form-control"
            id="eventPublic"
            name="eventPublic"
            value={formData.eventPublic}
            onChange={handleChange}
            required
          >
            <option value="abierto">Abierto</option>
            <option value="cerrado">Cerrado</option>
          </select>
        </div>

        {/* Modalidad */}
        <div className="form-group">
          <label htmlFor="eventModality">Modalidad</label>
          <select
            className="form-control"
            id="eventModality"
            name="eventModality"
            value={formData.eventModality}
            onChange={handleChange}
            required
          >
            <option value="presencial">Presencial</option>
            <option value="online">Online</option>
            <option value="mixta">Mixta</option>
          </select>
        </div>

        {/* Temática */}
        <div className="form-group">
          <label htmlFor="eventTheme">Temática</label>
          <select
            className="form-control"
            id="eventTheme"
            name="eventTheme"
            value={formData.eventTheme}
            onChange={handleChange}
            required
          >
            <option value="cultura">Cultura, arte y recreación</option>
            <option value="salud">Salud</option>
            <option value="inclusion">Inclusión</option>
            <option value="admision">Admisión</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        {/* Botón de enviar */}
        <button type="submit" className="btn btn-primary">Registrar Evento</button>
      </form>
    </div>
  );
};

export default RegisterPage;
