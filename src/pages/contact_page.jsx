import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/layout/contact_page.scss';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '', // Nuevo campo para el número de contacto
    eventName: '', // Asegúrate de que este campo esté incluido
    eventDate: '',
    eventTime: '', 
    eventEndTime: '',
    eventDescription: '',
    eventLocation: '',
    eventPublic: 'abierto', // Valor por defecto
    eventTicket: 'gratuito', 
    eventModality: 'presencial', // Valor por defecto
    eventTheme: 'cultura', // Valor por defecto
    eventImage: null, // Estado para la imagen
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0] // Guarda el archivo de imagen seleccionado
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del contacto:', formData);
    alert("¡Formulario enviado con éxito!");

    // Aquí puedes agregar la lógica para manejar la imagen o enviarla a un servidor

    // Redirige a la página de inicio después de enviar el formulario
    navigate('/home');
  };

  return (
    <div className="container">
      <h1>Formulario de Publicación</h1>
      <form onSubmit={handleSubmit}>
      <h2>Información de contacto del Organizador</h2>

        {/* Nombre */}
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Número de Contacto */}
        <div className="form-group">
          <label htmlFor="contactNumber">Número de Contacto</label>
          <input
            type="tel" // Cambia a 'tel' para aceptar números de teléfono
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            placeholder="Ej: +56999999999" // Placeholder opcional
          />
        </div>
        </div>

        <h2>Información del evento</h2>

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

        <div className="form-row">
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
        </div>

        {/* Descripción */}
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

        <div className="form-row">
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

        {/* Entrada */}
        <div className="form-group">
                    <label htmlFor="eventTicket">Entrada</label>
                    <select className="form-control" id="eventTicket" name="eventTicket" value={formData.eventTicket} onChange={handleChange} required>
                        <option value="gratuito">Entrada gratuita</option>
                        <option value="pagado">Entrada con cargo</option>
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
        </div>

        {/* Imagen del evento */}
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

        {/* Botón de enviar */}
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
