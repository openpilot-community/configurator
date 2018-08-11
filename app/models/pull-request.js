import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  number: DS.attr('string'),
  title: DS.attr('string'),
  state: DS.attr('string'),
  locked: DS.attr('string'),
  user: DS.attr('string'),
  body: DS.attr('string'),
  prCreatedAt: DS.attr('string'),
  prUpdatedAt: DS.attr('string'),
  closedAt: DS.attr('string'),
  mergedAt: DS.attr('string'),
  mergeCommitSha: DS.attr('string'),
  head: DS.attr('string'),
  authorAssociation: DS.attr('string'),
  htmlUrl: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
