angular.module('d3Module', []).factory('d3', d3Module);


/** @ngInject */
function d3Module($window){

    var d3;
    d3 = $window.d3;

    // returning our service so it can be used
    return d3;
}
