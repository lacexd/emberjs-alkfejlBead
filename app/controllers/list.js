import Ember from 'ember';

export default Ember.Controller.extend({
     actions: {
        deleteTodo: function (todoData) {
            console.log(todoData.id);
            this.store.find('todo', todoData.id).then(function(post) {
                post.destroyRecord();
            });
        }
    }
});