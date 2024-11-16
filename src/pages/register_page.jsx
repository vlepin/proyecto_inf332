import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    eventTicket: 'gratuito',
    eventModality: 'presencial',
    eventTheme: 'cultura',
    eventImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del evento:', formData);
    alert("¡Evento registrado con éxito!");
    navigate('/home');
  };

  return (
    <div className="container">
      <h1>Registrar Evento</h1>
      <form onSubmit={handleSubmit}>
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

        <div className="form-row">
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
        </div>

        <div className="form-group">
          <label htmlFor="eventDescription">Descripción</label>
          <textarea
            className="form-control"
            id="eventDescription"
            name="eventDescription"
            rows="2"
            value={formData.eventDescription}
            onChange={handleChange}
            required
          />
        </div>

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

        <div className="form-row">
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

        {/* Entrada */}
                <div className="form-group">
                    <label htmlFor="eventTicket">Entrada</label>
                    <select className="form-control" id="eventTicket" name="eventTicket" value={formData.eventTicket} onChange={handleChange} required>
                        <option value="gratuito">Entrada gratuita</option>
                        <option value="pagado">Entrada con cargo</option>
                    </select>
        </div>

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
        </div>

        <div className="form-group">
          <label htmlFor="eventImage">Imagen del Evento</label>
          <input
            type="file"
            className="form-control"
            id="eventImage"
            name="eventImage"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <button type="submit" className="btn btn-primary">Registrar Evento</button>
      </form>
    </div>
  );
};

export default RegisterPage;
