import DS from 'ember-data';
import { underscore } from '@ember/string';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
export default DS.JSONAPIAdapter.extend({
  // Application specific overrides go here
  namespace: 'api/v1',
  host: 'http://localhost:3000',
  pathForType(type) {
    return underscore(inflector.pluralize(type));
  }
});