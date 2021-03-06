define([
    'scalejs.core',
    './scalejs.reactive/reactive',
    './scalejs.reactive/messageBus'
], function (
    core,
    reactive,
    messageBus
) {
    'use strict';

        var merge = core.object.merge;
    core.registerExtension({
        reactive: merge(reactive, { messageBus: messageBus })
    });
});

