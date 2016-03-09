"use strict";

(function(){
  angular
  .module("customer")
  .controller("CustomerIndexController",[
    "CustomerFactory",
    "$stateParams",
    CustomerIndexControllerFunction])

    function CustomerIndexControllerFunction(CustomerFactory, $stateParams){
      this.customers = CustomerFactory.query()
    }
}())
