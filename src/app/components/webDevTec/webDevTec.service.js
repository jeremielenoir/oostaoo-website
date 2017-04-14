(function() {
  'use strict';

  angular
      .module('oostaooWebsite')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {

    var data = [
      {
        titre: 'Talent Recruiter',
        name: 'Yannick Boganin',
        src: ''
      },
      {
        titre: 'Co-founder CTO',
        name: 'Jérémie Lenoir',
        src: 'assets/images/jeremielenoir.jpg'
      },
      {
        titre: 'Co-founder Business Developer',
        name: 'Gilles Huguenin',
        src: 'assets/images/gilleshuguenin.jpg'
      },
      {
        titre: 'Developer Javascript Fullstack',
        name: 'Adrien Leteinturier',
        src: 'assets/images/adrienleteinturier.jpg'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
