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

skip('meh', function(assert) {
  assert.ok(false, 'this test is not run');
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.equal(service.get('foo'), 'bar');
});

