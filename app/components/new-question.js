import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm: function() {
      this.set('addNewQuestion', true);
    },
    saveQuestion: function() {
      var params = {
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
