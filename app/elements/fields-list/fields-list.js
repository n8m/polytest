(function() {
  'use strict';

  Polymer({
    is: 'fields-list',
    properties:{
      fields: {
        type: Array,
        notify: true
      }
    },

    _queryFilter: function(query){
      return function(field){
        if (!query) return true;
        if (!field) return false;
        return (field.name && ~field.name.indexOf(query));
      };
    }

  });
})();