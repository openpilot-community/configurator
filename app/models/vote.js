import DS from 'ember-data';

export default DS.Model.extend({
  votableType: DS.attr('string'),
  votable: DS.belongsTo('votable'),
  voterType: DS.attr('string'),
  voter: DS.belongsTo('voter'),
  voteFlag: DS.attr('boolean'),
  voteScope: DS.attr('string'),
  voteWeight: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
