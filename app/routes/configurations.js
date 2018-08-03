import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    return model.get('name');
  },
  model() {
    return this.get("store").findAll('vehicle-config');
  }
});
