"use strict";

(function(){
  angular
  .module("mowing")
  .controller("MowingNewController",[
    "MowingFactory",
    "$stateParams",
    "$state",
    MowingNewControllerFunction])

    function MowingNewControllerFunction(MowingFactory, $stateParams, $state){
      this.mowing = new MowingFactory();
      this.create = function(){
        this.mowing.$save(function(response){
          $state.go("mowingIndex")
        })
      }
    }
}())
