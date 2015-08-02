/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var area = require('../src/linear-presets-area');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('area presets', function() {
  it('should convert correctly', function() {
    (5.045e+9).should.be.exactly(convert(5045, invert(area.squareMetreToSquareKilometre)), 'squareMetreToSquareKilometre')
      .and.exactly(convert(504500, invert(area.squareMetreToHectare)), 'squareMetreToHectare')
      .and.exactly(convert(1947.8853898466393, invert(area.squareMetreToSquareMile)), 'squareMetreTosquareMile')
      .and.exactly(convert(1246646.6495018492, invert(area.squareMetreToAcre)), 'squareMetreToAcre')
      .and.exactly(convert(6033769783.58895, invert(area.squareMetreToSquareYard)), 'squareMetreToSquareYard')
      .and.exactly(convert(54303928052.300545, invert(area.squareMetreToSquareFoot)), 'squareMetreToSquareFoot')
      .and.exactly(convert(7819765639531.279, invert(area.squareMetreToSquareInch)), 'squareMetreToSquareInch');

    (0).should.be.exactly(convert(0, area.squareMetreToSquareKilometre), 'squareMetreToSquareKilometre')
      .and.exactly(convert(0, area.squareMetreToHectare), 'squareMetreToHectare')
      .and.exactly(convert(0, area.squareMetreToSquareMile), 'squareMetreTosquareMile')
      .and.exactly(convert(0, area.squareMetreToAcre), 'squareMetreToAcre')
      .and.exactly(convert(0, area.squareMetreToSquareYard), 'squareMetreToSquareYard')
      .and.exactly(convert(0, area.squareMetreToSquareFoot), 'squareMetreToSquareFoot')
      .and.exactly(convert(0, area.squareMetreToSquareInch), 'squareMetreToSquareInch');
  });
});
