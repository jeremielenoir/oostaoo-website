(function() {
  'use strict';

  angular
    .module('oostaooWebsite')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
