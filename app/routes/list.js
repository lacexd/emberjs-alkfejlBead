import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            todo: this.store.findAll('todo')
        };
    }
});
