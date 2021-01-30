function ($scope) {
    $scope.add = function(){
        $scope.properties.listResult.push($scope.properties.selectedSource);
        $scope.properties.listSource.splice($scope.properties.listSource.indexOf($scope.properties.selectedSource),1);
    };
    $scope.remove = function(){
        $scope.properties.listSource.push($scope.properties.selectedResult);
        $scope.properties.listResult.splice($scope.properties.listResult.indexOf($scope.properties.selectedResult),1);
    };
}