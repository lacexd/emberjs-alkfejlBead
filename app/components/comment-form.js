import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSubmit: function () {
            console.log("mentve");
            this.get('onSave')({
                todo: $('[name="todoId"]').val(),
                text: $('[name="text"]').val(),
            });
        }
    }
});
