import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newComment: function (commentData) {
            console.log("this is comment data" + commentData);
            
            var store = this.store;
            var comment = store.createRecord('comment', {
                text: commentData.text
            });
            store.find('todo', commentData.todo).then(function(myTodo){
                comment.set('todo', myTodo);
            });
            
            
        }
    }
});
