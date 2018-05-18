function initMap() {
  const lyonCoord = {lat: 45.7352936, lng: 4.827222};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: lyonCoord
  });
  new GoogleMap(map);
}

/**
 * 1. Afficher le canvas et le bouton réservation lorsque station ouverte et velo dispo
 * 2. Changer la couleur des marqueurs (rouge si fermé, orange si pas de velo dispo et vert si reservation possible)
 * 3. Créer le timer (20 min = 120000) ==> setInterval
 * 4. Commencer à regarder la sessionStorage (pour reprendre une réservation déjà effectuée au rechargement de la page)
 * */
