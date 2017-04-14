'use strict';

describe('Directive: scrollDisplayDirective', function () {

  // load the directive's module
  beforeEach(module('oostaooWebsite'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-display-directive></scroll-display-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollDisplayDirective directive');
  }));
});
