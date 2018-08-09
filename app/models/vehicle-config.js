import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  year: [
    validator('presence', true),
    // validator('length', {
    //   min: 4,
    //   max: 8
    // }),
    // validator('length', {
    //   isWarning: true,
    //   min: 6,
    //   message: 'Password is weak'
    // })
  ],
  vehicleMake: [
    validator('presence',true)
  ],
  vehicleModel: [
    validator('presence',true)
  ]
  // email: [
  //   validator('presence', true),
  //   validator('format', { type: 'email' })
  // ]
});

export default DS.Model.extend(Validations,{
  title: DS.attr('string'),
  slug: DS.attr('string'),
  vehicleConfigStatus: DS.belongsTo(),
  description: DS.attr('string'),
  year: DS.attr('number'),
  vehicleMake: DS.belongsTo('vehicle-make'),
  vehicleModel: DS.belongsTo('vehicle-model'),
  vehicleTrim: DS.belongsTo('vehicle-trim'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
