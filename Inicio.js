import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// Configura Firebase con tus credenciales
const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_STORAGE_BUCKET',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: 'TU_APP_ID',
};

firebase.initializeApp(firebaseConfig);

function Inicio() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  const registrarmeConGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // El usuario se ha autenticado correctamente
        const user = result.user;
        console.log('Usuario autenticado:', user);
        // Aquí puedes agregar la lógica adicional después de la autenticación
      })
      .catch((error) => {
        // Ocurrió un error durante la autenticación
        console.error('Error de autenticación:', error);
      });
  };

  return (
    <div>
      <h2>Contenido de Inicio</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <button className="google-btn" onClick={registrarmeConGoogle}>
        Registrarme con Google
      </button>
    </div>
  );
}

export default Inicio;