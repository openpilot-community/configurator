import DS from 'ember-data';

export default DS.Model.extend({
  make: DS.belongsTo('vehicle-make'),
  model: DS.belongsTo('vehicle-model'),
  year: DS.attr('number'),
  makeId: DS.attr('string'),
  makeDisplay: DS.attr('string'),
  name: DS.attr('string'),
  trim: DS.attr('string'),
  body: DS.attr('string'),
  enginePosition: DS.attr(),
  engineCc: DS.attr('number'),
  engineCyl: DS.attr('number'),
  engineType: DS.attr('string'),
  engineValvesPerCyl: DS.attr('number'),
  enginePowerPs: DS.attr('number'),
  enginePowerRpm: DS.attr('number'),
  engineTorqueNm: DS.attr('number'),
  engineTorqueRpm: DS.attr('number'),
  engineBoreMm: DS.attr('number'),
  engineStrokeMm: DS.attr('number'),
  engineCompression: DS.attr('number'),
  engineFuel: DS.attr('string'),
  topSpeedKph: DS.attr('number'),
  zeroTo100Kph: DS.attr('number'),
  drive: DS.attr('string'),
  drive2: DS.attr('string'),
  seats: DS.attr('number'),
  seats2: DS.attr('number'),
  weightKg: DS.attr('number'),
  lengthMm: DS.attr('number'),
  widthMm: DS.attr('number'),
  heightMm: DS.attr('number'),
  wheelbaseMm: DS.attr('number'),
  lkmHwy: DS.attr('number'),
  lkmMixed: DS.attr('number'),
  lkmCity: DS.attr('number'),
  fuelCapL: DS.attr('number'),
  soldInUs: DS.attr('boolean'),
  co2: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
