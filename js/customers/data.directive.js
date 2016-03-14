(function(){
  angular
  .module("customer")
  .directive("dataDirective", [
    '$http',
    function($http){
      return{
        templateUrl: 'js/customers/_info_form.html',
        replace:true,
      link: function(scope){
        scope.showTechnicianData = function(){
          $http({
            method: "GET",
            url: 'http://localhost:3000/technicians'
          }).then(function(response){
            $(".data").empty()
            for(var i = 0; i<response.data.length;i++){
            $(".data").append("<p>Name: " + response.data[i].name + ", ID #: " + response.data[i].id+"</p>")
          }
          })
        },
        scope.showCustomerData = function(){
          $http({
            method:"GET",
            url: 'http://localhost:3000/customers'
          }).then(function(response){
            $(".data").empty()
            for(var i = 0; i<response.data.length;i++){
              console.log(response.data)
            $(".data").append("<p>Name: " + response.data[i].name + ", ID #: " + response.data[i].id+", Address: " + response.data[i].address + "</p>")
          }
          })
        },
        scope.showMowData = function(){
          $http({
            method: 'GET',
            url: 'http://localhost:3000/mowings'
          }).then(function(response){
            $(".data").empty()
            for(var i = 0; i<response.data.length;i++){
              console.log(response.data)
            $(".data").append("<p>Mow ID: " + response.data[i].id + ", Customer ID #: " + response.data[i].customer_id+", Technician ID #: " + response.data[i].customer_id + "</p>")
          }          })
        }
      }
    }
  }
])
}())
