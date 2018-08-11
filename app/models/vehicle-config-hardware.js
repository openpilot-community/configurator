import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo('vehicle-config'),
  hardwareItem: DS.belongsTo('hardware-item'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
