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

        };
        backend.get().then(function (d) {
            vm.data = prepareChartData(d);

            vm.dataHasLoaded = true;
        });

        function prepareChartData(d){
            d = d.filter(function(d){ return d.country == 'China'});
            var data = d3.nest()
                .key(function(d) {return d.action })
                .rollup(function(d){
                    return d3.sum(d, function(g) {
                        return Math.round(g.count);
                    })
                })
                .entries(d);
            
            return data;
        }

    }
})();
