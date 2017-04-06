(function() {
  'use strict';

  angular
      .module('oostaooWebsite')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {

    var data = [

    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
