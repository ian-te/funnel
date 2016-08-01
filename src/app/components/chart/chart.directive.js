(function() {
    'use strict';

    angular
        .module('funnel')
        .directive('chartDirective', chartDirective);

    function getFilters(d) {
        var filters = {};
        d.forEach(function(channel, k){
            delete channel.count;
            delete channel.country;
            delete channel.country;
            delete channel.action;
            delete channel.date;
            delete channel.source;
            for (var key in channel) {
                if(!filters[key]) {filters[key] = [];}
                if (channel.hasOwnProperty(key) && filters[key].indexOf(channel[key]) == -1) {
                    filters[key].push(channel[key])
                }

            }
        });
        return filters;
    }

    /** @ngInject */
    function chartDirective(d3) {
        var directive = {
            restrict: 'E',
            scope: {
                data: '=',
                filter: '='
            },
            templateUrl: 'app/components/chart/chart.html',
            /** @ngInject */
            link: function ($scope, element) {
                var vm = $scope;
                var margin = {top: 20, right: 50, bottom: 30, left: 20},
                    width = 760 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom;

                var fullData = angular.copy(vm.data);
                $scope.$watchCollection('filter',function(){
                    if(vm.filter && vm.filter.countries){
                        vm.data = fullData.filter(function(d){ return vm.filter.countries.indexOf(d.country) > -1 })
                    }
                });
                $scope.$watch('data', function(){
                    d3.selectAll('svg').remove();


                    var svg = d3.select(element[0]).append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom);

                    var data = d3.nest()
                        .key(function(d) { return d.action;})
                        // .key(function(d) { return d.country;})
                        .rollup(function(d){
                            return {
                                total: d3.sum(d, function(g) {
                                   return Math.round(g.count);
                                }),
                                filters: getFilters(d)
                            }
                        })
                        .entries(vm.data);
                    vm.filtered = data;
                    var x = d3.scaleBand()
                        .rangeRound([0, width])
                        .padding(0.1)
                        .align(0.1);

                    var y = d3.scaleLinear()
                        .rangeRound([height, 0]);

                    var z = d3.scaleOrdinal()
                        .range(["#98abc5", "#8a89a6", "#6b486b",  "#ff8c00"]);


                    var max = d3.max(data, function(d) { return d.value.total });

                    // x.domain(series.map(function(d) { return d.State; }));
                    y.domain([0, max]);
                    // z.domain(series.slice(1));
                    svg.selectAll('svg')
                        .data(data)
                        .enter()
                        .append('rect')
                        .attr('width', function(){ return 59 })
                        .attr('x', function(d, i){ return i * 180 })
                        .attr('y', function(d){return y(d.value.total) } )
                        .attr("height", function(d) {return d.value.total; });



                });
            }
        };

        return directive;


        /** @ngInject */

    }

})();
