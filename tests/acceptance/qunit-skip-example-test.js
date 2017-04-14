import { test, skip } from 'ember-qunit';
import moduleForAcceptance from 'qunit-skip-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | qunit skip example');

skip('it should do other stuff');

test('visiting /', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');
    assert.equal(find('#example-content').text(), 'HAI');
  });
});

