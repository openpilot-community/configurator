import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo('vehicle-config'),
  repository: DS.belongsTo('repository'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
