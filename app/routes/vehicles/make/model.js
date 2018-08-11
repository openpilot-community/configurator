import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    return model.get('name');
  },
  model(params) {
    return this.get("store").findRecord('vehicle-model',params.model_slug.split('-')[0]);
  }
});