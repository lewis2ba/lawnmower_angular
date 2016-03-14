"use strict";

(function(){
  angular
  .module("invoice")
  .controller("InvoiceNewController",[
    "InvoiceFactory",
    "$stateParams",
    "$state",
    InvoiceNewControllerFunction])

    function InvoiceNewControllerFunction(InvoiceFactory, $stateParams, $state){
      this.invoice = new InvoiceFactory();
      this.create = function(){
        this.invoice.$save(function(response){
          $state.go("invoiceIndex")
        })
      }
    }
}())
