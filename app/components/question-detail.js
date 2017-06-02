import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update: function(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
