import Controller from '@ember/controller';
import EmberObject, { computed, get } from '@ember/object';
// import { array } from 'ember-awesome-macros';
import { uniq, mapBy } from '@ember/object/computed';

export default Controller.extend({
  // queryParams: ['make'],
  makes: computed(function() {
    return this.get('store').query('vehicleMake',{
      filter: {
        with_configs: true
      }
    })
  })
});
