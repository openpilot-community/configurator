import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
export default Route.extend({
  title: function(tokens) {
    return tokens.join(' / ');
  },
  model() {
    return this.get("store").findAll('vehicle-config',{
      include: "vehicle_make,vehicle_model,vehicle_make_package,vehicle_config_type,vehicle_config_capabilities.vehicle_capability,forks,forks.vehicle_config_capabilities,forks.vehicle_config_type,forks.vehicle_make_package,vehicle_config_modifications"
    });
  }
});
// Route.reopen({
//   headData: service()
// });