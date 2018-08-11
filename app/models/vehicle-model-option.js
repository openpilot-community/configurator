import DS from 'ember-data';

export default DS.Model.extend({
  vehicleYear: DS.attr('number'),
  vehicleMake: DS.belongsTo('vehicle-make'),
  vehicleModel: DS.belongsTo('vehicle-model'),
  vehicleOption: DS.belongsTo('vehicle-option'),
  vehicleOptionAvailability: DS.belongsTo('vehicle-option-availability'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
