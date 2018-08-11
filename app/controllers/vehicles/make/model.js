import Controller from '@ember/controller';
import EmberObject, { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
// import { array } from 'ember-awesome-macros';

export default Controller.extend({
  pageTitle: computed("model.{name,vehicleMake}",function() {
    let make = get(this,"model.vehicleMake.name");
    let model = get(this,"model.name");
    if (make && model) {
      return `${make} ${model}`;
    }
  })
});
