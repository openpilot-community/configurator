import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo('vehicle-config'),
  pullRequest: DS.belongsTo('pull-request'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
