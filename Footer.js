import React from 'react';

// Componente funcional para el pie de página
const Footer = () => {
  return (
    <footer>
      {/* Lista de enlaces convertidos en botones */}
      <ul>
        <li><button onClick={() => {}}>Términos de Servicio</button></li>
        <li><button onClick={() => {}}>Política de Privacidad</button></li>
        <li><button onClick={() => {}}>Contacto</button></li>
      </ul>
      {/* Derechos de autor */}
      <p>&copy; 2024 Market. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
