import DS from 'ember-data';
import { underscore } from '@ember/string';
import Inflector from 'ember-inflector';
const inflector = Inflector.inflector;
// const { pluralize } = inflector;
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  // Application specific overrides go here
  namespace: 'api/v1',
  host: config.apiBaseUrl,
  pathForType: function(modelName) {
    return inflector.pluralize(underscore(modelName));
  }
});