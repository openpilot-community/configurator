import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';

export default Controller.extend({
  makes: computed(function() {
    return this.get('store').query('vehicleMake',{
      filter: {
        with_configs: true
      }
    })
  }),
  pageTitle: "Welcome"
});
