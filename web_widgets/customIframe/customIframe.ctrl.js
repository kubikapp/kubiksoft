function($scope,$sce){
    
    $scope.url = $sce.trustAsResourceUrl($scope.properties.URL);
}