import Route from '@ember/routing/route';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Route.extend({
  headData: service(),
  titleToken: function(model) {
    return model.get('name');
  },
  
  model(params) {
    return this.get("store").findRecord('vehicle-make',params.make_slug.split('-')[0]);
  }
});