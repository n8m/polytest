(function() {
  'use strict';

  Polymer({
    is: 'field-type',
    properties:{
      field: {
        type: Object,
        notify: true
      }
    },

    ready: function(){
      var _this = this;

      setTimeout(function(){
        if(_this.field.type === 'date'){
          _this.listen(_this.querySelector('#picker'), 'click', 'handleClick');
        }
      })
    },

    handleClick: function(){
      this.querySelector('#picker').enforceDateChange();
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