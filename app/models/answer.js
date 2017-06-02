import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  answer: DS.belongsTo('question', {async:true})
});
