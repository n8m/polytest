(function() {
  'use strict';

  Polymer({
    is: 'configure-list',

    properties:{
      fields:{
        type: Array,
        notify: true
      }
    },

    //filter
    _isChecked: function(field){
      return field.selected ? true : false;
    },

    isNoFields: function(fields){
      return fields.base.filter(function(element){
        return element.selected ? true : false;
      }).length ? true : false;
    }

  });
})();