import {
  validatePresence,
  validateLength,
  validateInclusion
} from 'ember-changeset-validations/validators';

export default {
  year: [validatePresence(true), validateLength({ min: 4, max: 4 })],
  make: [validatePresence(true)],
  model: [validatePresence(true)]
};