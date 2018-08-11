import DS from 'ember-data';

export default DS.Model.extend({
  itemType: DS.attr('string'),
  item: DS.belongsTo('item'),
  event: DS.attr('string'),
  whodunnit: DS.attr('string'),
  object: DS.attr('string'),
  createdAt: DS.attr('date'),
  objectChanges: DS.attr('string'),
  transaction: DS.belongsTo('transaction')
});
