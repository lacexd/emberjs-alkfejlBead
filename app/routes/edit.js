import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.find('todo', params.itemid);
    }
});
