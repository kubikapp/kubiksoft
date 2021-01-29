function($scope){
    
    $scope.clicked = function(){
        var bool = ($scope.properties.value.toString()=="true");
        bool = !bool;
        $scope.properties.value = bool;
    };
    
    $scope.isTrue = function(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
            return true;
        default: 
            return false;
        }
    };
}