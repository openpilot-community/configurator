import DS from 'ember-data';

export default DS.Model.extend({
  modification: DS.belongsTo('modification'),
  hardwareType: DS.belongsTo('hardware-type'),
  modificationHardwareTypeHardwareItems: DS.hasMany()
});
