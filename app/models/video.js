import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  videoUrl: DS.attr('string'),
  providerName: DS.attr('string'),
  author: DS.attr('string'),
  authorUrl: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  description: DS.attr('string'),
  html: DS.attr('string'),
  uploadedAt: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
