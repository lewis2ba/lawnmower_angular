"use strict";

(function(){
  angular
  .module("technician")
  .controller("TechnicianIndexController",[
    "TechnicianFactory",
    "$stateParams",
    TechnicianIndexControllerFunction])

    function TechnicianIndexControllerFunction(TechnicianFactory, $stateParams){
      this.technicians = TechnicianFactory.query()
    }
}())
