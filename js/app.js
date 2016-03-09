"use strict";

(function(){
  angular
  .module("lawnMowering",[
    "ui.router",
    "customer",
    "technician"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("customerIndex",{
      url:"/customers",
      templateUrl: "js/customers/index.html",
      controller: "CustomerIndexController",
      controllerAs: "CustomerIndexViewModel"
    })
    .state("customerNew",{
      url:"/customers/new",
      templateUrl:"js/customers/new.html",
      controller: "CustomerNewController",
      controllerAs: "CustomerNewViewModel"
    })
    .state("customerShow",{
      url:"/customers/:id",
      templateUrl:"js/customers/show.html",
      controller: "CustomerShowController",
      controllerAs: "CustomerShowViewModel"
    })
    .state("technicianIndex",{
      url:"/technicians",
      templateUrl: "js/technicians/index.html",
      controller: "TechnicianIndexController",
      controllerAs: "TechnicianIndexViewModel"
    })
  }
}())
