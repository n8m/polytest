(function() {
  'use strict';

  Polymer({
    is: 'field-type',
    properties:{
      field: Object,
      notify: true
    },
    isNumber: function(type){
      return type === 'number' ? true : false;
    },
    isText: function(type){
      return type === 'text' ? true : false;
    },
    isSelect: function(type){
      return type === 'select' ? true : false;
    },
    isDate: function(type){
      return type === 'date' ? true : false;
    }
  });
})();