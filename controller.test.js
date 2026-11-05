QUnit.module('Controller', function (hooks) {

    hooks.beforeEach(function () {
        model.count = 0;
    });

    QUnit.test('increaseCount øker count med 1', function (assert) {
        increaseCount();

        assert.equal(model.count, 1);
    });

    QUnit.test('resetCount setter count til 0', function (assert) {
        model.count = 10;

        resetCount();

        assert.equal(model.count, 0);
    });

});