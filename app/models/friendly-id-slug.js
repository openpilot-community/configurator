import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  sluggable: DS.belongsTo('sluggable'),
  sluggableType: DS.attr('string'),
  scope: DS.attr('string'),
  createdAt: DS.attr('date')
});
