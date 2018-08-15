import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  slug: DS.attr('string'),
  componentPath: computed("slug",function() {
    let slug = this.get("slug");

    if (slug) {
      return `vehicle-capability/${slug}`;
    }
  }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
