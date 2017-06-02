import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm: function() {
      this.set('addNewQuestion', true);
    },
    saveQuestion: function() {
      var params = {
        content: this.get('content'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
