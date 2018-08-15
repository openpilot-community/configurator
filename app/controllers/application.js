import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';

export default Controller.extend({
  // pageTitle: "Untitled",
  
  actions: {
    login () {
     
    },
    logout () {
      
    }
  }
});

Controller.reopen({
  headData: service(),
  pageTitle: alias("headData.pageTitle")
});