/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var area = require('linear-preset-factory')(require('../src/linear-presets-area'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice(0).reverse();
}

describe('area presets', function() {
  it('should convert correctly', function() {
    (5.045e+9).should.be.exactly(convert(5.045e+9, invert(area.squareMetre_squareMetre)), 'squareMetre_squareMetre')
      .and.exactly(convert(5045, invert(area.squareMetre_squareKilometre)), 'squareMetre_squareKilometre')
      .and.exactly(convert(504500, invert(area.squareMetre_hectare)), 'squareMetre_hectare')
      .and.exactly(convert(1947.8853898466393, invert(area.squareMetre_squareMile)), 'squareMetre_squareMile')
      .and.exactly(convert(1246646.6495018492, invert(area.squareMetre_acre)), 'squareMetre_acre')
      .and.exactly(convert(6033769783.58895, invert(area.squareMetre_squareYard)), 'squareMetre_squareYard')
      .and.exactly(convert(54303928052.300545, invert(area.squareMetre_squareFoot)), 'squareMetre_squareFoot')
      .and.exactly(convert(7819765639531.279, invert(area.squareMetre_squareInch)), 'squareMetre_squareInch');

    (0).should.be.exactly(convert(0, area.squareMetre_squareMetre), 'squareMetre_squareMetre')
      .and.exactly(convert(0, area.squareMetre_squareKilometre), 'squareMetre_squareKilometre')
      .and.exactly(convert(0, area.squareMetre_hectare), 'squareMetre_hectare')
      .and.exactly(convert(0, area.squareMetre_squareMile), 'squareMetre_squareMile')
      .and.exactly(convert(0, area.squareMetre_acre), 'squareMetre_acre')
      .and.exactly(convert(0, area.squareMetre_squareYard), 'squareMetre_squareYard')
      .and.exactly(convert(0, area.squareMetre_squareFoot), 'squareMetre_squareFoot')
      .and.exactly(convert(0, area.squareMetre_squareInch), 'squareMetre_squareInch');
  });
});
