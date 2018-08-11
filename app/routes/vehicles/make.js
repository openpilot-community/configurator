import Route from '@ember/routing/route';
import { alias } from '@ember/object/computed';

export default Route.extend({
  titleToken: function(model) {
    return model.get('name');
  },
  model(params) {
    return this.get("store").findRecord('vehicle-make',params.make_slug.split('-')[0]);
  }
});