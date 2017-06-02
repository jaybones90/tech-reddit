import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update: function(question, params) {
      this.sendAction('update', question, params);
    },
    delete: function(question) {
      if(confirm("Are You Super Duper Sure You Want To Delete This Question?")) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
