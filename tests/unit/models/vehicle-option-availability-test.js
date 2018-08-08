import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | vehicle option availability', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('vehicle-option-availability', {});
    assert.ok(model);
  });
});
