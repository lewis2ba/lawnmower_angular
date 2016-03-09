"use strict";

(function(){
  angular
  .module("lawnMowering",[
    "ui.router",
    "customer"
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
  }
}())
