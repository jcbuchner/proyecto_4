// FormularioContacto.js
import React, { useState } from 'react';
import './FormularioContacto.css';
// import 'FormularioContacto.css';

const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando formulario de contacto:', nombre, email, mensaje);
    // Lógica para enviar el formulario de contacto
  };

  return (
    <div class="contact_form">

      <div class="formulario" id='contactanos'>
        <h1>Formulario de contacto</h1>
        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>


        <form action="submeter-formulario.php" method="post">


          <p>
            <label for="nombre" class="colocar_nombre">Nombre:
            </label>
            <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"></input>
          </p>

          <p>
            <label for="email" class="colocar_email">Email:
            </label>
            <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"></input>
          </p>

          <p>
            <label for="telefone" class="colocar_telefono">Teléfono:
            </label>
            <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"></input>
          </p>

          <p>
            <label for="website" class="colocar_website">Sitio web:
            </label>
            <input type="url" name="introducir_website" id="website" placeholder="Escribe la URL de tu web"></input>
          </p>

          <p>
            <label for="asunto" class="colocar_asunto">Asunto:
            </label>
            <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"></input>
          </p>

          <p>
            <label for="mensaje" class="colocar_mensaje">Mensaje:

            </label>
            <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea>
          </p>

          <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>


        </form>
      </div>
    </div>
  )



};

export default FormularioContacto;
