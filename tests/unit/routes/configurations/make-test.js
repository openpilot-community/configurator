import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | configurations/make', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:configurations/make');
    assert.ok(route);
  });
});
