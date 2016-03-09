"use strict";

(function(){
  angular
  .module("customer")
  .controller("CustomerShowController",[
    "CustomerFactory",
    "$stateParams",
    CustomerShowControllerFunction
  ]);

  function CustomerShowControllerFunction(CustomerFactory, $stateParams){
    this.customer = CustomerFactory.get({id:$stateParams.id})
    console.log(this.customer)
  }
}())
