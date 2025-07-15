document.addEventListener('DOMContentLoaded', function () {
  const temaBtn = document.getElementById('temaBtn');
  const temaIcono = document.getElementById('temaIcono');
  const body = document.body;
  const textoBanner = document.getElementById('texto-banner');

  const fraseClaro = 'Vive tu día sin dejar de ser vos';
  const fraseOscuro = 'Porque la noche merece tu mejor versión';

  // Verifica tema guardado
  if (localStorage.getItem('tema') === 'oscuro') {
    body.classList.add('tema-oscuro');
    temaIcono.classList.remove('fa-moon');
    temaIcono.classList.add('fa-sun');
    if (textoBanner) textoBanner.textContent = fraseOscuro;
  } else {
    if (textoBanner) textoBanner.textContent = fraseClaro;
  }

  temaBtn.addEventListener('click', function () {
    body.classList.toggle('tema-oscuro');
    const oscuro = body.classList.contains('tema-oscuro');
    temaIcono.classList.toggle('fa-moon', !oscuro);
    temaIcono.classList.toggle('fa-sun', oscuro);
    localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');

    if (textoBanner) {
      textoBanner.textContent = oscuro ? fraseOscuro : fraseClaro;
    }
  });
});