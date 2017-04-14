'use strict';

/**
 * @ngdoc directive
 * @name oostaoowebsiteApp.directive:scrollDisplayDirective
 * @description
 * # scrollDisplayDirective
 */
angular.module('oostaooWebsite')
  .directive('scrollDisplayDirective', function ($window) {
    return {
        restrict: 'E',
        link: function() {
            angular.element($window).bind("scroll", function() {

                 angular.element('.hideme').each( function(){

                    var bottom_of_object =  angular.element(this).offset().top +  angular.element(this).outerHeight();
                    var bottom_of_window =  angular.element(window).scrollTop() +  angular.element(window).height();

                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object ){
                         angular.element(this).animate({'opacity':'1'},500);
                    }
               });
           });
        }
    }
  });
