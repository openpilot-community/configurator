import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo('vehicle-config'),
  video: DS.belongsTo('video'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
