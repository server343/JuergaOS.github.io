// La descarga estará disponible cuando se publique el archivo oficial.
document.querySelector('.download-button').addEventListener('click', () => {});

// Reseñas ficticias para previsualizar el diseño; sustituir por datos verificables.
const names = ['Ana', 'Carlos', 'María', 'Javier', 'Elena', 'Pablo', 'Marta', 'David', 'Laura', 'Álex', 'Nuria', 'Sergio', 'Clara', 'Miguel', 'Irene', 'Raúl', 'Alba', 'Nicolás', 'Paula', 'Adrián', 'Sofía'];
const initials = ['R.', 'L.', 'G.', 'M.', 'V.', 'S.', 'P.'];
const phrases = [
  'La interfaz es clara y resulta fácil moverse por el escritorio.',
  'Me gusta el aspecto oscuro y cómo están organizadas las aplicaciones.',
  'Un diseño agradable para trabajar y tener todo a mano.',
  'El menú es sencillo y el escritorio tiene una personalidad propia.',
  'Los colores son cómodos y la distribución se entiende enseguida.',
  'Me resulta familiar y me gusta que el diseño sea tan limpio.',
  'Una propuesta interesante, con detalles visuales muy cuidados.',
];
const reviews = document.querySelector('.reviews');
const next = document.querySelector('#review-next');
const count = document.querySelector('#review-count');
let shown = 3;
next.addEventListener('click', () => {
  const end = Math.min(shown + 9, 147);
  for (let index = shown; index < end; index++) {
    const name = `${names[index % names.length]} ${initials[Math.floor(index / names.length) % initials.length]}`;
    const review = document.createElement('article');
    const stars = document.createElement('div'); stars.className = 'stars'; stars.textContent = '★★★★★';
    const quote = document.createElement('p'); quote.textContent = `«${phrases[index % phrases.length]}»`;
    const person = document.createElement('div'); person.className = 'review-person';
    const avatar = document.createElement('i'); avatar.textContent = name[0] + name.split(' ')[1][0];
    const info = document.createElement('span'); const author = document.createElement('b'); author.textContent = name;
    const label = document.createElement('small'); label.textContent = 'Usuario de Juerga OS';
    info.append(author, label); person.append(avatar, info); review.append(stars, quote, person); reviews.append(review);
  }
  shown = end; count.textContent = `Mostrando ${shown} de 147 opiniones`;
  if (shown === 147) next.hidden = true;
});
