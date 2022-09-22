import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
      className='imagen-testimonio'
      src={require('../imagenes/testimonio-emma.png')}
      alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
      <p className'nombre-testimonio'><strong>Emma Bostian</strong> en Suecia</p>
      <p className='cargo-testimonio'>Software Engineer at <strong>Spotify</strong></p>
      <p className='texto-testimonio'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>

    </div>
  );
};
