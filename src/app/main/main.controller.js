(function() {
  'use strict';

  angular
    .module('oostaooWebsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log,$timeout,$location, webDevTec,scrollSmoothService) {
    var vm = this;




    //scrollSmooth//
    vm.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');
      // call $anchorScroll()
      scrollSmoothService.scrollTo(eID);
    };
    //scrollSmooth ends//



    //Map//
    vm.map = {center: {latitude: 48.866441, longitude: 2.337112 }, zoom: 15 };
    vm.options = {scrollwheel: false};
    vm.coordsUpdates = 0;
    vm.dynamicMoveCtr = 0;
    vm.marker = {
      id: 0,
      coords: {
        latitude: 48.866441,
        longitude: 2.337112
      },
      options: { draggable: false }
    };
    vm.windowOptions = {
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
      "<h6>46, rue de Richelieu 75001 Paris<h6>",
      disableAutoPan: true,
      maxWidth: 0,

      zIndex: null,
      closeBoxMargin: "10px",
      closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",

      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };
    vm.onClick = function(marker, eventName, model) {
      model.show = !model.show;
      vm.activeModel = model;
    };    
    //Map ends//

    //Nav bar collapse//
    vm.isCollapsed = true;
    //Nav bar collapse ends//


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
