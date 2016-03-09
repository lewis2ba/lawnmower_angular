"use strict";

(function(){
  angular
  .module("customer")
  .controller("CustomerNewController",[
    "CustomerFactory",
    "$stateParams",
    "$state",
    CustomerNewControllerFunction])

    function CustomerNewControllerFunction(CustomerFactory, $stateParams, $state){
      this.customer = new CustomerFactory();
      this.create = function(){
        this.customer.$save(function(response){
          $state.go("customerIndex")
        })
      }
    }
}())
