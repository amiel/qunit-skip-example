# qunit-skip-example

This example projects shows an example of an unexpected test failure when using skip in a service test.

https://github.com/emberjs/ember-qunit/issues/<put-issue-id-here>

The relevant test can be found in [`tests/unit/services/example-service-test.js`](https://github.com/amiel/qunit-skip-example/blob/master/tests/unit/services/example-service-test.js).

## To reproduce

1. Clone, yarn install

   I also had to `yarn add phantomjs-prebuilt`

2. `ember test` or `ember test --server`

3. Note the `test('it exists')` fails with:

    ```
    beforeEach failed on it exists: Cannot read property 'setContext' of undefined
    Expected:
    null
    Message: 	Diff suppressed as the expected and actual results have an equivalent serialization
    Source:
    TypeError: Cannot read property 'setContext' of undefined
        at Object.beforeEach (http://localhost:7357/assets/test-support.js:5396:15)
        at callHook (http://localhost:7357/assets/test-support.js:1479:22)
        at runHook (http://localhost:7357/assets/test-support.js:1473:7)
        at Object.advance (http://localhost:7357/assets/test-support.js:1106:26)
        at begin (http://localhost:7357/assets/test-support.js:2779:20)
        at http://localhost:7357/assets/test-support.js:1990:6
    Died on test #2     at Module.callback (http://localhost:7357/assets/tests.js:187:24)
        at Module.exports (http://localhost:7357/assets/vendor.js:119:32)
        at requireModule (http://localhost:7357/assets/vendor.js:34:18)
        at TestLoader.require (http://localhost:7357/assets/test-support.js:5239:7)
        at TestLoader.loadModules (http://localhost:7357/assets/test-support.js:5231:14)
        at Function.TestLoader.load (http://localhost:7357/assets/test-support.js:5261:22)
        at http://localhost:7357/assets/test-support.js:5144:18: this.subject is not a function
    Expected:
    null
    Message: 	Diff suppressed as the expected and actual results have an equivalent serialization
    Source:
    TypeError: this.subject is not a function
        at Object.<anonymous> (http://localhost:7357/assets/tests.js:188:24)
        at runTest (http://localhost:7357/assets/test-support.js:1442:30)
        at Test.run (http://localhost:7357/assets/test-support.js:1428:6)
        at http://localhost:7357/assets/test-support.js:1620:12
        at Object.advance (http://localhost:7357/assets/test-support.js:1106:26)
        at begin (http://localhost:7357/assets/test-support.js:2779:20)
        at http://localhost:7357/assets/test-support.js:1990:6
    Promise rejected after "it exists": Cannot read property 'teardown' of undefined
    Expected:
    null
    Message: 	Diff suppressed as the expected and actual results have an equivalent serialization
    Source:
    TypeError: Cannot read property 'teardown' of undefined
        at http://localhost:7357/assets/test-support.js:5410:37
        at tryCatch (http://localhost:7357/assets/vendor.js:69641:14)
        at invokeCallback (http://localhost:7357/assets/vendor.js:69656:15)
        at http://localhost:7357/assets/vendor.js:69731:18
        at http://localhost:7357/assets/vendor.js:49460:9
        at invokeWithOnError (http://localhost:7357/assets/vendor.js:10918:16)
        at Queue.flush (http://localhost:7357/assets/vendor.js:10977:9)
        at DeferredActionQueues.flush (http://localhost:7357/assets/vendor.js:11101:15)
        at Backburner.end (http://localhost:7357/assets/vendor.js:11171:23)
        at http://localhost:7357/assets/vendor.js:11737:16
    ```


