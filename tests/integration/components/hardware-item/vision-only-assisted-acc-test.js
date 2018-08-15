import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | hardware-item/vision-only-assisted-acc', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{hardware-item/vision-only-assisted-acc}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#hardware-item/vision-only-assisted-acc}}
        template block text
      {{/hardware-item/vision-only-assisted-acc}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
