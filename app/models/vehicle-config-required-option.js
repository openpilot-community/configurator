import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo('vehicle-config'),
  vehicleOption: DS.belongsTo('vehicle-option'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
