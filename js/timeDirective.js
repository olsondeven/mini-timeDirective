angular.module('timeApp').directive('showTime', function(){
  return {//scope{} this will limit your scope
    restrict: 'E',
    template: '<div>{{title}}<br/>Hello {{name}} the current time is {{time}}</div>',
    scope:{
      title: '@title'
    },
    link: function(scope, element, attrs){
      scope.name = 'Deven'
      var currentTime = new Date();//date()
      scope.time = currentTime.toString();
    },
    controller: function($scope){//scope is from ^ scope{} or view from parent scope

    }
  }
});
