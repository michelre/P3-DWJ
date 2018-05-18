class ReservationStatus {

  constructor(station){
    this.station = station;
    this.displayStationInfo();
  }

  displayStationInfo(){
    if(!this.station){
      $('.reservation-status').hide();
    } else {
      $('.reservation-status').show();
    }
    $('#confirm-address').text(this.station.address);
    $('#rest-time').text('20:00');
  }

}
