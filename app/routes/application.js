import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
  title: function(tokens) {
    return tokens.join(' - ') + ' - vehicledb';
  },
  model() {
    return this.get("store").findAll('vehicle-config');
  },
  headData: service()
});