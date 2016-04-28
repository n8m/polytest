(function() {
  'use strict';

  Polymer({
    is: 'field-type',
    properties:{
      field: {
        type: Object,
        notify: true
      },
      tempDate: {
        type: Date,
        notify: true,
        observer: '_setModel'
      }
    },

    _setModel: function(value){
      this.set('field.value', value);
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