import DS from 'ember-data';
import { underscore } from '@ember/string';
import {pluralize, singularize } from 'ember-inflector';
// const inflector = Inflector.inflector;
export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  },
  // keyForModel(attr) {
  //   return underscore(attr);
  // },
  keyForRelationship(rawKey) {
    // console.log("keyForRelationship:",rawKey);
    let key = underscore(rawKey);
    // console.log("keyForRelationship:",key);
    return key;
  }
});
