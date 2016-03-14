"use strict";

(function(){
  angular
  .module("technician")
  .controller("TechnicianNewController",[
    "TechnicianFactory",
    "$stateParams",
    "$state",
    TechnicianNewControllerFunction])

    function TechnicianNewControllerFunction(TechnicianFactory, $stateParams, $state){
      this.technician = new TechnicianFactory();
      this.create = function(){
        this.technician.$save(function(response){
          $state.go("technicianIndex")
        })
      }
    }
}())
