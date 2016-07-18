(function() {
  'use strict';

  angular
    .module('funnel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(d3, $timeout) {
    var vm = this;
    vm.awesomeThings = 'TEST';
    vm.funnelData = [];
    var result = [];
    d3.csv("/assets/data/visits.csv",function(d) {
      var tmp = d.date.split('.');
      var date = '2016-' + tmp[1] + '-' + tmp [0];
      d.date = new Date(date);
      d.action = 'visit';
      return d;
    }, function(data) {
      result = result.concat(data);
      d3.csv("/assets/data/downloads.csv",function(d) {
        var tmp = d.date.split('.');
        var date = '2016-' + tmp[1] + '-' + tmp [0];
        d.date = new Date(date);
        d.action = 'download';
        return d;
      }, function(data) {
        result = result.concat(data);
          d3.csv("/assets/data/purchases.csv",function(d) {
            var tmp = d.date.split('.');
            var date = '2016-' + tmp[1] + '-' + tmp [0];
            d.date = new Date(date);
            d.action = 'purchase';
            return d;
          }, function(data) {
            result = result.concat(data);
            result = result.filter(function(d) { return d.country == 'United States' });
            var grouped = d3.nest()
                .key(function(d) { return d.action;})
                .rollup(function(d) {
                  return d3.sum(d, function(g) {return g.count; });
                }).entries(result)
            console.log(keys)

            $timeout(function(){
              vm.funnelData = result;
              vm.grouped = grouped;
            });

          });
      });
    });

  }
})();
