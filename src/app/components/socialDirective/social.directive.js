'use strict';

/**
 * @ngdoc directive
 * @name oostaooWebsite.directive:footerDirective
 * @description
 * # footerDirective
 */
angular
.module('oostaooWebsite')
  .directive('socialDirective', function () {
    return {
      templateUrl: 'app/components/socialDirective/social.html',
      restrict: 'E'
    };
  });
