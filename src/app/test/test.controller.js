(function() {
  'use strict';

  angular
    .module('funnel')
    .controller('TestController', TestController);

  /** @ngInject */
  function TestController(d3, $timeout, $log) {

    var margin = {top: 20, right: 50, bottom: 30, left: 20},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    var sources = ["email", "facebook", "search", "twitter"];
    var data = [
      {action: 'visit', search: 3840, emails: 4920, facebook: 960, twitter: 400},
      {action: 'download', search: 2000, emails: 1777, facebook: 960/2, twitter: 400/2},
      {action: 'purchase', emails: 1920/4, facebook: 960/6,  search: 3840/9, twitter: 400/6}
    ];
    var stack = d3.stack()
      .keys(sources)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    d3.csv('/assets/data/visits.csv', function(data){data.action = 'visit'; return data;}, function(visits){
      d3.csv('/assets/data/downloads.csv', function(data){data.action = 'download'; return data;}, function(downloads){
          d3.csv('/assets/data/purchases.csv', function(data){data.action = 'purchase'; return data;}, function(purchases){
              var d = visits.concat(downloads, purchases);
              // d = d.filter(function(d){ return d.country == 'China'})
              data = d3.nest()
                  .key(function(d) { return d.action;})
                  .key(function(d) { return d.source;})
                  .rollup(function(d){
                      return d3.sum(d, function(g) {
                          return Math.round(g.count);
                      });
                  })
                  .entries(d);

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
              data = final;
                console.log(data)


              var series = stack(data);
              var total = d3.sum(data, function(d){console.log(d[0]); return d});
              console.log('tital', total)
              var x = d3.scaleBand()
                  .rangeRound([0, width])
                  .padding(0.1)
                  .align(0.1);

              var y = d3.scaleLinear()
                  .rangeRound([height, 0]);

              var z = d3.scaleOrdinal()
                  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

              console.log('??', d3.max(data, function(d){ return d.total }))
              x.domain(series.map(function(d) { return d.State; }));
              y.domain([0, d3.max(data, function(d){ return d.total })]).nice();
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
                  .attr("height", function(d) {  return y(d[0]) - y(d[1]); })


          });
      });
    });




  }
})();
