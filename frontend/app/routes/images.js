import Ember from 'ember';
import imageData from '../utils/image-data';

export default Ember.Route.extend({
  model: function() {
    return imageData();
  }
});
