import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo('vehicle-config'),
  vehicleMakePackage: DS.belongsTo('vehicle-make-package'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
