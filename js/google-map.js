class GoogleMap {
  constructor(map) {
    this.map = map;
    this.initMarkers();
    this.initEvents();
  }

  initEvents(){
    const reserverButton = document.querySelector('#book-btn');
    reserverButton.addEventListener('click', () => {
      new ReservationStatus(this.station);
    })
  }

  initMarkers() {
    $.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=3921ff9d311bb8bb75d1c072d331c4987af28732') // Promesse
      .then((data) => {
        // Syntaxe en utilisant un map
        const markers = data.map((station) => {
          const marker = new google.maps.Marker({
            map: this.map,
            position: station.position
          });
          this.createMarkerListener(marker, station);
          return marker;
        });
        new MarkerClusterer(this.map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }, function (err) {
        console.log(err)
      });
  }


  createMarkerListener(marker, station) {
    marker.addListener('click', () => {
      this.station = station;
      const reserver = document.querySelector(".reserver");
      const info = document.querySelector(".informations");
      reserver.style.display = "block";
      info.style.display = "block";
      info.innerHTML = `
          <p>Adresse : <span>${station.address}</span><p>
          <p>Nb de places : <span>${station.available_bike_stands}</span><p>
          <p>Nb de places disponibles: <span>${station.available_bikes}</span><p>
          <p>État de la station: <span>${this.translateStatus(station.status)}</span></p>
        `;
    });
  }

  translateStatus(status) {
    if (status === 'OPEN') {
      return 'OUVERTE';
    }
    return 'FERMEE';
  }
}
