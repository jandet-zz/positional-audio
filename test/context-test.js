'use strict';

var Context = require('../lib/context'),
    PanningSound = require('../lib/panning-sound'),
    Listener = require('../lib/listener'),
    assert = require('assert');

describe('Context', function () {
  beforeEach(function () {
    this.context = new Context();
  });

  it('should have a listener property that is a Listener', function () {
    assert(this.context.hasOwnProperty('listener'));
    assert(this.context.listener instanceof Listener);
  });
});

/*

var c = new Context();

test('_audioContext', function(t) {
  t.ok(c._audioContext, 'Audio Context exists');
  t.end();
});

test('listener', function(t) {
  t.plan(2);
  t.ok(c.listener, 'Listener exists');
  t.deepEqual(c.listener._rawNode, c._audioContext.listener, 'Listener is set to Audio Context native listener');
});

test('creatPanningSound', function(t) {
  var panner = c.createPanningSound(c._audioContext);
  t.ok(panner instanceof PanningSound, "creates a PanningSound");
  t.end();
});

test('createAudioBufferFromURL', function(t) {
});

*/