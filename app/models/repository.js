import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fullName: DS.attr('string'),
  ownerLogin: DS.attr('string'),
  ownerAvatarUrl: DS.attr('string'),
  ownerUrl: DS.attr('string'),
  url: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
