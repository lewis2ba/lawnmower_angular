"use strict";

(function(){
  angular
    .module( "customer" )
    .factory( "CustomerFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/customers/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
