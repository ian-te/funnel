(function () {
    'use strict';

    angular
        .module('funnel')
        .controller('TestController', TestController);

    /** @ngInject */
    function TestController(backend, d3, $scope) {
        var vm = this;
        vm.filters = {};
        vm.click = function(){

        };
        backend.get().then(function (d) {
            vm.dataHasLoaded = true;
            vm.fullData = d;
            vm.data = prepareChartData(vm.fullData);
            vm.filters = getAvailableFilters(vm.fullData);
        });
        function getAvailableFilters(d){
            var data =  {
                product: d3.map(d, function(d){return d.product;}).keys(),
                date: d3.map(d, function(d){return d.date;}).keys(),
                country: d3.map(d, function(d){return d.country;}).keys()
            };
            return data;
        }
        $scope.$watchCollection('test.selectedFilters', function(){
            if(vm.fullData){
                vm.data = prepareChartData(vm.fullData, vm.selectedFilters);
            }
        });
        function prepareChartData(d, filter){
            if(filter){
                for(var i in filter){
                    if(filter[i].length > 0 && filter[i].indexOf('All') == -1){
                        d = d.filter(function(item) {
                            return filter[i].indexOf(item[i]) > -1
                        })
                    }
                    if(typeof filter[i] === 'object'){
                        d = d.filter(function(item) {
                            if(i != item.action) {
                                return true;
                            } else {
                                for (var k in filter[i]) {
                                    return item[k] == filter[i][k]
                                }
                            }
                        })

                    }
                }
            }

            vm.channelFilters = d3.nest()
                .key(function(d) {return d.action })
                .rollup(function(d){
                    var filter = {};
                    d.forEach(function(item, k){
                        var excluded = ['action','source','country','count','date','product'];
                        for(var i in item) {
                            if(!filter[i]) filter[i] = [];
                            if(filter[i].indexOf(item[i]) == -1 && excluded.indexOf(i) == -1 ){
                                filter[i].push(item[i])
                            }
                            if(filter[i].length == 0){delete filter[i]}
                        }
                    });
                    return filter
                })
                .entries(d);

            var data = d3.nest()
                .key(function(d) {return d.action })
                .rollup(function(d){
                    return {
                        total: d3.sum(d, function (g) {
                            return Math.round(g.count);
                        }),
                        filters: function(){
                            var filter = {};
                            d.forEach(function(item, k){
                                var excluded = ['action','source','country','count','date','product'];
                                for(var i in item) {
                                    if(!filter[i]) filter[i] = [];
                                    if(filter[i].indexOf(item[i]) == -1 && excluded.indexOf(i) == -1 ){
                                        filter[i].push(item[i])
                                    }
                                    if(filter[i].length == 0){delete filter[i]}
                                }
                            });
                            return filter;
                        }()
                    }
                })
                .entries(d);
            return data;
        }

    }
})();
