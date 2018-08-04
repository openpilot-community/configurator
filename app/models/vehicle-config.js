import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.belongsTo('vehicle-config-status'),
  year: DS.attr('number'),
  make: DS.belongsTo('vehicle-make'),
  model: DS.belongsTo('vehicle-model'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
