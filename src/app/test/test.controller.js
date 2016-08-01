(function () {
    'use strict';

    angular
        .module('funnel')
        .controller('TestController', TestController);

    /** @ngInject */
    function TestController(backend, d3) {
        var vm = this;
        vm.filters = {};

        backend.get()
            .then(function (d) {
                vm.data = d;
                vm.dataHasLoaded = true;
                vm.filters.countries = d3.map(vm.data, function(d){return d.country}).keys()
            });


    }
})();
