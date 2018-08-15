import DS from 'ember-data';

export default DS.Model.extend({
  video: DS.belongsTo('video'),
  hardwareItem: DS.belongsTo('hardware-item'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
