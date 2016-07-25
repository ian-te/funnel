(function() {
    'use strict';

    angular
        .module('funnel')
        .directive('chartDirective', chartDirective);

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
            link: function ($scope, element, attrs) {
                var vm = $scope;;
                var margin = {top: 20, right: 50, bottom: 30, left: 20},
                    width = 760 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom;

                var fullData = angular.copy(vm.data);
                var sources = d3.map(vm.data, function(d){return d.source;}).keys()
                $scope.$watchCollection('filter',function(){
                    if(vm.filter && vm.filter.countries){
                        console.log(vm.filter.countries)
                        vm.data = fullData.filter(function(d){ return vm.filter.countries.indexOf(d.country) > -1 })
                    }
                });
                $scope.$watch(function(){
                    d3.selectAll('svg').remove();


                    var svg = d3.select(element[0]).append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom);


                    // If we don't pass any data, return out of the element


                    var stack = d3.stack()
                        .keys(sources)
                        .order(d3.stackOrderNone)
                        .offset(d3.stackOffsetNone);



                    var data = d3.nest()
                        .key(function(d) { return d.action;})
                        .key(function(d) { return d.source;})
                        .rollup(function(d){
                            return d3.sum(d, function(g) {
                                return Math.round(g.count);
                            });
                        })
                        .entries(vm.data);

                    var final = [];
                    data.forEach(function(d){
                        var action = d.key;
                        d = d.values;
                        var tmp = {};
                        d.forEach(function(k){
                            tmp[k.key] = k.value;
                            tmp.action = action;
                            // tmp[action] = d.action;
                        });
                        d = tmp;
                        final.push(d);
                    });


                    var series = stack(final);
                    var x = d3.scaleBand()
                        .rangeRound([0, width])
                        .padding(0.1)
                        .align(0.1);

                    var y = d3.scaleLinear()
                        .rangeRound([height, 0]);

                    var z = d3.scaleOrdinal()
                        .range(["#98abc5", "#8a89a6", "#6b486b",  "#ff8c00"]);


                    var max = d3.max(data, function(d) { return d3.sum(d.values, function(k) { return k.value }) });

                    x.domain(series.map(function(d) { return d.State; }));
                    y.domain([0, max]);
                    z.domain(series.slice(1));

                    svg.selectAll('.serie')
                        .data(series)
                        .enter()
                        .append("g")
                        .attr('class', 'serie')
                        .attr('fill', function(d){ return z(d.index)})
                        .selectAll('rect')
                        .data(function(d) {return d})
                        .enter()
                        .append('rect')
                        .attr('width', function(d, i){ return 59 })
                        .attr('x', function(d, i){ return i * 180 })
                        .attr('y', function(d){return y(d[1]) } )
                        .attr("height", function(d) {return y(d[0]) - y(d[1]); })


                    var legend = svg.selectAll(".legend")
                        .data(sources)
                        .enter().append("g")
                        .attr("class", "legend")
                        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
                        .style("font", "10px sans-serif");
                    legend.append("rect")
                        .attr("x", width - 18)
                        .attr("width", 28)
                        .attr("height", 18)
                        .attr("fill", z);

                    legend.append("text")
                        .attr("x", width - 24)
                        .attr("y", 9)
                        .attr("dy", ".35em")
                        .attr("text-anchor", "end")
                        .text(function(d) { return d; });


                });
            }
        };

        return directive;


        /** @ngInject */

    }

})();
