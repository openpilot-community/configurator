import EmberObject, { computed } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  // titleToken: function(model) {
  //   return model.get('name');
  // },
  model() {
    return this.get("store").findAll('vehicle-config', {
      include: ["vehicle_make","vehicle_model","vehicle_trim"]
    });
  }
});