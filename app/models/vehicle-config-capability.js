import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo('vehicle-config'),
  vehicleCapability: DS.belongsTo('vehicle-capability'),
  kph: DS.attr('number'),
  timeout: DS.attr('number'),
  confirmed: DS.attr('boolean'),
  confirmedBy: DS.attr('number'),
  notes: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  vehicleConfigType: DS.belongsTo('vehicle-config-type')
});
