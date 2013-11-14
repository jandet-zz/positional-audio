'use strict';

function mixinDirectional(target) {
  target.setPosition = function (x, y) {
    this._rawNode.setPosition(x, y, 0);
  };

  target.setOrientation = function(angle) {
    var frontVector = angleToVector(angle);
    setOrientation(this._rawNode, frontVector);
  };

  target.setDirection = function(direction) {
    var frontVector = directionToVector(direction);
    setOrientation(this._rawNode, frontVector);
  };

  target.setVelocity = function(x, y) {
    this._rawNode.setVelocity(x, y, 0);
  };
};

function setOrientation(rawNode, frontVector) {
  var upVector = [0, 0, 1];
  rawNode.setOrientation(
    frontVector[0], frontVector[1], frontVector[2],
    upVector[0], upVector[1], upVector[2]
  );
}

function directionToVector(dir) {
  switch (dir) {
    case "n":
      return [0, 1, 0];
    case "s":
      return [0, -1, 0];
    case "w":
      return [-1, 0, 0];
    case "e":
      return [1, 0, 0];
  }
}

// -pi <= angle <= pi
function angleToVector(angle) {
  return [Math.cos(angle), Math.sin(angle), 0];
}

module.exports = mixinDirectional;
