import DS from 'ember-data';

export default DS.Model.extend({
  modificationHardwareType: DS.belongsTo('modification-hardware-type'),
  hardwareItem: DS.belongsTo('hardware-item')
});
