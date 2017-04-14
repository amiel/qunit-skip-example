import { moduleFor, test, skip } from 'ember-qunit';

moduleFor('service:example-service', 'Unit | Service | example service', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  beforeEach() {
    this.subject({
      foo: 'bar',
    });
  },
});

// Note that if this skip is _after_ the other test, there is no issue.
skip('meh', function(assert) {
  assert.ok(false, 'this test is not run');
});

// This test fails because of the previous skip.
// Note that on a second run, this test will pass, as it ends up running before
// the `skip`.
test('it exists', function(assert) {
  let service = this.subject();
  assert.equal(service.get('foo'), 'bar');
});

