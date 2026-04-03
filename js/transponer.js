const subir = document.getElementById('subir');
const bajar = document.getElementById('bajar');
const acordes = document.querySelector('.chords');
const parrafoTonalidad = document.querySelectorAll('.info p')[1];
const tonalidadesBemoles =['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm'];
let cambioTonos = 0;

const aMarcadores = (str) => {
  str = str.replace(/\bC#/g, '__Do_S__').replace(/\bDb/g, '__Do_S__')
           .replace(/\bD#/g, '__Re_S__').replace(/\bEb/g, '__Re_S__')
           .replace(/\bF#/g, '__Fa_S__').replace(/\bGb/g, '__Fa_S__')
           .replace(/\bG#/g, '__Sol_S__').replace(/\bAb/g, '__Sol_S__')
           .replace(/\bA#/g, '__La_S__').replace(/\bBb/g, '__La_S__');

  str = str.replace(/\bC(?=\s|-|<|\/|m|maj|dim|aug|sus|add|\d|$)/g, '__Do__')
           .replace(/\bD(?=\s|-|<|\/|m|maj|dim|aug|sus|add|\d|$)/g, '__Re__')
           .replace(/\bE(?=\s|-|<|\/|m|maj|dim|aug|sus|add|\d|$)/g, '__Mi__')
           .replace(/\bF(?=\s|-|<|\/|m|maj|dim|aug|sus|add|\d|$)/g, '__Fa__')
           .replace(/\bG(?=\s|-|<|\/|m|maj|dim|aug|sus|add|\d|$)/g, '__Sol__')
           .replace(/\bA(?=\s|-|<|\/|m|maj|dim|aug|sus|add|\d|$)/g, '__La__')
           .replace(/\bB(?=\s|-|<|\/|m|maj|dim|aug|sus|add|\d|$)/g, '__Si__');
  return str;
};

subir.addEventListener('click', () => {
  let texto = aMarcadores(acordes.innerHTML);
  let nuevaTonalidad = aMarcadores(parrafoTonalidad.innerText).split(' ')[0];
  nuevaTonalidad = nuevaTonalidad.replace(/__Si__/g, 'C').replace(/__La_S__/g, 'B').replace(/__La__/g, 'A#')
                                 .replace(/__Sol_S__/g, 'A').replace(/__Sol__/g, 'G#').replace(/__Fa_S__/g, 'G')
                                 .replace(/__Fa__/g, 'F#').replace(/__Mi__/g, 'F').replace(/__Re_S__/g, 'E')
                                 .replace(/__Re__/g, 'D#').replace(/__Do_S__/g, 'D').replace(/__Do__/g, 'C#');

  if (nuevaTonalidad === 'A#') nuevaTonalidad = 'Bb';
  else if (nuevaTonalidad === 'D#') nuevaTonalidad = 'Eb';
  else if (nuevaTonalidad === 'G#') nuevaTonalidad = 'Ab';
  else if (nuevaTonalidad === 'C#') nuevaTonalidad = 'Db';
  else if (nuevaTonalidad === 'A#m') nuevaTonalidad = 'Bbm';
  else if (nuevaTonalidad === 'D#m') nuevaTonalidad = 'Ebm';

  let usarBemoles = tonalidadesBemoles.includes(nuevaTonalidad);
  if (usarBemoles) {
    texto = texto.replace(/__Si__/g, 'C').replace(/__La_S__/g, 'B').replace(/__La__/g, 'Bb')
                 .replace(/__Sol_S__/g, 'A').replace(/__Sol__/g, 'Ab').replace(/__Fa_S__/g, 'G')
                 .replace(/__Fa__/g, 'Gb').replace(/__Mi__/g, 'F').replace(/__Re_S__/g, 'E')
                 .replace(/__Re__/g, 'Eb').replace(/__Do_S__/g, 'D').replace(/__Do__/g, 'Db');
  } else {
    texto = texto.replace(/__Si__/g, 'C').replace(/__La_S__/g, 'B').replace(/__La__/g, 'A#')
                 .replace(/__Sol_S__/g, 'A').replace(/__Sol__/g, 'G#').replace(/__Fa_S__/g, 'G')
                 .replace(/__Fa__/g, 'F#').replace(/__Mi__/g, 'F').replace(/__Re_S__/g, 'E')
                 .replace(/__Re__/g, 'D#').replace(/__Do_S__/g, 'D').replace(/__Do__/g, 'C#');
  }

  cambioTonos++;
  const audio = document.getElementById('audio');
  audio.playbackRate = Math.pow(2, cambioTonos/12);
  acordes.innerHTML = texto;
  if (cambioTonos > 0) mostrarCambio = ` (+${cambioTonos})`;
  else if (cambioTonos < 0) mostrarCambio = ` (${cambioTonos})`;
  else mostrarCambio = ``;
  parrafoTonalidad.innerText = nuevaTonalidad + mostrarCambio;
});


bajar.addEventListener('click', () => {
  let texto = aMarcadores(acordes.innerHTML);
  let nuevaTonalidad = aMarcadores(parrafoTonalidad.innerText).split(' ')[0];
  nuevaTonalidad = nuevaTonalidad.replace(/__Si__/g, 'A#').replace(/__La_S__/g, 'A').replace(/__La__/g, 'G#')
                                 .replace(/__Sol_S__/g, 'G').replace(/__Sol__/g, 'F#').replace(/__Fa_S__/g, 'F')
                                 .replace(/__Fa__/g, 'E').replace(/__Mi__/g, 'D#').replace(/__Re_S__/g, 'D')
                                 .replace(/__Re__/g, 'C#').replace(/__Do_S__/g, 'C').replace(/__Do__/g, 'B');

  if (nuevaTonalidad === 'A#') nuevaTonalidad = 'Bb';
  else if (nuevaTonalidad === 'D#') nuevaTonalidad = 'Eb';
  else if (nuevaTonalidad === 'G#') nuevaTonalidad = 'Ab';
  else if (nuevaTonalidad === 'C#') nuevaTonalidad = 'Db';
  else if (nuevaTonalidad === 'A#m') nuevaTonalidad = 'Bbm';
  else if (nuevaTonalidad === 'D#m') nuevaTonalidad = 'Ebm';

  let usarBemoles = tonalidadesBemoles.includes(nuevaTonalidad);
  if (usarBemoles) {
    texto = texto.replace(/__Si__/g, 'Bb').replace(/__La_S__/g, 'A').replace(/__La__/g, 'Ab')
                 .replace(/__Sol_S__/g, 'G').replace(/__Sol__/g, 'Gb').replace(/__Fa_S__/g, 'F')
                 .replace(/__Fa__/g, 'E').replace(/__Mi__/g, 'Eb').replace(/__Re_S__/g, 'D')
                 .replace(/__Re__/g, 'Db').replace(/__Do_S__/g, 'C').replace(/__Do__/g, 'B');
  } else {
    texto = texto.replace(/__Si__/g, 'A#').replace(/__La_S__/g, 'A').replace(/__La__/g, 'G#')
                 .replace(/__Sol_S__/g, 'G').replace(/__Sol__/g, 'F#').replace(/__Fa_S__/g, 'F')
                 .replace(/__Fa__/g, 'E').replace(/__Mi__/g, 'D#').replace(/__Re_S__/g, 'D')
                 .replace(/__Re__/g, 'C#').replace(/__Do_S__/g, 'C').replace(/__Do__/g, 'B');
  }

  cambioTonos--;
  const audio = document.getElementById('audio');
  audio.playbackRate = Math.pow(2, cambioTonos/12);
  acordes.innerHTML = texto;
  if (cambioTonos > 0) mostrarCambio = ` (+${cambioTonos})`;
  else if (cambioTonos < 0) mostrarCambio = ` (${cambioTonos})`;
  else mostrarCambio = ``;
  parrafoTonalidad.innerText = nuevaTonalidad + mostrarCambio;
});
