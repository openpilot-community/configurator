import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  vehicleConfigStatus: DS.belongsTo(),
  description: DS.attr('string'),
  year: DS.attr('number'),
  vehicleMake: DS.belongsTo('vehicle-make'),
  vehicleModel: DS.belongsTo('vehicle-model'),
  vehicleTrim: DS.belongsTo('vehicle-trim'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
