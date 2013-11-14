'use strict';

function SoundNode(context) {
  this._context = context;
  this._rawNode = null;
}

SoundNode.prototype.playRawData = function (length, sampleRate, channel0, dest, gain) {
  dest = dest || this._context.destination;

  var destAudioBuffer = this._context.createBuffer(1, length, sampleRate);
  destAudioBuffer.getChannelData(0).set(channel0);

  if (this._rawNode) {
    this._rawNode.disconnect();
  }

  this._rawNode = this._context.createBufferSource();
  this._rawNode.buffer = destAudioBuffer;

  if (gain) {
    var gainNode = this._context.createGain();
    gainNode.gain.value = gain;
    this._rawNode.connect(gainNode);
    gainNode.connect(dest);
  }
  else {
    this._rawNode.connect(dest);
  }

  this._rawNode.start();
};

SoundNode.prototype.playAudioBuffer = function (audioBuffer, dest, options) {
  dest = dest || this._context.destination;

  if (this._rawNode) {
    this._rawNode.disconnect();
  }

  this._rawNode = this._context.createBufferSource();
  this._rawNode.buffer = audioBuffer;
  this._rawNode.loop = !!(options && options.loop);

  this._rawNode.connect(dest);
  this._rawNode.start();
};

SoundNode.prototype.stopPlaying = function () {
  this._rawNode.stop();
};

module.exports = SoundNode;
