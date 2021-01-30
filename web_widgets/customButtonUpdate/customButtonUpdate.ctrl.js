function ($scope,modalService) {
    
    $scope.update = function(){
        $scope.properties.value = $scope.properties.newValue;
        
        if($scope.properties.openModal===true){
            openModal($scope.properties.modalId);
        }
        
        closeModal($scope.properties.closeOnSuccess);
    };
    
    function openModal(modalId) {
        modalService.open(modalId);
    }
    
    function closeModal(shouldClose) {
        if(shouldClose)
          modalService.close();
      }
}