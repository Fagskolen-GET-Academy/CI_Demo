const fs = require('fs');
const vm = require('vm');

globalThis.model = {
    count: 0,
};

globalThis.updateView = function () {
};

const controllerCode = fs.readFileSync(
    './controller.js',
    'utf8'
);

vm.runInThisContext(
    controllerCode,
    {
        filename: 'controller.js',
    }
);