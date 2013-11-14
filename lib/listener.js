'use strict';

var mixinDirectional = require('./mixin-directional');

function Listener(audioContext) {
  this._rawNode = audioContext.listener;
}

mixinDirectional(Listener.prototype);

module.exports = Listener;
