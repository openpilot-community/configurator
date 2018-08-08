import Controller from '@ember/controller';
import EmberObject, { computed, get } from '@ember/object';
// import { array } from 'ember-awesome-macros';

export default Controller.extend({
  // queryParams: ['make'],
  makes: computed('model.@each.vehicleMake',function() {
    const model = get(this,"model");

    if (model) {
      return model.map((item) => {
        console.log(item.get('vehicleMake'));

        return item.get("vehicleMake");
      });
    }
  })
});
