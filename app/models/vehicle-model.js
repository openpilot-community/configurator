import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  vehicleMake: DS.belongsTo(),
  vehicleConfigs: DS.hasMany(),
  hasConfigs: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
