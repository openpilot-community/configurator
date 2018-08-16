import DS from 'ember-data';
import { alias, filterBy } from '@ember/object/computed';
export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  vehicleModels: DS.hasMany(),
  vehicleConfigs: DS.hasMany(),
  models: alias("vehicleModels"),
  modelsWithConfigs: filterBy("vehicleModels","hasConfigs"),
  hasConfigs: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
