// A place for all my filters

// var filtersModule = angular.module('filters', []);

demoApp.filter("relativeDate", function() {
  var relativeDateFunction = function(leDate) {
    if (leDate.isToday()) { return "Today"; }
    if (leDate.isYesterday()) { return "Yesterday"; }
    return leDate.format("{MM}/{dd}/{yy}");
  };

  return relativeDateFunction;
});
