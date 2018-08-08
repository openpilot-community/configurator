import Route from '@ember/routing/route';

export default Route.extend({
  // titleToken: function(model) {
  //   return model.get('name');
  // },
  model(params) {
    return this.get("store").findRecord('vehicle-make',params.make_slug);

    // return this.get("store").findAll('vehicle-config');
  }
});