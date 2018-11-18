function myMap() {

  //// 지도 그리기
  var mapProp= {
      center:new google.maps.LatLng(37.463651, 126.954269), //지도 중앙값 
      zoom:15,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  //// 마커 표시하기
  var marker = new google.maps.Marker({
    position: {lat: 37.463651, lng: 126.954269},
    animation:google.maps.Animation.BOUNCE
  });

  marker.setMap(map);

  //// 선그리기
  /*
  var pos1 = {lat: 37.463965, lng: 126.955160};
  var pos2 = {lat: 37.463651, lng: 126.954269};
  var pos3 = {lat: 37.463841, lng: 126.954022};

  var myTrip = [pos1, pos2, pos3];
  var flightPath = new google.maps.Polyline({
    path:myTrip,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2
  });


  flightPath.setMap(map);
  */
}



