import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        console.log(params.itemid);
        var todo = this.store.find('todo', params.itemid);
        todo.then(function(){
           console.log("this is todo text: " + todo); 
        });
        return {
            todo: todo,
            todoId: params.itemid
        };
    }
});
