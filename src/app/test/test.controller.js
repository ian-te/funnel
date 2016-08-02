(function () {
    'use strict';

    angular
        .module('funnel')
        .controller('TestController', TestController);

    /** @ngInject */
    function TestController(backend, d3) {
        var vm = this;
        vm.filters = {};
        vm.click = function(){
            vm.data[0].value = 30000;
        };
        backend.get().then(function (d) {
            vm.data = d3.nest()
                .key(function(d) {return d.action })
                .rollup(function(d){
                    return d3.sum(d, function(g) {
                        return Math.round(g.count);
                    })
                })
                .entries(d);

            vm.dataHasLoaded = true;
        });


    }
})();
