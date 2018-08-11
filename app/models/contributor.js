import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  htmlUrl: DS.attr('string'),
  contributions: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
