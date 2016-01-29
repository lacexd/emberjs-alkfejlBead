import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo: function (todoData) {
            console.log(todoData);
            var _this = this;
            var todo = this.store.createRecord('todo', todoData);
            todo.save().then(function(){
                console.log("todo was saved succesfully");
                _this.transitionTo('list');
            });
            
        }
    }
});
