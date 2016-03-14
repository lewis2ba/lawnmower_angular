"use strict";

(function(){
  angular
  .module("invoice")
  .controller("InvoiceIndexController",[
    "InvoiceFactory",
    "$stateParams",
    InvoiceIndexControllerFunction])

    function InvoiceIndexControllerFunction(InvoiceFactory, $stateParams){
      this.invoices = InvoiceFactory.query()
    }
}())
