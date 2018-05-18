class GoogleMap {
  constructor(map) {
    this.map = map;
    this.initMarkers();
  }

  initMarkers() {
    $.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=3921ff9d311bb8bb75d1c072d331c4987af28732') // Promesse
      .then((data) => {
        // Syntaxe avec une boucle classique
        /*const markers = [];
        for(let i = 0; i < data.length; i++){
          const marker = new google.maps.Marker({
            position: data[i].position,
            map: this.map
          });
          markers.push(marker);
        }*/
        // Syntaxe en utilisant un map
        const markers = data.map((station) => {
          return new google.maps.Marker({
            map: this.map,
          });
        });
        new MarkerClusterer(this.map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }, function (err) {
        console.log(err)
      });
  }

	
infoStation(station){
	google.maps.Markers.addlistener(markers, "click",function(){
		this.station = station;
		const reserver = document.querySelector(".reserver");
		const info = document.querySelector(".informations");
		const confirmation = document.querySelector(".confirmation"); 

		reserver.style.display ="block";
		info.style.display = "block";
		confirmation.style.display = "none";
				
		if(station.status === "OPEN"){
			Station.status = "OUVERTE";
		}else if(station.status === "CLOSE"){
			station.status = "FERMEE";}
		
		console.log(station);

		
      info.innerHTML = `
          <p>Adresse : <span>${station.address}</span><p>
          <p>État de la station: <span>${station.status}</span></p>
        `;
	})
}
}

/**
 * 1. Créer des évènements click sur chaque marker (creuser dans la doc de Google API)
 * 2. Pour chaque marker cliqué, afficher le détail de la station (adresse, vélos dispos, places dispos et état de la station) dans le panneau de réservation
 * 3. Créer l'évènement click sur le bouton Valider pour confirmer la réservation
 */
