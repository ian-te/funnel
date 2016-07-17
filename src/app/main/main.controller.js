(function() {
  'use strict';

  angular
    .module('funnel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];

  }
})();
