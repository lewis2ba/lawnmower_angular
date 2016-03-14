"use strict";

(function(){
  angular
  .module("lawnMowering",[
    "ui.router",
    "customer",
    "technician",
    "invoice",
    "mowing"
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
    .state("technicianNew",{
      url:"/technicians/new",
      templateUrl: "js/technicians/new.html",
      controller: "TechnicianNewController",
      controllerAs: "TechnicianNewViewModel"
    })
    .state("mowingNew",{
      url:'/mowings/new',
      templateUrl: 'js/mowings/new.html',
      controller: "MowingNewController",
      controllerAs: "MowingNewViewModel"
    })
    .state("mowingIndex",{
      url:'/mowings',
      templateUrl: 'js/mowings/index.html',
      controller: "MowingIndexController",
      controllerAs: "MowingIndexViewModel"
    })
    .state("invoiceNew",{
      url:"/invoices/new",
      templateUrl: "js/invoices/new.html",
      controller: "InvoiceNewController",
      controllerAs: "InvoiceNewViewModel"
    })
    .state("invoiceIndex",{
      url:"/invoices",
      templateUrl: "js/invoices/index.html",
      controller: "InvoiceIndexController",
      controllerAs: "InvoiceIndexViewModel"
    })
  }
}())
