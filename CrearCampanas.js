import React from 'react';

function CrearCampanas() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para crear una nueva campaña
  };

  return (
    <div>
      <h2>Contenido de Crear Campañas</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre-campana">Nombre de la Campaña:</label>
        <input type="text" id="nombre-campana" name="nombre-campana" required />
        <label htmlFor="descripcion-campana">Descripción:</label>
        <textarea id="descripcion-campana" name="descripcion-campana" required></textarea>
        <button type="submit">Crear Campaña</button>
      </form>
    </div>
  );
}

export default CrearCampanas;