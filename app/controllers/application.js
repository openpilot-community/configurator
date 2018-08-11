import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';

export default Controller.extend({
  headData: service(),
  title: alias("headData.title"),
  makes: computed(function() {
    return this.get('store').query('vehicleMake',{
      filter: {
        with_configs: true
      }
    })
  }),
  actions: {
    login () {
     
    },
    logout () {
      
    }
  }
})