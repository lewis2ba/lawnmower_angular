"use strict";

(function(){
  angular
  .module("mowing")
  .controller("MowingIndexController",[
    "MowingFactory",
    "$stateParams",
    MowingIndexControllerFunction])

    function MowingIndexControllerFunction(MowingFactory, $stateParams){
      this.mowings = MowingFactory.query()
      console.log(this.mowings)
    }
}())
