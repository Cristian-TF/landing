import React, { useState } from 'react';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [texto, setTexto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre: ${nombre}\nCorreo: ${correo}\nTexto: ${texto}`);
  }

  return (
    <div>
      <h1>Formulario de contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" placeholder="Escriba su nombre aquí" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        </label>
        <br />
        <label>
          Correo:
          <input type="email" placeholder="Escriba su correo aquí" value={correo} onChange={(event) => setCorreo(event.target.value)} />
        </label>
        <br />
        <textarea placeholder="Escriba su mensaje aquí" value={texto} onChange={(event) => setTexto(event.target.value)} />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form;
