import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor("images").findBy("id", params.id);
  }
});
