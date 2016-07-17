(function() {
  'use strict';

  angular
    .module('funnel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(d3, $timeout) {
    var vm = this;
    vm.awesomeThings = 'TEST';

    d3.csv("/assets/data/downloads.csv",function(d) {
      var tmp = d.date.split('.');
      var date = '2016-' + tmp[1] + '-' + tmp [0];


      return {
        date : new Date(date),
        product: d.product,
        country: d.country,
        os: d.os,
        count: +d.count
      };
    }, function(data) {
      var sum = d3.sum(data, function(d) { return d.count; });

      d3.select("#countries").selectAll("option")
          .data(d3.map(data, function(d){return d.country;}).keys())
          .enter()
          .append("option")
          .text(function(d){return d;})
          .attr("value",function(d){return d;});

      d3.select("#products").selectAll("option")
          .data(d3.map(data, function(d){return d.product;}).keys())
          .enter()
          .append("option")
          .text(function(d){return d;})
          .attr("value",function(d){return d;});

      $timeout(function(){
        vm.downloads = data;
        vm.sum = sum;
      });
    });

  }
})();
