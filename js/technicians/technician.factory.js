"use strict";

(function(){
  angular
    .module( "technician" )
    .factory( "TechnicianFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/technicians/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
