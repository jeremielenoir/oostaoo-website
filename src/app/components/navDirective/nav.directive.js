'use strict';

/**
 * @ngdoc directive
 * @name oostaooWebsiteApp.directive:navDirective
 * @description
 * # navDirective
 */
angular.module('oostaooWebsite')
  .directive('navDirective', function () {
    return {
      templateUrl: 'app/components/navDirective/nav.html',
      restrict: 'E'
    };
  });
