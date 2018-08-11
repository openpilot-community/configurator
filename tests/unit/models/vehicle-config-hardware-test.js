import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | vehicle config hardware', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('vehicle-config-hardware', {});
    assert.ok(model);
  });
});
