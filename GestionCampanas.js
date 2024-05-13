import React, { useState } from 'react';

function GestionCampanas() {
  const [filtro, setFiltro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para filtrar y mostrar las campañas
  };

  return (
    <div>
      <h2>Contenido de Gestión de Campañas</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="filtro-campanas">Filtrar Campañas por:</label>
        <select
          id="filtro-campanas"
          name="filtro-campanas"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="nombre">Nombre</option>
          <option value="fecha">Fecha</option>
          <option value="estado">Estado</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default GestionCampanas;