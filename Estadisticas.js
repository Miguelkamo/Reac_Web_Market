import React, { useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function Estadisticas() {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para generar estadísticas
    console.log('Fecha de inicio:', fechaInicio);
    console.log('Fecha de fin:', fechaFin);
    // Aquí puedes enviar las fechas seleccionadas a tu backend o realizar cualquier otra operación necesaria
  };

  const initializeFlatpickr = () => {
    flatpickr('#fecha-inicio', {
      dateFormat: 'd/m/Y',
      onChange: (selectedDates) => {
        setFechaInicio(selectedDates[0]);
      },
    });

    flatpickr('#fecha-fin', {
      dateFormat: 'd/m/Y',
      onChange: (selectedDates) => {
        setFechaFin(selectedDates[0]);
      },
    });
  };

  React.useEffect(() => {
    initializeFlatpickr();
  }, []);

  return (
    <div>
      <h2>Contenido de Estadísticas</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fecha-inicio">Fecha de Inicio:</label>
        <input type="text" id="fecha-inicio" name="fecha-inicio" placeholder="dd/mm/aaaa" />
        <label htmlFor="fecha-fin">Fecha de Fin:</label>
        <input type="text" id="fecha-fin" name="fecha-fin" placeholder="dd/mm/aaaa" />
        <button type="submit">Generar Estadísticas</button>
      </form>
    </div>
  );
}

export default Estadisticas;