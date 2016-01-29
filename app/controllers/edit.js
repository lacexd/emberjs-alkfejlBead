import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveTodo: function (todoData) {
            this.store.find('todo', todoData.id)
            .then(function(todoStuff){
                console.log(todoStuff);
                todoStuff.set('text', todoData.text);
                todoStuff.save();
            });
        }
    }
});
