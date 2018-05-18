function initMap() {
  const lyonCoord = {lat: 45.7352936, lng: 4.827222};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: lyonCoord
  });
  new GoogleMap(map);
}
