'use strict';

var assert = require('assert'),
		mixinDirectional = require('../lib/mixin-directional'),
		sinon = require('sinon');

describe('Directional mixin', function () {
	beforeEach(function () {
		this.target = {
			_rawNode: {
				setPosition: sinon.spy(),
				setVelocity: sinon.spy(),
				setOrientation: sinon.spy()
			}
		};

		mixinDirectional(this.target);
	});

/*
	it('should call things', function () {
		sinon.assert.calledWith(this.target._rawNode.setPosition, ...);
 		assert(this.target._rawNode.setPosition.calledWith(...));
	});
*/

	describe('setPosition', function() {
		it('should call setPosition on the raw node', function() {
			this.target.setPosition(1, 1);
			assert(this.target._rawNode.setPosition.calledWith(1, 1));
		});
	});

	describe('setOrientation', function() {
		it ('should call setOrientation on the raw node', function() {
			this.target.setOrientation(Math.PI/2);
			assert(this.target._rawNode.setOrientation.calledOnce);
		});

		it('should correctly convert angles to 3D vectors', function() {
			var angle = Math.PI / 2;
			this.target.setOrientation(angle);
			assert(this.target._rawNode.setOrientation.calledWith(
				Math.cos(angle), Math.sin(angle), 0,
				0, 0, 1
			));
		});
	});

	describe('setDirection', function() {
		it('should call setOrientation w/ [0, 1, 0] when given "n"', function() {
			this.target.setDirection("n");
			assert(this.target._rawNode.setOrientation.calledWith(0, 1, 0, 0, 0, 1));
		});

		it('should call setOrientation w/ [0, -1, 0] when given "s"', function() {
			this.target.setDirection("s");
			assert(this.target._rawNode.setOrientation.calledWith(0, -1, 0, 0, 0, 1));
		});

		it('should call setOrientation w/ [-1, 0, 0] when given "w"', function() {
			this.target.setDirection("w");
			assert(this.target._rawNode.setOrientation.calledWith(-1, 0, 0, 0, 0, 1));
		});

		it('should call setOrientation w/ [0, 1, 0] when given "e"', function() {
			this.target.setDirection("e");
			assert(this.target._rawNode.setOrientation.calledWith(1, 0, 0, 0, 0, 1));
		});
	});

	describe('setVelocity', function() {

	});
});
