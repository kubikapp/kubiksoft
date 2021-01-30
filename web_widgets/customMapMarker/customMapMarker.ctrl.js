function($scope){
    /*
    $scope.initPos = { "lat": -1.1304943, "lng": 117.5140357 };
    */
    
    $scope.initPos = { "lat" : 0.0010, "lng":109.3222};
    
    if($scope.properties.position.lat!==null && $scope.properties.position.lng!==null){
        $scope.initPos.lat = $scope.properties.position.lat;
        $scope.initPos.lng = $scope.properties.position.lng;
    }
    
    $scope.map = new google.maps.Map(document.getElementById('map'),{
          zoom: 5,
          center: $scope.initPos,
        });
    $scope.marker = new google.maps.Marker();
    /*$scope.properties.position = $scope.initPos;*/
    
    // Add a marker at the center of the map.
    setMarker($scope.initPos,$scope.map);
        
    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener($scope.map,'click', function(event) {
        setMarker(event.latLng,$scope.map);
        setPosition(event.latLng);
    });

    // Adds a marker to the map.
    function setMarker(location,map) {
        
        // Add the marker at the clicked location, and add the next-available label
        
        $scope.marker.setPosition(location);
        $scope.marker.setMap(map);
     }
        
    function setPosition(position){
        var lat = position.lat();
        var lng = position.lng();
        
        $scope.properties.position.lat = lat;
        $scope.properties.position.lng = lng;
    }
 
    google.maps.event.addDomListener(window, 'load', initialize);
}