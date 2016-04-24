(function() {
  'use strict';

  var singleton = false;

  Polymer({
    is: 'fields-data',

    attached:function(){
      if(singleton) {
       this.isActive = false;
       this.remove();
      } else {
       singleton = true;
       this.isActive = true;
       // remainder of element initialization
      }
    },

    detached:function() {
     if(this.isActive) singleton = false;
    },

    properties:{
      fields:{
        type: Array,
        notify: true,
        value: [
          {name: "first name", selected: true, type: "text", value: null, required: true},
          {name: "second name", selected: true, type: "text", value: null, required: false},
          {name: "age", selected: true, type: "number", value: null, required: false},
          {name: "date of birth", selected: true, type: "date", value: null, required: false},
          {name: "gender", selected: true, type: "select", value: null, values:[{title: "male", value: "m"},{title: "female", value: "f"},{title: "other", value: "0_o"}]},
        ]
      }
    },

    // init: function(){
    //   this.fields = [
    //     {name: "first name", selected: true, type: "text", value: null, required: true},
    //     {name: "second name", selected: true, type: "text", value: null, required: false},
    //     {name: "age", selected: true, type: "number", value: null, required: false},
    //     {name: "date of birth", selected: true, type: "date", value: null, required: false},
    //     {name: "gender", selected: true, type: "select", value: null, values:[{title: "male", value: "m"},{title: "female", value: "f"},{title: "other", value: "0_o"}]},
    //   ];
    // }

  });
})();


(function(){
  Polymer({
   is:'my-singleton',

 });
})();