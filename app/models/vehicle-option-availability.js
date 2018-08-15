import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  // vehicleTrims: DS.hasMany(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
