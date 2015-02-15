import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['x-slider'],
  tagName: ['input'],
  attributeBindings: ['min', 'max', 'step', 'type', 'name'],
  type: "range",

  setup: function() {
    Ember.oneWay(this, 'element.value', 'value');
  }.on('didInsertElement'),

  input: function() {
    this.set('value', Number(this.get('element.value')).valueOf());
  }
});
