(function() {
    'use strict';

    angular
        .module('funnel')
        .directive('chartDirective', chartDirective);

    /** @ngInject */
    function chartDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/chart/chart.html',
            scope: {
                data: '=',
                filter: '='
            },
            controller: ChartController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function ChartController(d3, $scope, $element, $log) {
            var vm = this;
            var width = 500;
            var height = 300;
            var barWidth = 100;
            var p = d3.precisionPrefix(1e3, 1.3e6),
                f = d3.formatPrefix("." + p, 1.3e6);

            var chart = d3.select($element[0]).select('svg')
                .attr('width',500)
                .attr('height', 300);


            $scope.$watch(function(){
                vm.render();
                // $log.log(vm.data)
            });

            vm.render = function(){
                chart.selectAll('*').remove();
                var y = d3.scaleLinear().range([height, 0]);
                y.domain([0, d3.max(vm.data, function(d) { return d.value.total; })]);


                var bar = chart.selectAll('g')
                    .data(vm.data)
                    .enter()
                    .append('g')
                    .attr('transform', function(g, i){return "translate(" + i * barWidth + ", 0)"});

                bar.append('rect')
                    .attr('width', barWidth - 6)
                    .attr('y', function(d){ return y(d.value.total) })
                    .attr('height', function(d){ return height - y(d.value.total) });

                bar.append('text')
                    .attr("x", barWidth-20 / 2)
                    .attr("y", function(d) { return y(d.value.total) + 3; })
                    .attr("dy", ".75em")
                    .text(function(d) { return d.key + ' ' + f(d.value.total); });
            }

        }
    }

})();
