import DS from 'ember-data';

export default DS.Model.extend({
  identification: DS.attr('string'),
  passwordDigest: DS.attr('string'),
  oauth2Token: DS.attr('string'),
  uid: DS.attr('string'),
  singleUseOauth2Token: DS.attr('string'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  provider: DS.attr('string')
});
