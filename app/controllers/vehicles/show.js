import Controller from '@ember/controller';
import EmberObject, { computed, get } from '@ember/object';
import { empty, alias } from '@ember/object/computed';

export default Controller.extend({
  actions: {
    fork() {
      this.get("model").copy().then((copy) => {
        copy.set("parent",this.get("model"));
        copy.set("slug",null);
        copy.save();
      })
    }
  }
});
