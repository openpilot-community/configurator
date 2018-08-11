import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  vehicleMake: DS.belongsTo('vehicle-make'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
