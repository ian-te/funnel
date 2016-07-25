(function () {
    'use strict';

    angular
        .module('funnel')
        .controller('TestController', TestController);

    /** @ngInject */
    function TestController(backend, d3, $scope) {
        var vm = this;
        vm.filters = {};

        var d = backend.get().then(function (d) {
            vm.data = d;
            console.log(vm.data);
            vm.dataHasLoaded = true;
            vm.filters.countries = d3.map(vm.data, function(d){return d.country;}).keys()
            vm.filters.sources = d3.map(vm.data, function(d){return d.source;}).keys()
        });


    }
})();
