import DS from 'ember-data';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  vehicleMake: DS.belongsTo(),
  vehicleConfigs: DS.hasMany(),
  vehicleTrims: DS.hasMany(),
  make: alias("vehicleMake"),
  trims: alias("vehicleTrims"),
  hasConfigs: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
