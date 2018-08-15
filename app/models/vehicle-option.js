import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  alternateName: DS.attr('string'),
  whatItDoes: DS.attr('string'),
  whatItDoesntDo: DS.attr('string'),
  referenceUrl: DS.attr('string'),
  slug: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});
