import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSubmit: function () {
            this.get('onSave')({
                id: $('[name="id"]').val(),
                leiras: $('[name="text"]').val(),
            });
        }
    }
});
