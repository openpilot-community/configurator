import Controller from '@ember/controller';
import EmberObject, { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
// import { array } from 'ember-awesome-macros';

export default Controller.extend({
  headData: service(),
  pageTitle: computed("model.name",function() {
    let make = get(this,"model.name");
    if (make) {
      return `${make}`;
    }
  }),
  title: alias("headData.title"),
});
