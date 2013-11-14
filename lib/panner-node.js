'use strict';

var mixinDirectional = require('./mixin-directional');

function PannerNode(context) {
  this._rawNode = context.createPanner();
}

mixinDirectional(PannerNode.prototype);

module.exports = PannerNode;
