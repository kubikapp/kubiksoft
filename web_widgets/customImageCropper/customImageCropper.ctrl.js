function($scope) {
    $scope.myImage='';
    $scope.properties.value='';
    $scope.properties.failedResponse = 'Empty File';
    
    if($scope.properties.areaType=="rectangle"){
        $scope.width = 1024;
        $scope.height = 300;
        $scope.ratio = 3.4;
    }
    else{
        $scope.width = 512;
        $scope.height = 512;
        $scope.ratio = 1;
    }
        
    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage = evt.target.result;
          
          if($scope.myImage.indexOf("data:image")<0){$scope.properties.failedResponse = "File must be image";}
          else{$scope.properties.failedResponse = '';}
          
        });
      };
      reader.readAsDataURL(file);
      
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
  }