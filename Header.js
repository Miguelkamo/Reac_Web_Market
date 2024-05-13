import React from 'react';

// Componente funcional para el encabezado
const Header = () => {
  return (
    <header>
      {/* Logo */}
      <img src="https://w7.pngwing.com/pngs/670/103/png-transparent-social-media-marketing-digital-marketing-business-digital-infographic-text-service.png" alt="Logo de Market" className="logo-small" />
      {/* Contenido del encabezado */}
      <div className="header-content">
        <h1>Bienvenido a Market</h1>
        <p>Una plataforma líder en marketing digital</p>
      </div>
      {/* Menú de navegación */}
      <nav>
        <ul id="menu">
          {/* Enlaces convertidos en botones */}
          <li><button onClick={() => {}} data-target="inicio">Inicio</button></li>
          <li><button onClick={() => {}} data-target="crear-campanas">Crear Campañas</button></li>
          <li><button onClick={() => {}} data-target="gestion-campanas">Gestión de Campañas</button></li>
          <li><button onClick={() => {}} data-target="estadisticas">Estadísticas</button></li>
          <li><button onClick={() => {}} data-target="perfil">Perfil</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
