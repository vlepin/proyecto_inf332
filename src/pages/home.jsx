// Home.jsx
import React from 'react';
import EventCard from './EventCard';

import evento1 from '../assets/evento1.jpg';
import evento2 from '../assets/evento2.jpg';
import evento3 from '../assets/evento3.jpg';

const events = [
  {
    name: '1° Festival por la Salud Mental',
    image: evento1, // Usa la imagen importada
    date: '10-11-2024',
    startTime: '19:00',
    endTime: '21:00',
    description: 'Un evento de jazz en vivo...',
    location: 'Auditorio Central',
    audience: 'Abierto',
    modality: 'Presencial',
    theme: 'Cultura, arte y recreación',
  },
  {
    name: 'Operativo de medicina preventiva Campus Casa Central Valparaíso',
    image: evento2, // Usa la imagen importada
    date: '10-11-2024',
    startTime: '19:00',
    endTime: '21:00',
    description: 'Un evento de jazz en vivo...',
    location: 'Auditorio Central',
    audience: 'Abierto',
    modality: 'Presencial',
    theme: 'Cultura, arte y recreación',
  },
  {
    name: 'Feria de la Salud Campus Casa Central Valparaíso',
    image: evento3, // Usa la imagen importada
    date: '10-11-2024',
    startTime: '19:00',
    endTime: '21:00',
    description: 'Un evento de jazz en vivo...',
    location: 'Auditorio Central',
    audience: 'Abierto',
    modality: 'Presencial',
    theme: 'Cultura, arte y recreación',
  },
  {
    name: '1° Festival por la Salud Mental Campus Vitacura',
    image: evento1, // Usa la imagen importada
    date: '10-11-2024',
    startTime: '19:00',
    endTime: '21:00',
    description: 'Un evento de jazz en vivo...',
    location: 'Auditorio Central',
    audience: 'Abierto',
    modality: 'Presencial',
    theme: 'Cultura, arte y recreación',
  },
  {
    name: 'Operativo de medicina preventiva Campus Casa Central Valparaíso',
    image: evento2, // Usa la imagen importada
    date: '10-11-2024',
    startTime: '19:00',
    endTime: '21:00',
    description: 'Un evento de jazz en vivo...',
    location: 'Auditorio Central',
    audience: 'Abierto',
    modality: 'Presencial',
    theme: 'Cultura, arte y recreación',
  },
  {
    name: 'Feria de la Salud Campus Casa Central Valparaíso',
    image: evento3, // Usa la imagen importada
    date: '10-11-2024',
    startTime: '19:00',
    endTime: '21:00',
    description: 'Un evento de jazz en vivo...',
    location: 'Auditorio Central',
    audience: 'Abierto',
    modality: 'Presencial',
    theme: 'Cultura, arte y recreación',
  },
  // Agrega más eventos aquí
];

const Home = () => {
    return (
      <div className="home">
        <div className="event-list">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;