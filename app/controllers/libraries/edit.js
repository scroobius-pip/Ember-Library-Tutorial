import Ember from 'ember';

export default Ember.Controller.extend({
    changed: Ember.computed('model.hasDirtyAttributes', function() {
        return this.get('model.hasDirtyAttributes');
    })
});