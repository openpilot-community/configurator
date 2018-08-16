import DS from 'ember-data';
import { alias, filterBy } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';


export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  vehicleMake: DS.belongsTo(),
  pageTitle: computed("name","vehicleMake.name",function() {
    let modelName = get(this,"name");
    let makeName = get(this,"vehicleMake.name");

    if (makeName && modelName) {
      return `${makeName} ${modelName}`;
    }
  }),
  vehicleConfigs: DS.hasMany(),
  rootConfigs: filterBy("vehicleConfigs","isFactory"),
  vehicleTrims: DS.hasMany(),
  make: alias("vehicleMake"),
  trims: alias("vehicleTrims"),
  hasConfigs: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
