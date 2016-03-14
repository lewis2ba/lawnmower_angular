"use strict";

(function(){
  angular
    .module( "invoice" )
    .factory( "InvoiceFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/invoices/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
