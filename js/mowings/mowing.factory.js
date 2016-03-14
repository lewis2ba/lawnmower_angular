"use strict";

(function(){
  angular
    .module( "mowing" )
    .factory( "MowingFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/mowings/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
