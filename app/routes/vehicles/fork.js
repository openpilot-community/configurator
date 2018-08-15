import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    return model.get('title');
  },
  model(params) {
    let parent = this.get("store").findRecord('vehicle-config',params.vehicle_slug.split('-')[0]);
    return this.get("store").peekRecord('vehicle-config',params.vehicle_slug.split('-')[0]).copy().then((copy) => {
      copy.set("parent",parent);
      copy.set("slug",null);
      copy.set("forks",[]);
      copy.set("createdAt",new Date());
      copy.set("updatedAt",new Date());
      return copy
    });
    // copy.set("parent",copy);
    return copy
  }
});
