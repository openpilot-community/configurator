import Controller from '@ember/controller';
import { array } from 'ember-awesome-macros';

export default Controller.extend({
  makes: array.mapBy('model','make')
});
