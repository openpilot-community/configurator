import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  slackUsername: DS.attr('string'),
  githubUsername: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  avatarUrl: DS.attr('string')
});
