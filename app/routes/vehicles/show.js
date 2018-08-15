import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    return model.get('title');
  },
  model(params) {
    return this.get("store").findRecord('vehicle-config',params.vehicle_slug.split('-')[0],{
      include: "vehicle_make,vehicle_model,vehicle_config_modifications,vehicle_make_package,vehicle_config_type,vehicle_config_capabilities.vehicle_capability,forks,forks.vehicle_config_capabilities,forks.vehicle_config_type,forks.vehicle_make_package"
    });
  }
});
