// ReservaMesa.js
import React, { useState } from 'react';
import './FormularioContacto.css';

const ReservaMesa = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservando mesa:', nombre, fecha, hora);
    // Lógica para reservar mesa
  };

  return (
    
    <section className="reserva-mesa" id="reservita">
      <h1>Reserva de Mesa</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <input type="time" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
        </div>
        <button type="submit"><p>Reservar</p></button>
      </form>
    </section>
  );
};

export default ReservaMesa;
