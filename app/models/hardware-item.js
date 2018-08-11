import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  alternateName: DS.attr('string'),
  description: DS.attr('string'),
  hardwareType: DS.belongsTo('hardware-type'),
  compatibleWithAllVehicles: DS.attr('boolean'),
  availableForPurchase: DS.attr('boolean'),
  purchaseUrl: DS.attr('string'),
  requiresAssembly: DS.attr('boolean'),
  canBeBuilt: DS.attr('boolean'),
  buildPlansUrl: DS.attr('string'),
  notes: DS.attr('string'),
  imageUrl: DS.attr('string'),
  installGuideUrl: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
