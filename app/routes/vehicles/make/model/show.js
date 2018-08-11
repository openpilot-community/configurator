import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    return model.get('title');
  },
  model(params) {
    return this.get("store").findRecord('vehicle-config',params.id);
  }
});
