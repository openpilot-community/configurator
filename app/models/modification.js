import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  instructions: DS.attr('string'),
  slug: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});