import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  vehicleConfigs: DS.hasMany(),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
