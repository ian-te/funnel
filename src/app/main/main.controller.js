(function() {
  'use strict';

  angular
    .module('funnel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(d3, $timeout, $log) {
    var vm = this;
    var availableSources = ['facebook', 'email', 'search', 'source_1']
    vm.awesomeThings = 'TEST';
    vm.funnelData = [];
    var result = [];
    d3.csv("/assets/data/visits.csv",function(d) {
      var tmp = d.date.split('.');
      var date = '2016-' + tmp[1] + '-' + tmp [0];
      d.date = new Date(date);
      d.action = 'visit';
      d.source = availableSources[Math.floor(Math.random() * availableSources.length)];

      return d;
    }, function(data) {
      result = result.concat(data);
      d3.csv("/assets/data/downloads.csv",function(d) {
        var tmp = d.date.split('.');
        var date = '2016-' + tmp[1] + '-' + tmp [0];
        d.date = new Date(date);
        d.action = 'download';
        d.source = availableSources[Math.floor(Math.random() * availableSources.length)];
        return d;
      }, function(data) {
        result = result.concat(data);
          d3.csv("/assets/data/purchases.csv",function(d) {
            var tmp = d.date.split('.');
            var date = '2016-' + tmp[1] + '-' + tmp [0];
            d.date = new Date(date);
            d.action = 'purchase';
            d.source = availableSources[Math.floor(Math.random() * availableSources.length)];
            return d;
          }, function(data) {
            result = result.concat(data);
            result = result.filter(function(d) { return d.country == 'United States' });
            var grouped = d3.nest()
                .key(function(d) { return d.action;})
                // .key(function(d) { return d.source;})
                .rollup(function(d) {
                  return d3.sum(d, function(g) {
                    return Math.round(g.count);
                  });
                })
                .entries(result);

            $timeout(function(){
              $log.log(grouped);
              vm.funnelData = result;
              vm.grouped = grouped;
              var data = grouped;
              var data = grouped;
              // STARTING THE DRAWING

              var width = 420,
                  barHeight = 20;

              var x = d3.scaleLinear()
                  .domain([0, d3.max(grouped)])
                  .range([0, width]);

              d3.select("#funnel")
                  .append("svg")
                  .attr("width", 50)
                  .attr("height", 50)
                  .append("circle")
                  .attr("cx", 25)
                  .attr("cy", 25)
                  .attr("r", 25)
                  .style("fill", "purple");
            });

          });
      });
    });

  }
})();
