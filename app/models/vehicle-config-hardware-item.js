import DS from 'ember-data';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  name: alias("hardwareItem.name"),
  vehicleConfig: DS.belongsTo('vehicle-config'),
  hardwareItem: DS.belongsTo('hardware-item'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
