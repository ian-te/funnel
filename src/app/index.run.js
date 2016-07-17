(function() {
  'use strict';

  angular
    .module('funnel')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
