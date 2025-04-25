document.addEventListener("DOMContentLoaded", function() {
  // Espera a que el contenido HTML esté completamente cargado antes de ejecutar el código

  // Obtener referencias a las tarjetas (cards) principales
  const campaignCard = document.querySelector(".campaign");
  // Tarjeta de la campaña

  const multiplayerCard = document.querySelector(".multiplayer");
  // Tarjeta del modo multijugador

  const zombiesCard = document.querySelector(".zombies");
  // Tarjeta del modo zombies

  // Obtener referencias a los elementos de contenido extra
  const camExtra = document.querySelector(".cam_2");
  // Contenido adicional de la campaña

  const mpExtra = document.querySelector(".mp_2");
  // Contenido adicional del multijugador

  const zomExtra = document.querySelector(".zom_2");
  // Contenido adicional del modo zombies

  // Función de ayuda para ocultar todos los contenidos extra
  function hideAllExtras() {
    camExtra.style.display = "none";
    mpExtra.style.display = "none";
    zomExtra.style.display = "none";
    // Oculta todos los bloques de contenido adicional
  }

  // Añadir evento de clic a la tarjeta de campaña
  campaignCard.addEventListener("click", function(e) {
    e.stopPropagation();  
    // Evita que el evento se propague al documento (para que no se oculte el contenido al hacer clic)

    hideAllExtras();
    // Oculta todos los demás contenidos extra

    camExtra.style.display = "block";
    // Muestra el contenido extra de la campaña
  });

  // Añadir evento de clic a la tarjeta de multijugador
  multiplayerCard.addEventListener("click", function(e) {
    e.stopPropagation();
    hideAllExtras();
    mpExtra.style.display = "block";
    // Muestra el contenido extra del multijugador
  });

  // Añadir evento de clic a la tarjeta de zombies
  zombiesCard.addEventListener("click", function(e) {
    e.stopPropagation();
    hideAllExtras();
    zomExtra.style.display = "block";
    // Muestra el contenido extra del modo zombies
  });

  // Opcionalmente, al hacer clic en cualquier parte fuera de las tarjetas, se oculta el contenido extra
  document.addEventListener("click", function() {
    hideAllExtras();
    // Oculta todo el contenido adicional si se hace clic fuera de las tarjetas
  });
});
