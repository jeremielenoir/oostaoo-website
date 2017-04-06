(function() {
  'use strict';

  angular
    .module('oostaooWebsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log,$timeout,$scope, webDevTec) {
    var vm = this;
    
    //Map//
    $scope.map = {center: {latitude: 48.889302, longitude: 2.342963 }, zoom: 15 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 48.889302,
        longitude: 2.342963
      },
      options: { draggable: false },
    };
    $scope.windowOptions = {
      boxClass: "infobox",
      boxStyle: {
        backgroundColor: "#EF5369",
        borderRadius : "5px",
        width: "130px",
        height: "150px",
        padding:"10px",
        color:"white"
      },
      content: "<h5>Oostaoo consulting</h5>----------------------- " +
      "<a href='mailto:contact@oostaoo.com' style='color:white; text-decoration:none;'>contact@oostaoo.com</a>" + "<p>06 16 42 64 65</p>" + 
      "<h6>2, rue de l’adresse 75001 Paris<h6>",
      disableAutoPan: true,
      maxWidth: 0,

      zIndex: null,
      closeBoxMargin: "10px",
      closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",

      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };
    $scope.onClick = function(marker, eventName, model) {
      console.log("Clicked!");
      model.show = !model.show;
      $scope.activeModel = model;
    };




  
      
    //Map ends//


    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1491314002429;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
