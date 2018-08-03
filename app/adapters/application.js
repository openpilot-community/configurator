import DS from 'ember-data';
import { underscore } from '@ember/string';
import Inflector from 'ember-inflector';
import config from '../../config/environment';
const inflector = Inflector.inflector;
export default DS.JSONAPIAdapter.extend({
  // Application specific overrides go here
  namespace: 'api/v1',
  host: config.apiBaseUrl,
  pathForType(type) {
    return underscore(inflector.pluralize(type));
  }
});