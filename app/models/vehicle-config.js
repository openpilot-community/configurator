import DS from 'ember-data';
import { computed } from '@ember/object';
import { alias,equal, notEmpty } from '@ember/object/computed';
import Copyable from 'ember-cli-copyable';
 

export default DS.Model.extend(Copyable, {
  title: computed("year,makeName,modelName,makePackageName",function() {
    let year = this.get("year");
    let makeName = this.get("makeName");
    let modelName = this.get("modelName");
    let makePackageName = this.get("makePackageName");
    let nameParts = [];
    if (year && makeName && modelName) {
      nameParts.push(year + "");
      nameParts.push(makeName);
      nameParts.push(modelName);
      if (makePackageName) {
        nameParts.push("w/ " + makePackageName);
      }
      return nameParts.join(" ");
    }
  }),
  slug: DS.attr('string'),
  diffFromParent: DS.attr(),
  parent: DS.belongsTo('vehicle-config', {
    inverse: "forks"
  }),
  hasParent: notEmpty("parent"),
  forks: DS.hasMany('vehicle-config', {
    inverse: "parent"
  }),
  makeName: alias("vehicleMake.name"),
  modelName: alias("vehicleModel.name"),
  typeName: alias("vehicleConfigType.name"),
  typeSlug: alias("vehicleConfigType.slug"),
  isFactory: equal("typeSlug","factory"),
  isBasic: equal("typeSlug","basic"),
  isStandard: equal("typeSlug","standard"),
  isAdvanced: equal("typeSlug","advanced"),
  makePackageName: alias("vehicleMakePackage.name"),
  vehicleCapabilities: DS.hasMany(),
  vehicleConfigStatus: DS.belongsTo(),
  vehicleMakePackage: DS.belongsTo(),
  vehicleConfigType: DS.belongsTo(),
  // vehicleConfigHardwareItems: DS.hasMany(),
  vehicleConfigModifications: DS.hasMany(),
  vehicleConfigCapabilities: DS.hasMany(),
  vehicleConfigCapabilitiesWithDiff: computed("hasParent", "vehicleConfigCapabilities.@each", "diffFromParent" ,function() {
    let vehicleConfigCapabilities = this.get("vehicleConfigCapabilities");
    let diffFromParent = this.get("diffFromParent");
    let hasParent = this.get("hasParent");

    if (hasParent && vehicleConfigCapabilities && diffFromParent) {
      return vehicleConfigCapabilities.map((cap) => {
        cap.set("diff", {
          operator: "+"
        })

        return cap;
      });
    } else if (!hasParent && vehicleConfigCapabilities) {
      return vehicleConfigCapabilities.map((cap) => {
        cap.set("diff", {
          operator: "+"
        })

        return cap;
      });
    }
  }),
  vehicleModelOptions: DS.hasMany(),
  description: DS.attr('string'),
  year: DS.attr('number'),
  vehicleMake: DS.belongsTo('vehicle-make'),
  vehicleModel: DS.belongsTo('vehicle-model'),
  vehicleTrim: DS.belongsTo('vehicle-trim'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});