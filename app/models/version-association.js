import DS from 'ember-data';

export default DS.Model.extend({
  version: DS.belongsTo('version'),
  foreignKeyName: DS.attr('string'),
  foreignKey: DS.belongsTo('foreign-key')
});
