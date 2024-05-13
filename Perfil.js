import React, { useState } from 'react';

function Perfil() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar los cambios de perfil
  };

  return (
    <div>
      <h2>Contenido de Perfil</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre-usuario">Nombre de Usuario:</label>
        <input
          type="text"
          id="nombre-usuario"
          name="nombre-usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default Perfil;