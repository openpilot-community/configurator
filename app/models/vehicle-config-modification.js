import DS from 'ember-data';

export default DS.Model.extend({
  vehicleConfig: DS.belongsTo(),
  modification: DS.belongsTo()
});
