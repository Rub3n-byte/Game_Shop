document.addEventListener("DOMContentLoaded", function() {
  // Get references to cards
  const campaignCard = document.querySelector(".campaign");
  const multiplayerCard = document.querySelector(".multiplayer");
  const zombiesCard = document.querySelector(".zombies");

  // Get references to extra content elements
  const camExtra = document.querySelector(".cam_2");
  const mpExtra = document.querySelector(".mp_2");
  const zomExtra = document.querySelector(".zom_2");

  // Helper function to hide all extra sections
  function hideAllExtras() {
    camExtra.style.display = "none";
    mpExtra.style.display = "none";
    zomExtra.style.display = "none";
  }

  // Add click listeners to each card
  campaignCard.addEventListener("click", function(e) {
    e.stopPropagation();  // Prevent the event from bubbling up
    hideAllExtras();
    camExtra.style.display = "block";
  });

  multiplayerCard.addEventListener("click", function(e) {
    e.stopPropagation();
    hideAllExtras();
    mpExtra.style.display = "block";
  });

  zombiesCard.addEventListener("click", function(e) {
    e.stopPropagation();
    hideAllExtras();
    zomExtra.style.display = "block";
  });

  // Optionally, clicking anywhere outside hides the extra content
  document.addEventListener("click", function() {
    hideAllExtras();
  });
});
