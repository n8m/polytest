(function() {
  'use strict';

  Polymer({
    is: 'fields-data',

    properties:{
      fields:{
        type: Array,
        notify: true
      }
    },

    ready: function(){
      var _this = this;

      setTimeout(function(){
        if(!_this.fields){
          _this.$.fieldsajax.generateRequest();
        }
      });

    }

  });
})();