define([
    'scalejs!core', 'scalejs!application'
], function(
    core
) {
    var reactive = core.reactive;

    // For deeper testing, log to console
    console.log('core.reactive: ', reactive);

    describe('core.reactive', function() {

        it('is defined', function() {
            expect(reactive).toBeDefined();
        });

    });
});

